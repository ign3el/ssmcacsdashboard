const db = require('./db');

/**
 * Analytics Module
 * Provides data aggregation and analysis for the ACS Dashboard
 */

// ============================================================================
// ACCESS PATTERNS & SECURITY ANALYTICS
// ============================================================================

/**
 * Get peak access times - hourly/daily traffic patterns
 * @param {string} dateRange - '24h', '7days', '30days', or custom date range
 * @param {Date} startDate - Optional start date for custom range
 * @param {Date} endDate - Optional end date for custom range
 */
async function getPeakAccessTimes(dateRange = '7days', startDate = null, endDate = null) {
    try {
        let query = `
            SELECT 
                DATEPART(HOUR, TRANSIT_DATE) AS Hour,
                DATENAME(WEEKDAY, TRANSIT_DATE) AS DayOfWeek,
                COUNT(*) AS AccessCount,
                SUM(CASE WHEN TRANSIT_STATUS = 0 THEN 1 ELSE 0 END) AS GrantedCount,
                SUM(CASE WHEN TRANSIT_STATUS != 0 THEN 1 ELSE 0 END) AS DeniedCount
            FROM dbo.HA_TRANSIT WITH (NOLOCK)
            WHERE TRANSIT_DATE >= @startDate
                AND TRANSIT_DATE <= @endDate
            GROUP BY DATEPART(HOUR, TRANSIT_DATE), DATENAME(WEEKDAY, TRANSIT_DATE)
            ORDER BY Hour, DayOfWeek
        `;

        const params = getDateRangeParams(dateRange, startDate, endDate);
        const result = await db.executeQuery(query, params);
        return result;
    } catch (error) {
        console.error('Error in getPeakAccessTimes:', error);
        throw error;
    }
}

/**
 * Get door utilization statistics
 */
async function getDoorUtilization(dateRange = '30days', startDate = null, endDate = null) {
    try {
        let query = `
            SELECT TOP 20
                t.TERMINAL AS DoorKey,
                ISNULL(v.DESCRIPTION, t.TERMINAL) AS DoorName,
                COUNT(*) AS TotalAccess,
                SUM(CASE WHEN t.TRANSIT_STATUS = 0 THEN 1 ELSE 0 END) AS SuccessfulAccess,
                SUM(CASE WHEN t.TRANSIT_STATUS != 0 THEN 1 ELSE 0 END) AS FailedAccess,
                COUNT(DISTINCT t.SBI_ID) AS UniqueUsers,
                MIN(t.TRANSIT_DATE) AS FirstAccess,
                MAX(t.TRANSIT_DATE) AS LastAccess
            FROM dbo.HA_TRANSIT t WITH (NOLOCK)
            LEFT JOIN dbo.AC_VTERMINAL v WITH (NOLOCK) ON t.TERMINAL = v.VTERMINAL_KEY
            WHERE t.TRANSIT_DATE >= @startDate
                AND t.TRANSIT_DATE <= @endDate
            GROUP BY t.TERMINAL, v.DESCRIPTION
            ORDER BY TotalAccess DESC
        `;

        const params = getDateRangeParams(dateRange, startDate, endDate);
        const result = await db.executeQuery(query, params);
        return result;
    } catch (error) {
        console.error('Error in getDoorUtilization:', error);
        throw error;
    }
}

/**
 * Get access denial trends over time
 */
async function getAccessDenialTrends(dateRange = '30days', startDate = null, endDate = null) {
    try {
        let query = `
            SELECT 
                CAST(TRANSIT_DATE AS DATE) AS Date,
                COUNT(*) AS TotalAttempts,
                SUM(CASE WHEN TRANSIT_STATUS = 0 THEN 1 ELSE 0 END) AS Granted,
                SUM(CASE WHEN TRANSIT_STATUS != 0 THEN 1 ELSE 0 END) AS Denied,
                CAST(SUM(CASE WHEN TRANSIT_STATUS != 0 THEN 1 ELSE 0 END) * 100.0 / COUNT(*) AS DECIMAL(5,2)) AS DenialRate
            FROM dbo.HA_TRANSIT WITH (NOLOCK)
            WHERE TRANSIT_DATE >= @startDate
                AND TRANSIT_DATE <= @endDate
            GROUP BY CAST(TRANSIT_DATE AS DATE)
            ORDER BY Date
        `;

        const params = getDateRangeParams(dateRange, startDate, endDate);
        const result = await db.executeQuery(query, params);
        return result;
    } catch (error) {
        console.error('Error in getAccessDenialTrends:', error);
        throw error;
    }
}

