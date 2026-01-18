const { subDays } = require('date-fns');

// --- 1. RELATIONAL TABLES (Simulating SQL Database) ---

const LOCATIONS = [
    { id: 1, name: 'Main HQ', zone: 'A' },
    { id: 2, name: 'Warehouse B', zone: 'B' },
    { id: 3, name: 'Server Farm', zone: 'Secure' },
    { id: 4, name: 'Executive Wing', zone: 'A' }
];

const DOORS = [
    { id: 101, name: 'Main Entrance', location_id: 1, restricted: false },
    { id: 102, name: 'Lobby Turnstile', location_id: 1, restricted: false },
    { id: 103, name: 'Loading Dock', location_id: 2, restricted: true },
    { id: 104, name: 'Server Room 1', location_id: 3, restricted: true },
    { id: 105, name: 'Exec Office', location_id: 4, restricted: true },
    { id: 106, name: 'Cafeteria', location_id: 1, restricted: false }
];

const DEPARTMENTS = ['Engineering', 'HR', 'Sales', 'Security', 'Logistics'];

const USERS = Array.from({ length: 50 }, (_, i) => ({
    id: 1000 + i,
    name: ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'][i % 10] + ` ${String.fromCharCode(65 + Math.floor(i / 10))}.`,
    card_number: 100000 + i,
    department: DEPARTMENTS[i % 5],
    clearance_level: i % 3 + 1 // 1=Low, 3=High
}));

// --- 2. RAW EVENTS TABLE (Normalized - Only IDs) ---
// Simulating 2,500 historical records
let EVENTS_DB = [];

const generateHistory = () => {
    const now = new Date();
    // Generate 2500 records over last 30 days
    for (let i = 0; i < 2500; i++) {
        const user = USERS[Math.floor(Math.random() * USERS.length)];
        const door = DOORS[Math.floor(Math.random() * DOORS.length)];

        // Logic: High clearance users get access everywhere.
        // Low clearance users get denied at restricted doors.
        let accessGranted = true;
        let type = 'Valid Access';

        if (door.restricted && user.clearance_level < 2) {
            accessGranted = false;
            type = 'Access Denied (Level)';
        } else if (Math.random() > 0.95) {
            accessGranted = false;
            type = 'Invalid Badge'; // Random failure
        }

        EVENTS_DB.push({
            event_id: i,
            user_id: user.id,
            door_id: door.id,
            timestamp: subDays(now, Math.random() * 30), // Random time in last 30 days
            access_granted: accessGranted,
            event_type: type
        });
    }

    // Sort by time descending
    EVENTS_DB.sort((a, b) => b.timestamp - a.timestamp);
};

// Initialize DB
generateHistory();

// --- 3. HELPER: JOIN LOGIC ---
const joinEvent = (event) => {
    const user = USERS.find(u => u.id === event.user_id);
    const door = DOORS.find(d => d.id === event.door_id);
    const location = LOCATIONS.find(l => l.id === door.location_id);

    return {
        EventID: event.event_id,
        EventTime: event.timestamp,
        CardholderName: user ? user.name : 'Unknown',
        CardNumber: user ? user.card_number : 0,
        Department: user ? user.department : 'N/A', // JOINED FIELD
        DoorName: door ? door.name : 'Unknown Door',
        Location: location ? location.name : 'Unknown Loc', // JOINED FIELD
        EventType: event.event_type,
        AccessGranted: event.access_granted
    };
};

// --- 4. EXPORTS ---

const getDenormalizedData = () => {
    // Return all events, joined
    return EVENTS_DB.map(joinEvent);
};

const generateLiveEvent = () => {
    const user = USERS[Math.floor(Math.random() * USERS.length)];
    const door = DOORS[Math.floor(Math.random() * DOORS.length)];
    const now = new Date();

    let accessGranted = true;
    let type = 'Valid Access';

    if (door.restricted && user.clearance_level < 2) {
        accessGranted = false;
        type = 'Access Denied (Level)';
    }

    const newEvent = {
        event_id: Date.now(),
        user_id: user.id,
        door_id: door.id,
        timestamp: now,
        access_granted: accessGranted,
        event_type: type
    };

    // Insert into "DB"
    EVENTS_DB.unshift(newEvent);
    if (EVENTS_DB.length > 5000) EVENTS_DB.pop();

    // Return JOINED event for frontend
    return joinEvent(newEvent);
};

module.exports = { getDenormalizedData, generateLiveEvent };
