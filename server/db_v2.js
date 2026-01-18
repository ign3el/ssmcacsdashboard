const sql = require('mssql');
const fs = require('fs');
const path = require('path');
const sqlViews = require('./sqlViews');
require('dotenv').config();

// Path to external config file (for EXE mode)
const CONFIG_PATH = path.join(process.cwd(), 'config.json');

// Default Env Config
let currentConfig = {
    user: process.env.DB_USER || 'acs_reader',
    password: process.env.DB_PASSWORD || 'SecurePass123!',
    server: process.env.DB_SERVER || 'localhost',
    database: process.env.DB_NAME || 'cms',
    port: parseInt(process.env.DB_PORT) || 1433,
    options: {
        encrypt: process.env.DB_ENCRYPT === 'true',
        trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE !== 'false',
        readOnlyIntent: process.env.DB_READ_ONLY_INTENT !== 'false'
    }
};

let pool = null;

// Function to load config from file (overrides env)
function loadConfig() {
    try {
        if (fs.existsSync(CONFIG_PATH)) {
            const raw = fs.readFileSync(CONFIG_PATH, 'utf8');
            const fileConfig = JSON.parse(raw);
            console.log('📝 Loaded configuration from config.json');

            // Merge file config into currentConfig
            currentConfig = {
                ...currentConfig,
                ...fileConfig,
                port: parseInt(fileConfig.port) || currentConfig.port,
                options: {
                    ...currentConfig.options,
                    encrypt: fileConfig.encrypt === true || fileConfig.encrypt === 'true',
                    trustServerCertificate: fileConfig.trustServerCertificate !== false
                }
            };
        }
    } catch (err) {
        console.error('⚠️ Error loading config.json:', err.message);
    }
}

// Initialize Connection
async function connectDB() {
    try {
        // Close existing pool if it exists
        if (pool) {
            try {
                await pool.close();
            } catch (e) {
                console.warn('Warning: Failed to close previous pool', e.message);
            }
        }

        // Reload config before connecting
        loadConfig();

        console.log(`🔌 Connecting to SQL Server at ${currentConfig.server}...`);

        pool = await new sql.ConnectionPool(currentConfig).connect();

        console.log('✅ Connected to MSSQL');
        return pool;

    } catch (err) {
        console.error('❌ Database Connection Failed!', err.message);
        throw err;
    }
}

// Initial connection attempt
connectDB().catch(() => { }); // Suppress initial fail to allow server to start

/**
 * Executes a query with mapped parameters.
 * Automatically enforces READ UNCOMMITTED (NOLOCK behavior)
 */
async function executeQuery(query, params = {}) {
    try {
        // Ensure pool is connected
        if (!pool || !pool.connected) {
            await connectDB();
        }

        const request = pool.request();

        // Bind parameters safely
        for (const key in params) {
            request.input(key, params[key]);
        }

        // PREPEND Transaction Isolation Level to every query
        const safeQuery = `
            SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
            ${query}
        `;

        const result = await request.query(safeQuery);
        return result.recordset;

    } catch (err) {
        console.error('SQL Error:', err);
        throw err;
    }
}

// API to save new config
function saveConfig(newConfig) {
    // UPDATED: Removed useless try/catch wrapper
    const configToSave = {
        user: newConfig.user,
        password: newConfig.password,
        server: newConfig.server,
        database: newConfig.database,
        port: parseInt(newConfig.port),
        encrypt: newConfig.encrypt,
        trustServerCertificate: newConfig.trustServerCertificate
    };

    fs.writeFileSync(CONFIG_PATH, JSON.stringify(configToSave, null, 2));
    console.log('💾 Saved new configuration to config.json');

    // Reconnect immediately
    return connectDB();
}

function getCurrentConfig() {
    return { ...currentConfig };
}

// Test connection without saving
async function testConnection(testConfig) {
    let testPool = null;
    try {
        const configToTest = {
            user: testConfig.user,
            password: testConfig.password,
            server: testConfig.server,
            database: testConfig.database,
            port: parseInt(testConfig.port),
            options: {
                encrypt: testConfig.encrypt === true || testConfig.encrypt === 'true',
                trustServerCertificate: testConfig.trustServerCertificate !== false,
                readOnlyIntent: true
            }
        };

        console.log(`🔌 Testing connection to ${configToTest.server}...`);
        testPool = await new sql.ConnectionPool(configToTest).connect();
        console.log('✅ Test Connection Successful');
        return true;
    } catch (err) {
        console.error('❌ Test Connection Failed:', err.message);
        throw err;
    } finally {
        if (testPool) {
            await testPool.close();
        }
    }
}
// Deploy Views to Database
async function deployViews() {
    const logs = [];
    logs.push('[INFO] Starting Database View Deployment...');

    // Ensure connected
    if (!pool || !pool.connected) {
        try {
            await connectDB();
        } catch (err) {
            logs.push(`[CRITICAL] Database connection failed: ${err.message}`);
            return logs;
        }
    }

    try {

        for (const view of sqlViews) {
            logs.push(`[INFO] Deploying ${view.name}...`);
            try {
                // Split queries by "CREATE VIEW" since dropping and creating in one batch can be tricky if not separated by GO
                const parts = view.sql.split('CREATE VIEW');
                const dropSql = parts[0].replace('GO', '').trim();
                const createSql = 'CREATE VIEW ' + parts[1].replace('GO', '').trim();

                if (dropSql) {
                    await pool.request().query(dropSql);
                }

                await pool.request().query(createSql);
                logs.push(`[SUCCESS] ${view.name} deployed successfully.`);
            } catch (err) {
                logs.push(`[ERROR] Failed to deploy ${view.name}: ${err.message}`);
            }
        }

        logs.push('[INFO] Deployment process completed.');
    } catch (err) {
        logs.push(`[FATAL] Unexpected error during deployment: ${err.message}`);
    }

    return logs;
}

module.exports = {
    sql,
    executeQuery,
    saveConfig,
    getCurrentConfig,
    testConnection,
    deployViews
};