/**
 * Get unauthorized access attempts (security incidents)
 */
async function getUnauthorizedAttempts(dateRange = '7days', startDate = null, endDate = null) {
    try {
        let query = `
            SELECT TOP 100
                t.TRANSIT_DATE AS EventTime,
                ISNULL(t.NAME, 'Unknown') + ' ' + ISNULL(t.SURNAME, '') AS CardholderName,
                t.CARD_NUMBER AS CardNumber,
                t.TERMINAL AS DoorKey,
                ISNULL(v.DESCRIPTION, t.TERMINAL) AS DoorName,
                ISNULL(s.NOTES, t.STR_TRANSIT_STATUS) AS EventType,
                t.TRANSIT_STATUS AS StatusCode,
                t.SBI_ID
            FROM dbo.HA_TRANSIT t WITH (NOLOCK)
            LEFT JOIN dbo.AC_VTERMINAL v WITH (NOLOCK) ON t.TERMINAL = v.VTERMINAL_KEY
            LEFT JOIN dbo.MG_TYPE_TRANSIT_STATUS s WITH (NOLOCK) ON t.TRANSIT_STATUS = s.ID_TYPE_TRANSIT_STATUS
            WHERE t.TRANSIT_STATUS != 0
                AND t.TRANSIT_DATE >= @startDate
                AND t.TRANSIT_DATE <= @endDate
            ORDER BY t.TRANSIT_DATE DESC
        `;

        const params = getDateRangeParams(dateRange, startDate, endDate);
        const result = await db.executeQuery(query, params);
        return result;
    } catch (error) {
        console.error('Error in getUnauthorizedAttempts:', error);
        throw error;
    }
}

// ============================================================================
// EMPLOYEE & CARDHOLDER INSIGHTS
// ============================================================================

/**
 * Get active vs inactive cardholders statistics
 */
async function getActiveVsInactiveCardholders(dateRange = '30days') {
    try {
        const params = getDateRangeParams(dateRange);

        // Get active cardholders (those with recent activity)
        const activeQuery = `
            SELECT COUNT(DISTINCT SBI_ID) AS ActiveCount
            FROM dbo.HA_TRANSIT WITH (NOLOCK)
            WHERE TRANSIT_DATE >= @startDate
                AND TRANSIT_DATE <= @endDate
                AND SBI_ID IS NOT NULL
                AND SBI_ID > 0
        `;

        // Get total cardholders
        const totalQuery = `
            SELECT COUNT(*) AS TotalCount
            FROM dbo.Employee WITH (NOLOCK)
            WHERE SbiID IS NOT NULL AND SbiID > 0
        `;

        const activeResult = await db.executeQuery(activeQuery, params);
        const totalResult = await db.executeQuery(totalQuery);

        const activeCount = activeResult[0]?.ActiveCount || 0;
        const totalCount = totalResult[0]?.TotalCount || 0;
        const inactiveCount = totalCount - activeCount;

        return {
            active: activeCount,
            inactive: inactiveCount,
            total: totalCount,
            activePercentage: totalCount > 0 ? ((activeCount / totalCount) * 100).toFixed(2) : 0
        };
    } catch (error) {
        console.error('Error in getActiveVsInactiveCardholders:', error);
        throw error;
    }
}

/**
 * Get department access patterns
 */
