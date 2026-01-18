const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const db = require('./db');
const auth = require('./auth');
const mssqlAuth = require('./mssqlAuth');
const analytics = require('./analytics');
const app = express();

// Security: Helmet middleware for security headers
app.use(helmet({
    contentSecurityPolicy: false, // Disable CSP for now to avoid breaking existing functionality
    crossOriginEmbedderPolicy: false
}));

// Security: CORS configuration
const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000', 'http://localhost:8080'],
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());
app.set('etag', false); // Disable ETags globally to prevent 304 responses

// Security: Rate limiting for authentication endpoints
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 attempts per window
    message: { error: 'Too many login attempts, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false
});

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per window
    message: { error: 'Too many requests, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false
});

// Apply general rate limiting to all API routes
app.use('/api/', apiLimiter);

// Debugging
console.log('Initializing Routes...');

// API: Settings (Moved to top for priority)
app.get('/api/settings', (req, res) => {
    res.set('Cache-Control', 'no-store');
    console.log('GET /api/settings hit');
    try {
        const config = db.getCurrentConfig();
        res.json(config);
    } catch (err) {
        console.error('Error in GET /api/settings:', err);
        res.status(500).json({ error: 'Failed to retrieve settings' });
    }
});

// API: Test Connection (Check credentials without saving)
app.post('/api/test-connection', async (req, res) => {
    console.log('POST /api/test-connection hit');
    try {
        const testConfig = req.body;
        // Basic validation
        if (!testConfig.server || !testConfig.user || !testConfig.database) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        await db.testConnection(testConfig);
        res.json({ message: 'Connection successful!' });
    } catch (err) {
        console.error('Test Connection Failed:', err.message);
        res.status(500).json({ error: `Connection failed: ${err.message}` });
    }
});

// API: Deploy Database Views (Production Setup)
app.post('/api/deploy-views', async (req, res) => {
    console.log('POST /api/deploy-views hit');
    try {
        const logs = await db.deployViews();
        res.json({ logs });
    } catch (err) {
        console.error('Deployment Failed:', err.message);
        res.status(500).json({ error: 'Deployment process crashed.', logs: [err.message] });
    }
});

app.post('/api/settings', async (req, res) => {
    console.log('POST /api/settings hit');
    try {
        const newConfig = req.body;
        if (!newConfig.server || !newConfig.user || !newConfig.database) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        await db.saveConfig(newConfig);
        res.json({ message: 'Configuration saved and connection tested successfully!' });
    } catch (err) {
        console.error('Settings Update Failed:', err.message);
        res.status(500).json({ error: `Connection failed: ${err.message}` });
    }
});

// --- AUTHENTICATION ROUTES ---

