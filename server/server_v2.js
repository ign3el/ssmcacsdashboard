const express = require('express');
const cors = require('cors');
const path = require('path');
// CHANGED: pointing to db_v2 to ensure we use the clean database logic
const db = require('./db_v2');
const auth = require('./auth');
const app = express();

app.use(cors());
app.use(express.json());

// Debugging
console.log('Initializing Routes (V2)...');

// API: Settings (Moved to top for priority)
app.get('/api/settings', (req, res) => {
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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// Helper to format date for SQL
const formatDate = (d) => new Date(d).toISOString();

// GET /api/transit - Fetch transit logs
app.get('/api/transit', async (req, res) => {
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
        res.status(500).json({ error: `Database error: ${err.message}` });
    }
});

// GET /api/employees - Fetch all employee details
app.get('/api/employees', async (req, res) => {
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
        res.status(500).json({ error: `Database error: ${err.message}` });
    }
});

// Get all cardholders with their cards and behaviors
app.get('/api/cardholders', async (req, res) => {
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

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000; // Keep port 3000
app.listen(PORT, () => {
    console.log(`Connected to SQL Database`);
    console.log(`Server listening on port ${PORT}`);
    console.log('Routes Verified.');
});
