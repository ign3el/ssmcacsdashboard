import React, { useState, useEffect } from 'react';
import { BarChart3, Calendar, Download, RefreshCw, TrendingUp, Shield, Users, Activity, Clock } from 'lucide-react';
import { format, subDays } from 'date-fns';
import {
    BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

function AnalyticsPage() {
    const [dateRange, setDateRange] = useState('7days');
    const [customStart, setCustomStart] = useState('');
    const [customEnd, setCustomEnd] = useState('');
    const [autoRefresh, setAutoRefresh] = useState(false);
    const [loading, setLoading] = useState(true);

    // Analytics Data States
    const [peakAccessData, setPeakAccessData] = useState([]);
    const [doorUtilData, setDoorUtilData] = useState([]);
    const [denialTrendsData, setDenialTrendsData] = useState([]);
    const [unauthorizedData, setUnauthorizedData] = useState([]);
    const [cardholderStats, setCardholderStats] = useState(null);
    const [departmentData, setDepartmentData] = useState([]);
    const [riskScoresData, setRiskScoresData] = useState([]);
    const [systemHealth, setSystemHealth] = useState(null);
    const [zoneOccupancy, setZoneOccupancy] = useState([]);
    const [behaviorCompliance, setBehaviorCompliance] = useState([]);
    const [afterHoursData, setAfterHoursData] = useState([]);
    const [weekendData, setWeekendData] = useState([]);
    const [responseMetrics, setResponseMetrics] = useState(null);

    // Fetch all analytics data
    const fetchAnalytics = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams();
            params.append('dateRange', dateRange);
            if (dateRange === 'custom' && customStart && customEnd) {
                params.append('startDate', customStart);
                params.append('endDate', customEnd);
            }

            const endpoints = [
                '/api/analytics/peak-access-times',
                '/api/analytics/door-utilization',
                '/api/analytics/access-denial-trends',
                '/api/analytics/unauthorized-attempts',
                '/api/analytics/active-inactive-cardholders',
                '/api/analytics/department-access',
                '/api/analytics/cardholder-risk-scores',
                '/api/analytics/system-health',
                '/api/analytics/zone-occupancy',
                '/api/analytics/behavior-compliance',
                '/api/analytics/after-hours-access',
                '/api/analytics/weekend-holiday-patterns',
                '/api/analytics/response-time-metrics'
            ];

            const results = await Promise.all(
                endpoints.map(endpoint =>
                    fetch(`${endpoint}?${params.toString()}`)
                        .then(res => res.ok ? res.json() : [])
                        .catch(() => [])
                )
            );

            setPeakAccessData(results[0] || []);
            setDoorUtilData(results[1] || []);
            setDenialTrendsData(results[2] || []);
            setUnauthorizedData(results[3] || []);
            setCardholderStats(results[4] || {});
            setDepartmentData(results[5] || []);
            setRiskScoresData(results[6] || []);
            setSystemHealth(results[7] || {});
            setZoneOccupancy(results[8] || []);
            setBehaviorCompliance(results[9] || []);
            setAfterHoursData(results[10] || []);
            setWeekendData(results[11] || []);
            setResponseMetrics(results[12] || {});
        } catch (error) {
            console.error('Error fetching analytics:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnalytics();
    }, [dateRange]);

    useEffect(() => {
        if (autoRefresh) {
            const interval = setInterval(fetchAnalytics, 30000); // Refresh every 30s
            return () => clearInterval(interval);
        }
    }, [autoRefresh, dateRange]);

    // Aggregate peak access by hour
    const aggregatedPeakData = peakAccessData.reduce((acc, item) => {
        const existing = acc.find(x => x.Hour === item.Hour);
        if (existing) {
            existing.AccessCount += item.AccessCount;
        } else {
            acc.push({ Hour: item.Hour, AccessCount: item.AccessCount });
        }
        return acc;
    }, []).sort((a, b) => a.Hour - b.Hour);

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1 flex items-center gap-3">
                        <BarChart3 size={32} className="text-blue-400" />
                        Analytics Dashboard
                    </h1>
                    <p className="text-slate-500">Comprehensive access control insights and security analytics</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setAutoRefresh(!autoRefresh)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${autoRefresh
                            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                            : 'bg-white/5 text-slate-400 hover:bg-white/10'
                            }`}
                    >
                        <RefreshCw size={16} className={autoRefresh ? 'animate-spin' : ''} />
                        Auto-Refresh
                    </button>
                    <button
                        onClick={fetchAnalytics}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2"
                    >
                        <RefreshCw size={16} />
                        Refresh Now
                    </button>
                </div>
            </div>

            {/* Date Range Filter */}
            <div className="glass-panel p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <Calendar size={20} className="text-blue-400" />
                        <span className="text-sm font-medium text-slate-400">Date Range:</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        {['24h', '7days', '30days', 'custom'].map(range => (
                            <button
                                key={range}
                                onClick={() => setDateRange(range)}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${dateRange === range
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {range === '24h' ? '24h' : range === '7days' ? '7d' : range === '30days' ? '30d' : 'Custom'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Custom Date Range Inputs */}
                {dateRange === 'custom' && (
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                            <label className="text-sm text-slate-400">From:</label>
                            <input
                                type="date"
                                value={customStart}
                                onChange={(e) => setCustomStart(e.target.value)}
                                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-sm text-slate-400">To:</label>
                            <input
                                type="date"
                                value={customEnd}
                                onChange={(e) => setCustomEnd(e.target.value)}
                                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <button
                            onClick={fetchAnalytics}
                            disabled={!customStart || !customEnd}
                            className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
                        >
                            Apply
                        </button>
                    </div>
                )}
            </div>

            {loading && (
                <div className="text-center py-12">
                    <RefreshCw size={48} className="animate-spin text-blue-400 mx-auto mb-4" />
                    <p className="text-slate-400">Loading analytics...</p>
                </div>
            )}

            {!loading && (
                <>
                    {/* System Health Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="glass-panel p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                                <Activity size={24} className="text-emerald-400" />
                                <span className="text-2xl font-bold text-white">{systemHealth?.ctus?.total || 0}</span>
                            </div>
                            <p className="text-sm text-slate-400">Total CTUs</p>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                                <Activity size={24} className="text-blue-400" />
                                <span className="text-2xl font-bold text-white">{systemHealth?.rtus?.total || 0}</span>
                            </div>
                            <p className="text-sm text-slate-400">Total RTUs</p>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                                <Activity size={24} className="text-purple-400" />
                                <span className="text-2xl font-bold text-white">{systemHealth?.terminals?.total || 0}</span>
                            </div>
                            <p className="text-sm text-slate-400">Terminals</p>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                                <TrendingUp size={24} className="text-amber-400" />
                                <span className="text-2xl font-bold text-white">{systemHealth?.activity?.last24Hours || 0}</span>
                            </div>
                            <p className="text-sm text-slate-400">Events (24h)</p>
                        </div>
                    </div>

                    {/* ACCESS PATTERNS & SECURITY ANALYTICS */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/5">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Shield size={24} className="text-blue-400" />
                            Access Patterns & Security
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Peak Access Times */}
                            <div>
                                <h3 className="text-sm font-semibold text-slate-300 mb-4">Peak Access Times (Hourly)</h3>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={aggregatedPeakData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                        <XAxis dataKey="Hour" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                        <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
                                        <Bar dataKey="AccessCount" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Access Denial Trends */}
                            <div>
                                <h3 className="text-sm font-semibold text-slate-300 mb-4">Access Denial Trends</h3>
                                <ResponsiveContainer width="100%" height={250}>
                                    <LineChart data={denialTrendsData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                        <XAxis dataKey="Date" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                                        <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
                                        <Legend />
                                        <Line type="monotone" dataKey="Granted" stroke="#10b981" strokeWidth={2} />
                                        <Line type="monotone" dataKey="Denied" stroke="#ef4444" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Door Utilization */}
                            <div>
                                <h3 className="text-sm font-semibold text-slate-300 mb-4">Top 10 Door Utilization</h3>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={doorUtilData.slice(0, 10)} layout="vertical">
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                        <XAxis type="number" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                        <YAxis type="category" dataKey="DoorName" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 10 }} width={120} />
                                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
                                        <Bar dataKey="TotalAccess" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Unauthorized Attempts */}
                            <div>
                                <h3 className="text-sm font-semibold text-slate-300 mb-4">Recent Unauthorized Attempts</h3>
                                <div className="space-y-2 max-h-[250px] overflow-y-auto custom-scrollbar">
                                    {unauthorizedData.slice(0, 8).map((item, idx) => (
                                        <div key={idx} className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-3">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="text-sm font-medium text-white">{item.CardholderName}</span>
                                                <span className="text-xs text-slate-400">{format(new Date(item.EventTime), 'MMM dd, HH:mm')}</span>
                                            </div>
                                            <p className="text-xs text-slate-400">{item.DoorName} • {item.EventType}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* EMPLOYEE & CARDHOLDER INSIGHTS */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/5">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Users size={24} className="text-emerald-400" />
                            Employee & Cardholder Insights
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Active vs Inactive */}
                            <div>
                                <h3 className="text-sm font-semibold text-slate-300 mb-4">Active vs Inactive Cardholders</h3>
                                <ResponsiveContainer width="100%" height={250}>
                                    <PieChart>
                                        <Pie
                                            data={[
                                                { name: 'Active', value: cardholderStats?.active || 0 },
                                                { name: 'Inactive', value: cardholderStats?.inactive || 0 }
                                            ]}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            <Cell fill="#10b981" />
                                            <Cell fill="#64748b" />
                                        </Pie>
                                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="text-center mt-2">
                                    <p className="text-sm text-slate-400">Total: {cardholderStats?.total || 0} cardholders</p>
                                </div>
                            </div>

                            {/* Department Access */}
                            <div>
                                <h3 className="text-sm font-semibold text-slate-300 mb-4">Department Access Patterns</h3>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={departmentData.slice(0, 8)}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                        <XAxis dataKey="Department" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 10 }} angle={-45} textAnchor="end" height={80} />
                                        <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
                                        <Bar dataKey="TotalAccess" fill="#f59e0b" radius={[8, 8, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Risk Scores */}
                            <div className="lg:col-span-2">
                                <h3 className="text-sm font-semibold text-slate-300 mb-4">Top Risk Scores (Behavioral Anomalies)</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left py-2 px-3 text-slate-400 font-medium">Cardholder</th>
                                                <th className="text-left py-2 px-3 text-slate-400 font-medium">Department</th>
                                                <th className="text-center py-2 px-3 text-slate-400 font-medium">Risk Score</th>
                                                <th className="text-center py-2 px-3 text-slate-400 font-medium">Failed</th>
                                                <th className="text-center py-2 px-3 text-slate-400 font-medium">After Hours</th>
                                                <th className="text-center py-2 px-3 text-slate-400 font-medium">Weekend</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {riskScoresData.slice(0, 10).map((item, idx) => (
                                                <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                                                    <td className="py-2 px-3 text-white">{item.CardholderName}</td>
                                                    <td className="py-2 px-3 text-slate-400">{item.Department || 'N/A'}</td>
                                                    <td className="py-2 px-3 text-center">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${item.RiskScore >= 50 ? 'bg-rose-500/20 text-rose-400' :
                                                            item.RiskScore >= 30 ? 'bg-amber-500/20 text-amber-400' :
                                                                'bg-emerald-500/20 text-emerald-400'
                                                            }`}>
                                                            {item.RiskScore.toFixed(1)}
                                                        </span>
                                                    </td>
                                                    <td className="py-2 px-3 text-center text-slate-400">{item.FailedAttempts}</td>
                                                    <td className="py-2 px-3 text-center text-slate-400">{item.AfterHoursAttempts}</td>
                                                    <td className="py-2 px-3 text-center text-slate-400">{item.WeekendAttempts}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OPERATIONAL METRICS */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/5">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Activity size={24} className="text-purple-400" />
                            Operational Metrics
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Zone Occupancy */}
                            <div>
                                <h3 className="text-sm font-semibold text-slate-300 mb-4">Current Zone Occupancy</h3>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={zoneOccupancy.slice(0, 10)}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                        <XAxis dataKey="ZoneName" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 10 }} angle={-45} textAnchor="end" height={80} />
                                        <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
                                        <Bar dataKey="CurrentOccupancy" fill="#ec4899" radius={[8, 8, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Behavior Compliance */}
                            <div>
                                <h3 className="text-sm font-semibold text-slate-300 mb-4">Behavior Compliance Rates</h3>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={behaviorCompliance.slice(0, 8)}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                        <XAxis dataKey="BehaviorName" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 10 }} angle={-45} textAnchor="end" height={80} />
                                        <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} domain={[0, 100]} />
                                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
                                        <Bar dataKey="ComplianceRate" fill="#10b981" radius={[8, 8, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* TIME-BASED ANALYTICS */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/5">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Clock size={24} className="text-amber-400" />
                            Time-Based Analytics
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* After Hours Access */}
                            <div>
                                <h3 className="text-sm font-semibold text-slate-300 mb-4">After-Hours Access (Before 6AM / After 8PM)</h3>
                                <div className="space-y-2 max-h-[250px] overflow-y-auto custom-scrollbar">
                                    {afterHoursData.slice(0, 10).map((item, idx) => (
                                        <div key={idx} className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="text-sm font-medium text-white">{item.CardholderName}</span>
                                                <span className="text-xs text-slate-400">{format(new Date(item.Date), 'MMM dd')} @ {item.Hour}:00</span>
                                            </div>
                                            <p className="text-xs text-slate-400">{item.DoorName}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Weekend/Holiday Patterns */}
                            <div>
                                <h3 className="text-sm font-semibold text-slate-300 mb-4">Weekend Access Patterns</h3>
                                <ResponsiveContainer width="100%" height={250}>
                                    <AreaChart data={weekendData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                        <XAxis dataKey="Date" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                                        <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
                                        <Area type="monotone" dataKey="AccessCount" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Response Time Metrics */}
                            <div className="lg:col-span-2">
                                <h3 className="text-sm font-semibold text-slate-300 mb-4">System Performance Metrics</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
                                        <p className="text-2xl font-bold text-white">{responseMetrics?.summary?.totalEvents || 0}</p>
                                        <p className="text-sm text-slate-400 mt-1">Total Events</p>
                                    </div>
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-center">
                                        <p className="text-2xl font-bold text-white">{responseMetrics?.summary?.avgEventsPerHour || 0}</p>
                                        <p className="text-sm text-slate-400 mt-1">Avg Events/Hour</p>
                                    </div>
                                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-center">
                                        <p className="text-2xl font-bold text-white">{responseMetrics?.summary?.maxEventsPerHour || 0}</p>
                                        <p className="text-sm text-slate-400 mt-1">Peak Events/Hour</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default AnalyticsPage;