// Login (with rate limiting and input validation)
app.post('/api/login', loginLimiter, [
    body('username').trim().notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required')
], async (req, res) => {
    try {
        // Validate input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: 'Invalid input', details: errors.array() });
        }

        const { username, password } = req.body;
        const user = await auth.authenticate(username, password);
        if (user) {
            res.json({ success: true, user });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('Login error:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
});

// REMOVED: Duplicate route definition - already defined at line 49

// List Users
app.get('/api/users', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const users = await auth.listUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create User (with input validation)
app.post('/api/users', [
    body('username').trim().isLength({ min: 3, max: 50 }).withMessage('Username must be 3-50 characters'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    body('role').optional().isIn(['user', 'admin']).withMessage('Role must be user or admin'),
    body('dashboardPassword').notEmpty().withMessage('Dashboard password is required')
], async (req, res) => {
    try {
        // Validate input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: 'Invalid input', details: errors.array() });
        }

        const { username, password, role, dashboardPassword } = req.body;

        // Verify dashboard credentials
        const isValid = await mssqlAuth.verifyDashboardUser(dashboardPassword);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid dashboard credentials' });
        }

        const newUser = await auth.createUser(username, password, role);
        res.json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Reset User Password (Admin function with validation)
app.put('/api/users/:username/reset-password', [
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    body('dashboardPassword').notEmpty().withMessage('Dashboard password is required')
], async (req, res) => {
    try {
        // Validate input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: 'Invalid input', details: errors.array() });
        }

        const { username } = req.params;
        const { password, dashboardPassword } = req.body;

        // Verify dashboard credentials
        const isValid = await mssqlAuth.verifyDashboardUser(dashboardPassword);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid dashboard credentials' });
        }

        await auth.resetPassword(username, password);
        res.json({ success: true, message: 'Password updated successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete User
app.delete('/api/users/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const { dashboardPassword } = req.body;

        // Verify dashboard credentials
        if (!dashboardPassword) {
            return res.status(400).json({ error: 'Dashboard password is required' });
        }

        const isValid = await mssqlAuth.verifyDashboardUser(dashboardPassword);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid dashboard credentials' });
        }

        await auth.deleteUser(username);
        res.json({ success: true, message: 'User deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Reset Password (Admin Recovery via MSSQL)
app.post('/api/auth/recovery', async (req, res) => {
    try {
        const { mssqlPassword, newAdminPassword } = req.body;

        // 1. Verify MSSQL "Administrator" Credentials
        // We use the same server/database from current config, but force user='Administrator'
        const currentConfig = db.getCurrentConfig();
        const recoveryConfig = {
            ...currentConfig,
            user: 'Administrator',
            password: mssqlPassword
        };

        try {
            await db.testConnection(recoveryConfig);
        } catch (dbErr) {
            console.error('Recovery failed:', dbErr);
            return res.status(401).json({ error: 'Invalid MSSQL Administrator password' });
        }

        // 2. Reset App Admin Password
        await auth.resetPassword('admin', newAdminPassword);
        res.json({ success: true, message: 'Admin password reset successfully' });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Reset Password (Internal User Management)
// Reset Password (Internal User Management)
app.put('/api/users/:username/reset-password', async (req, res) => {
    try {
        const { username } = req.params;
        const { password, dashboardPassword } = req.body;

        // Verify dashboard credentials
        if (!dashboardPassword) {
            return res.status(400).json({ error: 'Dashboard password is required' });
        }

        const isValid = await mssqlAuth.verifyDashboardUser(dashboardPassword);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid dashboard credentials' });
        }

        await auth.resetPassword(username, password); // Note: auth.resetPassword expects (username, password)
        res.json({ success: true, message: 'Password reset successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// Modify User
app.put('/api/users/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const { newUsername, newRole, dashboardPassword } = req.body;

        // Verify dashboard credentials
        if (!dashboardPassword) {
            return res.status(400).json({ error: 'Dashboard password is required' });
        }

        const isValid = await mssqlAuth.verifyDashboardUser(dashboardPassword);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid dashboard credentials' });
        }

        const updatedUser = await auth.modifyUser(username, newUsername, newRole);
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete User
// Delete User
app.delete('/api/users/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const { dashboardPassword } = req.body; // DELETE requests can have body, or use query param? 
        // Express/HTTP allows body in DELETE, but some clients strip it. FETCH supports it.
        // Frontend sends body in DELETE.

        // Verify dashboard credentials
        if (!dashboardPassword) {
            return res.status(400).json({ error: 'Dashboard password is required' });
        }

        const isValid = await mssqlAuth.verifyDashboardUser(dashboardPassword);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid dashboard credentials' });
        }

        const success = auth.deleteUser(username);
        if (success) res.json({ success: true });
        else res.status(404).json({ error: 'User not found' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// --- ANALYTICS ROUTES ---

// Access Patterns & Security Analytics
app.get('/api/analytics/peak-access-times', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { dateRange, startDate, endDate } = req.query;
        const result = await analytics.getPeakAccessTimes(dateRange, startDate, endDate);
        res.json(result);
    } catch (err) {
        console.error('Error in peak-access-times:', err);
        res.status(500).json({ error: 'Failed to fetch peak access times' });
    }
});

app.get('/api/analytics/door-utilization', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { dateRange, startDate, endDate } = req.query;
        const result = await analytics.getDoorUtilization(dateRange, startDate, endDate);
        res.json(result);
    } catch (err) {
        console.error('Error in door-utilization:', err);
        res.status(500).json({ error: 'Failed to fetch door utilization' });
    }
});

app.get('/api/analytics/access-denial-trends', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { dateRange, startDate, endDate } = req.query;
        const result = await analytics.getAccessDenialTrends(dateRange, startDate, endDate);
        res.json(result);
    } catch (err) {
        console.error('Error in access-denial-trends:', err);
        res.status(500).json({ error: 'Failed to fetch access denial trends' });
    }
});

app.get('/api/analytics/unauthorized-attempts', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { dateRange, startDate, endDate } = req.query;
        const result = await analytics.getUnauthorizedAttempts(dateRange, startDate, endDate);
        res.json(result);
    } catch (err) {
        console.error('Error in unauthorized-attempts:', err);
        res.status(500).json({ error: 'Failed to fetch unauthorized attempts' });
    }
});

// Employee & Cardholder Insights
app.get('/api/analytics/active-inactive-cardholders', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { dateRange } = req.query;
        const result = await analytics.getActiveVsInactiveCardholders(dateRange);
        res.json(result);
    } catch (err) {
        console.error('Error in active-inactive-cardholders:', err);
        res.status(500).json({ error: 'Failed to fetch cardholder statistics' });
    }
});

app.get('/api/analytics/department-access', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { dateRange, startDate, endDate } = req.query;
        const result = await analytics.getDepartmentAccessPatterns(dateRange, startDate, endDate);
        res.json(result);
    } catch (err) {
        console.error('Error in department-access:', err);
        res.status(500).json({ error: 'Failed to fetch department access patterns' });
    }
});

app.get('/api/analytics/cardholder-risk-scores', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { dateRange, startDate, endDate } = req.query;
        const result = await analytics.getCardholderRiskScores(dateRange, startDate, endDate);
        res.json(result);
    } catch (err) {
        console.error('Error in cardholder-risk-scores:', err);
        res.status(500).json({ error: 'Failed to fetch cardholder risk scores' });
    }
});

// Operational Metrics
app.get('/api/analytics/system-health', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const result = await analytics.getSystemHealthMetrics();
        res.json(result);
    } catch (err) {
        console.error('Error in system-health:', err);
        res.status(500).json({ error: 'Failed to fetch system health metrics' });
    }
});

app.get('/api/analytics/zone-occupancy', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const result = await analytics.getZoneOccupancy();
        res.json(result);
    } catch (err) {
        console.error('Error in zone-occupancy:', err);
        res.status(500).json({ error: 'Failed to fetch zone occupancy' });
    }
});

app.get('/api/analytics/behavior-compliance', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { dateRange, startDate, endDate } = req.query;
        const result = await analytics.getBehaviorCompliance(dateRange, startDate, endDate);
        res.json(result);
    } catch (err) {
        console.error('Error in behavior-compliance:', err);
        res.status(500).json({ error: 'Failed to fetch behavior compliance' });
    }
});