async function getDepartmentAccessPatterns(dateRange = '30days', startDate = null, endDate = null) {
    try {
        let query = `
            SELECT 
                ISNULL(e.Building, 'Unknown') AS Department,
                COUNT(*) AS TotalAccess,
                COUNT(DISTINCT t.SBI_ID) AS UniqueEmployees,
                SUM(CASE WHEN t.TRANSIT_STATUS = 0 THEN 1 ELSE 0 END) AS SuccessfulAccess,
                SUM(CASE WHEN t.TRANSIT_STATUS != 0 THEN 1 ELSE 0 END) AS FailedAccess
            FROM dbo.HA_TRANSIT t WITH (NOLOCK)
            LEFT JOIN dbo.Employee e WITH (NOLOCK) ON t.SBI_ID = e.SbiID
            WHERE t.TRANSIT_DATE >= @startDate
                AND t.TRANSIT_DATE <= @endDate
                AND t.SBI_ID IS NOT NULL
            GROUP BY e.Building
            ORDER BY TotalAccess DESC
        `;

        const params = getDateRangeParams(dateRange, startDate, endDate);
        const result = await db.executeQuery(query, params);
        return result;
    } catch (error) {
        console.error('Error in getDepartmentAccessPatterns:', error);
        throw error;
    }
}

/**
 * Get cardholder risk scores (behavioral anomaly detection)
 */
async function getCardholderRiskScores(dateRange = '30days', startDate = null, endDate = null) {
    try {
        let query = `
            WITH CardholderStats AS (
                SELECT 
                    t.SBI_ID,
                    ISNULL(e.Name, '') + ' ' + ISNULL(e.Surname, '') AS CardholderName,
                    e.Building AS Department,
                    COUNT(*) AS TotalAttempts,
                    SUM(CASE WHEN t.TRANSIT_STATUS != 0 THEN 1 ELSE 0 END) AS FailedAttempts,
                    COUNT(DISTINCT t.TERMINAL) AS UniqueDoors,
                    COUNT(DISTINCT CAST(t.TRANSIT_DATE AS DATE)) AS ActiveDays,
                    -- After hours attempts (before 6 AM or after 8 PM)
                    SUM(CASE WHEN DATEPART(HOUR, t.TRANSIT_DATE) < 6 OR DATEPART(HOUR, t.TRANSIT_DATE) >= 20 THEN 1 ELSE 0 END) AS AfterHoursAttempts,
                    -- Weekend attempts
                    SUM(CASE WHEN DATEPART(WEEKDAY, t.TRANSIT_DATE) IN (1, 7) THEN 1 ELSE 0 END) AS WeekendAttempts
                FROM dbo.HA_TRANSIT t WITH (NOLOCK)
                LEFT JOIN dbo.Employee e WITH (NOLOCK) ON t.SBI_ID = e.SbiID
                WHERE t.TRANSIT_DATE >= @startDate
                    AND t.TRANSIT_DATE <= @endDate
                    AND t.SBI_ID IS NOT NULL
                    AND t.SBI_ID > 0
                GROUP BY t.SBI_ID, e.Name, e.Surname, e.Building
            )
            SELECT TOP 50
                SBI_ID,
                CardholderName,
                Department,
                TotalAttempts,
                FailedAttempts,
                UniqueDoors,
                ActiveDays,
                AfterHoursAttempts,
                WeekendAttempts,
                -- Calculate risk score (0-100)
                CAST(
                    (CASE WHEN TotalAttempts > 0 THEN (FailedAttempts * 100.0 / TotalAttempts) ELSE 0 END * 0.4) +
                    (CASE WHEN TotalAttempts > 0 THEN (AfterHoursAttempts * 100.0 / TotalAttempts) ELSE 0 END * 0.3) +
                    (CASE WHEN TotalAttempts > 0 THEN (WeekendAttempts * 100.0 / TotalAttempts) ELSE 0 END * 0.2) +
                    (CASE WHEN UniqueDoors > 10 THEN 10 ELSE 0 END) -- Bonus risk for accessing many doors
                AS DECIMAL(5,2)) AS RiskScore
            FROM CardholderStats
            WHERE TotalAttempts > 5 -- Only include users with meaningful activity
            ORDER BY RiskScore DESC
        `;

        const params = getDateRangeParams(dateRange, startDate, endDate);
        const result = await db.executeQuery(query, params);
        return result;
    } catch (error) {
        console.error('Error in getCardholderRiskScores:', error);
        throw error;
    }
}

