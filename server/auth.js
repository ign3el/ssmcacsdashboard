const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcryptjs');

const DB_PATH = path.join(process.cwd(), 'auth.db');
let db;

// Initialize Database
const init = async () => {
    if (!db) {
        db = new Database(DB_PATH);
        // Create users table
        db.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                role TEXT DEFAULT 'user',
                created_at TEXT
            )
        `);

        await ensureDefaultUsers();
    }
};

const ensureDefaultUsers = async () => {
    const adminExists = db.prepare('SELECT count(*) as count FROM users WHERE lower(username) = ?').get('admin').count > 0;
    const readerExists = db.prepare('SELECT count(*) as count FROM users WHERE lower(username) = ?').get('acs_reader').count > 0;

    if (!adminExists) {
        console.log('Creating default admin...');
        const pass = await bcrypt.hash('Admin@123!', 10);
        db.prepare('INSERT INTO users (username, password, role, created_at) VALUES (?, ?, ?, ?)').run('admin', pass, 'admin', new Date().toISOString());
    } else {
        // Ensure admin has correct default password if it was auto-created (Optional, but good for reset/recovery scenarios if we want to force it)
        // For now, we only create if missing to avoid overwriting user changes.
    }

    if (!readerExists) {
        console.log('Creating default acs_reader...');
        const pass = await bcrypt.hash('SSMC_Admin_2024!', 10);
        db.prepare('INSERT INTO users (username, password, role, created_at) VALUES (?, ?, ?, ?)').run('acs_reader', pass, 'user', new Date().toISOString());
    }
};


const authenticate = async (username, password) => {
    await init();
    const stmt = db.prepare('SELECT * FROM users WHERE lower(username) = lower(?)');
    const user = stmt.get(username);

    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return null;

    const { password: _, ...userWithoutPass } = user;
    return userWithoutPass;
};

const createUser = async (username, password, role = 'user') => {
    await init();
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const stmt = db.prepare('INSERT INTO users (username, password, role, created_at) VALUES (?, ?, ?, ?)');
        const info = stmt.run(username, hashedPassword, role, new Date().toISOString());
        return { id: info.lastInsertRowid, username, role };
    } catch (err) {
        if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            throw new Error('Username already exists');
        }
        throw err;
    }
};

const resetPassword = async (username, newPassword) => {
    await init();
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const stmt = db.prepare('UPDATE users SET password = ? WHERE lower(username) = lower(?)');
    const info = stmt.run(hashedPassword, username);

    if (info.changes === 0) {
        throw new Error('User not found');
    }
    return true;
};

const listUsers = async () => {
    await init();
    const stmt = db.prepare('SELECT id, username, role, created_at FROM users');
    return stmt.all();
};

const deleteUser = async (username) => {
    await init();
    if (username.toLowerCase() === 'admin' || username.toLowerCase() === 'acs_reader') {
        throw new Error('Cannot delete default system users');
    }
    const stmt = db.prepare('DELETE FROM users WHERE lower(username) = lower(?)');
    const info = stmt.run(username);
    return info.changes > 0;
}

module.exports = {
    authenticate,
    createUser,
    resetPassword,
    listUsers,
    deleteUser
};