// Time-Based Analytics
app.get('/api/analytics/after-hours-access', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { dateRange, startDate, endDate } = req.query;
        const result = await analytics.getAfterHoursAccess(dateRange, startDate, endDate);
        res.json(result);
    } catch (err) {
        console.error('Error in after-hours-access:', err);
        res.status(500).json({ error: 'Failed to fetch after-hours access' });
    }
});

app.get('/api/analytics/weekend-holiday-patterns', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { dateRange, startDate, endDate } = req.query;
        const result = await analytics.getWeekendHolidayPatterns(dateRange, startDate, endDate);
        res.json(result);
    } catch (err) {
        console.error('Error in weekend-holiday-patterns:', err);
        res.status(500).json({ error: 'Failed to fetch weekend/holiday patterns' });
    }
});

app.get('/api/analytics/response-time-metrics', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { dateRange, startDate, endDate } = req.query;
        const result = await analytics.getResponseTimeMetrics(dateRange, startDate, endDate);
        res.json(result);
    } catch (err) {
        console.error('Error in response-time-metrics:', err);
        res.status(500).json({ error: 'Failed to fetch response time metrics' });
    }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// Helper to format date for SQL
const formatDate = (d) => new Date(d).toISOString();

// GET /api/transit - Fetch transit logs
app.get('/api/transit', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { search, limit = 1000, start, end } = req.query;
        const params = {};

        // Base Query
        // Using v_TransitLog (Security View)
        let query = `
            SELECT TOP (@limit)
                EventTime,
                CardholderName,
                DoorName,
                DoorDescription,
                Location,
                CardNumber,
                EventType,
                AccessGranted
            FROM v_TransitLog WITH (NOLOCK)
            WHERE 1=1
        `;

        // Parameters
        params.limit = parseInt(limit);

        // Date Filter
        if (start) {
            query += " AND EventTime >= @start";
            params.start = new Date(start);
        }
        if (end) {
            query += " AND EventTime <= @end";
            params.end = new Date(end);
        }

        // Search Filter
        if (search) {
            query += `
                AND (
                    CardholderName LIKE @search OR
                    DoorName LIKE @search OR
                    DoorDescription LIKE @search OR
                    CardNumber LIKE @search OR
                    EventType LIKE @search
                )
            `;
            params.search = `%${search}%`;
        }

        // Ordering (Newest first)
        query += " ORDER BY EventTime DESC";

        const result = await db.executeQuery(query, params);
        res.json(result);

    } catch (err) {
        console.error('Error fetching transit logs:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// GET /api/employees - Fetch all employee details
app.get('/api/employees', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const query = `
            SELECT 
                SbiID,
                Name,
                Surname,
                Society AS Department,
                CHDocument1 AS CardNumber,
                site,
                Telephone,
                EMail,
                Visitor_Type = 'Employee' -- Hardcoded/Assumed for now
            FROM Visitor WITH (NOLOCK)
            ORDER BY Surname, Name
        `;

        const result = await db.executeQuery(query);
        res.json(result);

    } catch (err) {
        console.error('Error fetching employees:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Get all cardholders with their cards and behaviors
app.get('/api/cardholders', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const query = `
            SELECT * FROM v_CardholderDetails
            ORDER BY CardholderName
        `;
        const result = await db.executeQuery(query);
        res.json(result);
    } catch (err) {
        console.error('Error fetching cardholders:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Get doors for a specific behavior
app.get('/api/behaviors/:behaviorId/doors', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const { behaviorId } = req.params;
        const query = `
            SELECT * FROM v_BehaviorDoors 
            WHERE BEHAVIOR_ID = @behaviorId
        `;
        const result = await db.executeQuery(query, { behaviorId: parseInt(behaviorId) });
        res.json(result);
    } catch (err) {
        console.error('Error fetching behavior doors:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// --- SELF-CONTAINED SETUP WIZARD ---
const fs = require('fs');
const readline = require('readline');

const CONFIG_PATH = path.join(process.cwd(), 'config.json');

async function prompt(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

async function runSetupWizard() {
    console.log('\n===================================================');
    console.log('      SSMC ACS DASHBOARD - FIRST RUN SETUP');
    console.log('===================================================');
    console.log('[!] Configuration file not found. Let\'s create it.\n');

    const appPort = await prompt('Enter Dashboard Port (default 3000, use 80 for no-port URL): ') || '3000';
    const server = await prompt('Enter SQL Server IP: ');
    const dbPort = await prompt('Enter SQL Server Port (default 1433): ') || '1433';
    const user = await prompt('Enter SQL User: ');
    const password = await prompt('Enter SQL Password: ');
    const database = await prompt('Enter Database Name (default cms): ') || 'cms';

    const newConfig = {
        appPort: parseInt(appPort),
        user,
        password,
        server,
        database,
        port: parseInt(dbPort),
        encrypt: false,
        trustServerCertificate: true
    };

    fs.writeFileSync(CONFIG_PATH, JSON.stringify(newConfig, null, 2));
    console.log('\n[OK] Configuration saved to config.json!\n');
    return newConfig;
}

async function main() {
    let config;
    if (fs.existsSync(CONFIG_PATH)) {
        config = db.getCurrentConfig();
    } else {
        config = await runSetupWizard();
        // Force reload in db module if needed, or just let connectDB handle it
    }

    const PORT = process.env.PORT || config.appPort || 3000;

    const serverInstance = app.listen(PORT, '0.0.0.0', () => {
        console.log(`\n🚀 SSMC ACS Dashboard Backend running on port ${PORT}`);
        console.log(`📂 Serving static files from: ${path.join(__dirname, 'public')}`);
        console.log('---------------------------------------------------');
        console.log(`Open http://localhost:${PORT} or http://${require('os').hostname()}:${PORT}`);
        console.log('---------------------------------------------------');
        console.log('---------------------------------------------------');
    });

    serverInstance.on('error', (e) => {
        if (e.code === 'EADDRINUSE') {
            console.error('\n[FATAL ERROR] Port ' + PORT + ' is already in use!');
            console.error('---------------------------------------------------');
            console.error('>> SOLUTION 1: Edit "config.json" and change "appPort" to a different number (e.g. 3000, 8080).');
            console.error('>> SOLUTION 2: Delete "config.json" and restart the EXE to run the setup wizard again.');
            console.error('---------------------------------------------------');
            process.exit(1);
        } else {
            console.error(e);
        }
    });
}

main();
