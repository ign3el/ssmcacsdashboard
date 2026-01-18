const sql = require('mssql');
const { getCurrentConfig } = require('./db');

/**
 * Verify MSSQL credentials using Windows Authentication
 * For high-level operations (reset password, run scripts), this will use Administrator credentials
 * @param {string} password - Password to verify (not used with Windows Auth, kept for API compatibility)
 * @returns {Promise<boolean>} - True if connection is successful, false otherwise
 */
// eslint-disable-next-line no-unused-vars
async function verifyDashboardUser(_password) {
    const config = getCurrentConfig();

    // Create a new config with Windows Authentication using Administrator
    // The domain\username format is used for Windows Authentication
    const adminConfig = {
        server: config.server,
        database: config.database,
        port: config.port,
        options: {
            trustedConnection: true,
            enableArithAbort: true,
            encrypt: config.encrypt || false,
            trustServerCertificate: config.trustServerCertificate !== undefined ? config.trustServerCertificate : true
        },
        // For Windows Authentication, the Node.js process runs as the current Windows user
        // To use Administrator, the app should be run as Administrator
        domain: '', // Leave empty to use local machine account
        // user: 'Administrator' // Not needed - uses current Windows user running the process
    };

    try {
        // Attempt to connect with Windows Authentication
        const pool = await sql.connect(adminConfig);
        await pool.close();
        return true;
    } catch (err) {
        console.error('Windows Authentication verification failed:', err.message);
        console.error('Note: For Administrator access, run the Node.js process as Administrator');
        return false;
    }
}

module.exports = { verifyDashboardUser };
