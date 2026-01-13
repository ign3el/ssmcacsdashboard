const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER || 'acs_reader',
    password: process.env.DB_PASSWORD || 'SecurePass123!',
    server: process.env.DB_SERVER || 'localhost',
    database: process.env.DB_NAME || 'cms',
    port: parseInt(process.env.DB_PORT) || 1433,
    options: {
        encrypt: process.env.DB_ENCRYPT === 'true',
        trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE !== 'false',
        readOnlyIntent: process.env.DB_READ_ONLY_INTENT !== 'false' // READ ONLY enforcement
    }
};

// Global pool promise to reuse connection
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

/**
 * Executes a query with mapped parameters.
 * Automatically enforces READ UNCOMMITTED (NOLOCK behavior)
 * @param {string} query 
 * @param {object} params - Key-value pair for parameters
 */
async function executeQuery(query, params = {}) {
    try {
        const pool = await poolPromise;
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

module.exports = {
    sql,
    executeQuery
};
