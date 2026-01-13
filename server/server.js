const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

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
                Location,
                Department,
                CardNumber,
                EventType
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
                    Department LIKE @search OR
                    CardNumber LIKE @search
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Connected to SQL Database`);
});
