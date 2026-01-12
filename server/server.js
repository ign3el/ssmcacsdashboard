const express = require('express');
const cors = require('cors');
const { getDenormalizedData, generateLiveEvent } = require('./mockData');

const app = express();
app.use(cors());
app.use(express.json());

// In-Memory Database (Cache) - Initial Load (Simulates SQL SELECT)
let cachedData = getDenormalizedData();

// Refresh Mock Data periodically to simulate "Live" system
setInterval(() => {
    // Generate 1-5 new events every 2 seconds for faster "Live" feel
    const newEventsCount = Math.floor(Math.random() * 5) + 1;
    const newEvents = Array.from({ length: newEventsCount }, () => generateLiveEvent());

    // Prepend new events (Live update)
    // Keep last 5000 records in memory
    cachedData = [...newEvents, ...cachedData].slice(0, 5000);
}, 2000);

// GET /api/transit - Fetch transit logs with Server-Side Filtering
app.get('/api/transit', (req, res) => {
    const { search, limit = 1000, start, end } = req.query;

    let results = cachedData;

    // 1. Date Range Filter
    if (start || end) {
        results = results.filter(row => {
            const rowDate = new Date(row.EventTime);
            const afterStart = start ? rowDate >= new Date(start) : true;
            const beforeEnd = end ? rowDate <= new Date(end) : true;
            return afterStart && beforeEnd;
        });
    }

    // 2. Search Filter (Multi-column)
    if (search) {
        const term = search.toLowerCase();
        results = results.filter(row =>
            row.CardholderName.toLowerCase().includes(term) ||
            row.DoorName.toLowerCase().includes(term) ||
            row.Location.toLowerCase().includes(term) ||
            String(row.CardNumber).includes(term) ||
            row.Department.toLowerCase().includes(term) ||
            row.EventType.toLowerCase().includes(term)
        );
    }

    // 3. Limit (Default 1000 for performance)
    results = results.slice(0, parseInt(limit));

    res.json(results);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Mock Data Loaded: ${cachedData.length} records`);
});
