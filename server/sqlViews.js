const transitLogView = `
IF OBJECT_ID('dbo.v_TransitLog', 'V') IS NOT NULL
    DROP VIEW dbo.v_TransitLog;
    
CREATE VIEW dbo.v_TransitLog AS
SELECT
    t.TRANSIT_DATE AS EventTime,
    ISNULL(t.NAME, 'Unknown') + ' ' + ISNULL(t.SURNAME, '') AS CardholderName,
    t.TERMINAL AS DoorName,
    ISNULL(d.DESCRIPTION, t.TERMINAL) AS DoorDescription,
    t.TERMINAL AS Location,
    t.CARD_NUMBER AS CardNumber,
    ISNULL(s.NOTES, t.STR_TRANSIT_STATUS) AS EventType,
    t.SBI_ID,
    CASE WHEN t.TRANSIT_STATUS = 0 THEN 1 ELSE 0 END AS AccessGranted
FROM dbo.HA_TRANSIT t WITH (NOLOCK)
LEFT JOIN dbo.MG_TYPE_TRANSIT_STATUS s WITH (NOLOCK) ON t.TRANSIT_STATUS = s.ID_TYPE_TRANSIT_STATUS
LEFT JOIN dbo.AC_VTERMINAL d WITH (NOLOCK) ON t.TERMINAL = d.VTERMINAL_KEY;
`;

const behaviorDoorsView = `
IF OBJECT_ID('dbo.v_BehaviorDoors', 'V') IS NOT NULL
    DROP VIEW dbo.v_BehaviorDoors;

CREATE VIEW dbo.v_BehaviorDoors AS
SELECT
    bt.BEHAVIOR_ID,
    b.DESCRIPTION AS BehaviorDescription,
    v.VTERMINAL_KEY AS DoorKey,
    v.DESCRIPTION AS DoorDescription,
    v.SITE
FROM dbo.AC_BEHAVIOR_TERMINALS bt WITH (NOLOCK)
LEFT JOIN dbo.AC_BEHAVIOR b WITH (NOLOCK) ON bt.BEHAVIOR_ID = b.BEHAVIOR_ID
LEFT JOIN dbo.AC_VTERMINAL v WITH (NOLOCK) ON bt.TERMINAL_KEY = v.VTERMINAL_KEY
WHERE bt.BEHAVIOR_ID IS NOT NULL;
`;

const cardholderView = `
IF OBJECT_ID('dbo.v_CardholderDetails', 'V') IS NOT NULL
    DROP VIEW dbo.v_CardholderDetails;

CREATE VIEW dbo.v_CardholderDetails AS
WITH LastTransit AS (
    SELECT SBI_ID, MAX(TRANSIT_DATE) AS LastAccessTime
    FROM dbo.HA_TRANSIT WITH (NOLOCK)
    GROUP BY SBI_ID
),
LastDoorInfo AS (
    SELECT DISTINCT
        ht.SBI_ID,
        v.DESCRIPTION AS LastDoorUsed,
        ht.TRANSIT_DATE AS LastAccessTime,
        v.VTERMINAL_KEY AS LastDoorKey
    FROM dbo.HA_TRANSIT ht WITH (NOLOCK)
    INNER JOIN LastTransit lt ON ht.SBI_ID = lt.SBI_ID AND ht.TRANSIT_DATE = lt.LastAccessTime
    LEFT JOIN dbo.AC_VTERMINAL v WITH (NOLOCK) ON ht.TERMINAL = v.VTERMINAL_KEY
),
BehaviorInfo AS (
    SELECT 
        ssb.SbiID,
        STRING_AGG(CAST(b.DESCRIPTION AS NVARCHAR(MAX)), '|') AS BehaviorDescriptions,
        STRING_AGG(CAST(ssb.Behavior AS NVARCHAR(MAX)), ',') AS BehaviorIds
    FROM dbo.SbiSiteBehavior ssb WITH (NOLOCK)
    LEFT JOIN dbo.AC_BEHAVIOR b WITH (NOLOCK) ON ssb.Behavior = b.BEHAVIOR_ID
    GROUP BY ssb.SbiID
)
SELECT
    e.SbiID AS CardholderId,
    ISNULL(e.Name, '') + ' ' + ISNULL(e.Surname, '') AS CardholderName,
    e.Name AS FirstName,
    e.Surname AS LastName,
    '' AS Department,
    (
        SELECT 
            c2.CardNumber,
            c2.ExpiryDateTime,
            c2.StateID,
            CASE WHEN c2.StateID = 0 THEN 'Active' ELSE 'Inactive' END as StatusText,
            (SELECT MAX(t.TRANSIT_DATE) FROM dbo.HA_TRANSIT t WITH (NOLOCK) WHERE t.CARD_NUMBER = c2.CardNumber) as LastUsedDate,
            (SELECT TOP 1 v2.DESCRIPTION FROM dbo.HA_TRANSIT t2 WITH (NOLOCK) LEFT JOIN dbo.AC_VTERMINAL v2 WITH (NOLOCK) ON t2.TERMINAL = v2.VTERMINAL_KEY WHERE t2.CARD_NUMBER = c2.CardNumber ORDER BY t2.TRANSIT_DATE DESC) as LastDoorName
        FROM dbo.Card c2 WITH (NOLOCK)
        WHERE c2.SbiID = e.SbiID
        FOR JSON PATH
    ) AS CardsJSON,
    0 AS Site,
    e.Telephone,
    e.EMail,
    bi.BehaviorDescriptions,
    bi.BehaviorIds,
    ld.LastDoorUsed,
    ld.LastAccessTime,
    e.SbiID AS EmployeeID
FROM dbo.Employee e WITH (NOLOCK)
LEFT JOIN BehaviorInfo bi ON e.SbiID = bi.SbiID
LEFT JOIN LastDoorInfo ld ON e.SbiID = ld.SBI_ID
WHERE e.SbiID IS NOT NULL AND e.SbiID > 0;
`;

const views = [
    { name: 'v_TransitLog', sql: transitLogView },
    { name: 'v_BehaviorDoors', sql: behaviorDoorsView },
    { name: 'v_CardholderDetails', sql: cardholderView }
];

module.exports = views;