// ============================================================================
// OPERATIONAL METRICS
// ============================================================================

/**
 * Get system health metrics (CTU/RTU status)
 */
async function getSystemHealthMetrics() {
    try {
        // Get CTU count and basic info
        const ctuQuery = `
            SELECT 
                COUNT(*) AS TotalCTUs,
                COUNT(CASE WHEN CTU_TYPE IS NOT NULL THEN 1 END) AS ConfiguredCTUs
            FROM dbo.AC_CTU_CFG WITH (NOLOCK)
        `;

        // Get RTU count
        const rtuQuery = `
            SELECT COUNT(*) AS TotalRTUs
            FROM dbo.AC_RTU_CFG WITH (NOLOCK)
        `;

        // Get terminal count
        const terminalQuery = `
            SELECT COUNT(*) AS TotalTerminals
            FROM dbo.AC_VTERMINAL WITH (NOLOCK)
        `;

        // Get recent activity (last 24 hours)
        const activityQuery = `
            SELECT COUNT(*) AS RecentEvents
            FROM dbo.HA_TRANSIT WITH (NOLOCK)
            WHERE TRANSIT_DATE >= DATEADD(HOUR, -24, GETDATE())
        `;

        const [ctuResult, rtuResult, terminalResult, activityResult] = await Promise.all([
            db.executeQuery(ctuQuery),
            db.executeQuery(rtuQuery),
            db.executeQuery(terminalQuery),
            db.executeQuery(activityQuery)
        ]);

        return {
            ctus: {
                total: ctuResult[0]?.TotalCTUs || 0,
                configured: ctuResult[0]?.ConfiguredCTUs || 0
            },
            rtus: {
                total: rtuResult[0]?.TotalRTUs || 0
            },
            terminals: {
                total: terminalResult[0]?.TotalTerminals || 0
            },
            activity: {
                last24Hours: activityResult[0]?.RecentEvents || 0
            }
        };
    } catch (error) {
        console.error('Error in getSystemHealthMetrics:', error);
        throw error;
    }
}

/**
 * Get zone occupancy tracking
 */
async function getZoneOccupancy() {
    try {
        // Get current zone presence based on last transit
        let query = `
            WITH LastTransit AS (
                SELECT 
                    SBI_ID,
                    TERMINAL,
                    TRANSIT_DATE,
                    TRANSIT_STATUS,
                    ROW_NUMBER() OVER (PARTITION BY SBI_ID ORDER BY TRANSIT_DATE DESC) AS rn
                FROM dbo.HA_TRANSIT WITH (NOLOCK)
                WHERE TRANSIT_DATE >= DATEADD(HOUR, -24, GETDATE())
                    AND SBI_ID IS NOT NULL
            )
            SELECT 
                ISNULL(v.ARRIVAL_ZONE, 'Unknown') AS ZoneName,
                COUNT(DISTINCT lt.SBI_ID) AS CurrentOccupancy
            FROM LastTransit lt
            LEFT JOIN dbo.AC_VTERMINAL v WITH (NOLOCK) ON lt.TERMINAL = v.VTERMINAL_KEY
            WHERE lt.rn = 1
                AND lt.TRANSIT_STATUS = 0 -- Only successful entries
                AND v.ARRIVAL_ZONE IS NOT NULL
            GROUP BY v.ARRIVAL_ZONE
            ORDER BY CurrentOccupancy DESC
        `;

        const result = await db.executeQuery(query);
        return result;
    } catch (error) {
        console.error('Error in getZoneOccupancy:', error);
        throw error;
    }
}

/**
 * Get behavior compliance metrics
 */
