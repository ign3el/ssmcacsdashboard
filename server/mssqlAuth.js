const sql = require('mssql');
const { getCurrentConfig } = require('./db');

/**
 * Verify MSSQL credentials for the 'dashboard' user
 * @param {string} password - Password to verify
 * @returns {Promise<boolean>} - True if credentials are valid, false otherwise
 */
async function verifyDashboardUser(password) {
    const config = getCurrentConfig();

    // Create a new config with 'dashboard' user
    const dashboardConfig = {
        ...config,
        user: 'dashboard',
        password: password,
        options: {
            encrypt: config.encrypt || false,
            trustServerCertificate: config.trustServerCertificate !== undefined ? config.trustServerCertificate : true
        }
    };

    try {
        // Attempt to connect with dashboard credentials
        const pool = await sql.connect(dashboardConfig);
        await pool.close();
        return true;
    } catch (err) {
        console.error('Dashboard user verification failed:', err.message);
        return false;
    }
}

module.exports = { verifyDashboardUser };