async function getBehaviorCompliance(dateRange = '30days', startDate = null, endDate = null) {
    try {
        let query = `
            SELECT 
                b.BEHAVIOR_ID,
                b.DESCRIPTION AS BehaviorName,
                COUNT(DISTINCT ssb.SbiID) AS AssignedCardholders,
                COUNT(DISTINCT t.SBI_ID) AS ActiveCardholders,
                CAST(
                    CASE 
                        WHEN COUNT(DISTINCT ssb.SbiID) > 0 
                        THEN (COUNT(DISTINCT t.SBI_ID) * 100.0 / COUNT(DISTINCT ssb.SbiID))
                        ELSE 0 
                    END AS DECIMAL(5,2)
                ) AS ComplianceRate
            FROM dbo.AC_BEHAVIOR b WITH (NOLOCK)
            LEFT JOIN dbo.SbiSiteBehavior ssb WITH (NOLOCK) ON b.BEHAVIOR_ID = ssb.Behavior
            LEFT JOIN dbo.HA_TRANSIT t WITH (NOLOCK) 
                ON ssb.SbiID = t.SBI_ID 
                AND t.TRANSIT_DATE >= @startDate
                AND t.TRANSIT_DATE <= @endDate
                AND t.TRANSIT_STATUS = 0
            GROUP BY b.BEHAVIOR_ID, b.DESCRIPTION
            HAVING COUNT(DISTINCT ssb.SbiID) > 0
            ORDER BY ComplianceRate DESC
        `;

        const params = getDateRangeParams(dateRange, startDate, endDate);
        const result = await db.executeQuery(query, params);
        return result;
    } catch (error) {
        console.error('Error in getBehaviorCompliance:', error);
        throw error;
    }
}

// ============================================================================
// TIME-BASED ANALYTICS
// ============================================================================

/**
 * Get after-hours access monitoring
 */
async function getAfterHoursAccess(dateRange = '30days', startDate = null, endDate = null) {
    try {
        // Define business hours: 6 AM to 8 PM
        let query = `
            SELECT 
                CAST(t.TRANSIT_DATE AS DATE) AS Date,
                DATEPART(HOUR, t.TRANSIT_DATE) AS Hour,
                COUNT(*) AS AccessCount,
                COUNT(DISTINCT t.SBI_ID) AS UniqueUsers,
                ISNULL(e.Name, '') + ' ' + ISNULL(e.Surname, '') AS CardholderName,
                t.TERMINAL AS DoorKey,
                ISNULL(v.DESCRIPTION, t.TERMINAL) AS DoorName
            FROM dbo.HA_TRANSIT t WITH (NOLOCK)
            LEFT JOIN dbo.Employee e WITH (NOLOCK) ON t.SBI_ID = e.SbiID
            LEFT JOIN dbo.AC_VTERMINAL v WITH (NOLOCK) ON t.TERMINAL = v.VTERMINAL_KEY
            WHERE (DATEPART(HOUR, t.TRANSIT_DATE) < 6 OR DATEPART(HOUR, t.TRANSIT_DATE) >= 20)
                AND t.TRANSIT_DATE >= @startDate
                AND t.TRANSIT_DATE <= @endDate
                AND t.TRANSIT_STATUS = 0
            GROUP BY CAST(t.TRANSIT_DATE AS DATE), DATEPART(HOUR, t.TRANSIT_DATE), 
                     e.Name, e.Surname, t.TERMINAL, v.DESCRIPTION
            ORDER BY Date DESC, Hour
        `;

        const params = getDateRangeParams(dateRange, startDate, endDate);
        const result = await db.executeQuery(query, params);
        return result;
    } catch (error) {
        console.error('Error in getAfterHoursAccess:', error);
        throw error;
    }
}

/**
 * Get weekend and holiday access patterns
 */
async function getWeekendHolidayPatterns(dateRange = '30days', startDate = null, endDate = null) {
    try {
        let query = `
            SELECT 
                CAST(t.TRANSIT_DATE AS DATE) AS Date,
                DATENAME(WEEKDAY, t.TRANSIT_DATE) AS DayOfWeek,
                DATEPART(WEEKDAY, t.TRANSIT_DATE) AS DayNumber,
                COUNT(*) AS AccessCount,
                COUNT(DISTINCT t.SBI_ID) AS UniqueUsers,
                SUM(CASE WHEN t.TRANSIT_STATUS = 0 THEN 1 ELSE 0 END) AS SuccessfulAccess,
                SUM(CASE WHEN t.TRANSIT_STATUS != 0 THEN 1 ELSE 0 END) AS FailedAccess
            FROM dbo.HA_TRANSIT t WITH (NOLOCK)
            WHERE DATEPART(WEEKDAY, t.TRANSIT_DATE) IN (1, 7) -- Sunday = 1, Saturday = 7
                AND t.TRANSIT_DATE >= @startDate
                AND t.TRANSIT_DATE <= @endDate
            GROUP BY CAST(t.TRANSIT_DATE AS DATE), DATENAME(WEEKDAY, t.TRANSIT_DATE), DATEPART(WEEKDAY, t.TRANSIT_DATE)
            ORDER BY Date DESC
        `;

        const params = getDateRangeParams(dateRange, startDate, endDate);
        const result = await db.executeQuery(query, params);
        return result;
    } catch (error) {
        console.error('Error in getWeekendHolidayPatterns:', error);
        throw error;
    }
}

/**
 * Get response time metrics (event processing performance)
 */
async function getResponseTimeMetrics(dateRange = '7days', startDate = null, endDate = null) {
    try {
        // Calculate average events per hour as a proxy for system load
        let query = `
            SELECT 
                CAST(TRANSIT_DATE AS DATE) AS Date,
                DATEPART(HOUR, TRANSIT_DATE) AS Hour,
                COUNT(*) AS EventCount,
                COUNT(*) * 1.0 / 3600 AS EventsPerSecond,
                MIN(TRANSIT_DATE) AS FirstEvent,
                MAX(TRANSIT_DATE) AS LastEvent
            FROM dbo.HA_TRANSIT WITH (NOLOCK)
            WHERE TRANSIT_DATE >= @startDate
                AND TRANSIT_DATE <= @endDate
            GROUP BY CAST(TRANSIT_DATE AS DATE), DATEPART(HOUR, TRANSIT_DATE)
            ORDER BY Date DESC, Hour DESC
        `;

        const params = getDateRangeParams(dateRange, startDate, endDate);
        const result = await db.executeQuery(query, params);

        // Calculate summary statistics
        const totalEvents = result.reduce((sum, row) => sum + row.EventCount, 0);
        const avgEventsPerHour = result.length > 0 ? totalEvents / result.length : 0;
        const maxEventsPerHour = result.length > 0 ? Math.max(...result.map(r => r.EventCount)) : 0;

        return {
            hourlyData: result,
            summary: {
                totalEvents,
                avgEventsPerHour: avgEventsPerHour.toFixed(2),
                maxEventsPerHour,
                dataPoints: result.length
            }
        };
    } catch (error) {
        console.error('Error in getResponseTimeMetrics:', error);
        throw error;
    }
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get date range parameters based on preset or custom dates
 */
function getDateRangeParams(dateRange, customStart = null, customEnd = null) {
    const now = new Date();
    let startDate, endDate;

    if (dateRange === 'custom' && customStart && customEnd) {
        startDate = new Date(customStart);
        endDate = new Date(customEnd);
    } else {
        endDate = now;
        switch (dateRange) {
            case '24h':
                startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
                break;
            case '7days':
                startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                break;
            case '30days':
                startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                break;
            default:
                startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        }
    }

    return {
        startDate,
        endDate
    };
}

// ============================================================================
// EXPORTS
// ============================================================================

module.exports = {
    // Access Patterns & Security
    getPeakAccessTimes,
    getDoorUtilization,
    getAccessDenialTrends,
    getUnauthorizedAttempts,

    // Employee & Cardholder Insights
    getActiveVsInactiveCardholders,
    getDepartmentAccessPatterns,
    getCardholderRiskScores,

    // Operational Metrics
    getSystemHealthMetrics,
    getZoneOccupancy,
    getBehaviorCompliance,

    // Time-Based Analytics
    getAfterHoursAccess,
    getWeekendHolidayPatterns,
    getResponseTimeMetrics
};
