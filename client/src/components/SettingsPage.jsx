import React, { useState, useEffect } from 'react';
import { Save, Server, Database, User, Key, CheckCircle, AlertCircle, RefreshCw, Eye, EyeOff, Users, Plus, Trash2, Shield } from 'lucide-react';

const manualSql = `
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

export default function SettingsPage() {
    const [config, setConfig] = useState({
        server: '',
        port: 1433,
        database: '',
        user: '',
        password: '',
        encrypt: false,
        trustServerCertificate: true,
        windowsAuth: false
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [testing, setTesting] = useState(false);
    const [testMessage, setTestMessage] = useState({ type: '', text: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [deploying, setDeploying] = useState(false);
    const [deployLogs, setDeployLogs] = useState([]);
    const [showSqlModal, setShowSqlModal] = useState(false);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/config');
            if (res.ok) {
                const data = await res.json();
                setConfig({
                    server: data.server || '',
                    port: data.port || 1433,
                    database: data.database || '',
                    user: data.user || '',
                    password: data.password || '',
                    encrypt: data.options?.encrypt || false,
                    trustServerCertificate: data.options?.trustServerCertificate !== false,
                    windowsAuth: data.driver === 'msnodesqlv8' || !!data.options?.trustedConnection
                });
            }
        } catch (error) {
            console.error('Failed to fetch settings:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setConfig(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleTest = async () => {
        setTesting(true);
        setTestMessage({ type: '', text: '' });
        try {
            const res = await fetch('http://localhost:5000/api/config/test', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
            });
            const data = await res.json();
            if (res.ok) {
                setTestMessage({ type: 'success', text: 'Connection Successful!' });
            } else {
                setTestMessage({ type: 'error', text: data.error || 'Connection Failed' });
            }
        } catch (error) {
            setTestMessage({ type: 'error', text: 'Network Error' });
        } finally {
            setTesting(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const res = await fetch('http://localhost:5000/api/config', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
            });
            if (res.ok) {
                alert('Configuration saved! The server will restart with new settings.');
            } else {
                alert('Failed to save configuration.');
            }
        } catch (error) {
            console.error('Error saving:', error);
            alert('Error saving configuration.');
        } finally {
            setSaving(false);
        }
    };

    const handleDeploy = async () => {
        setDeploying(true);
        setDeployLogs([]);
        try {
            const res = await fetch('http://localhost:5000/api/deploy-schema', {
                method: 'POST'
            });

            // Read stream
            const reader = res.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                const text = decoder.decode(value);
                const lines = text.split('\n').filter(line => line.trim());

                setDeployLogs(prev => [...prev, ...lines]);
            }

        } catch (error) {
            setDeployLogs(prev => [...prev, `[ERROR] Connection failed: ${error.message}`]);
        } finally {
            setDeploying(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <RefreshCw className="animate-spin text-blue-500" size={32} />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">System Configuration</h1>
                    <p className="text-slate-400">Manage database connection and deployment settings</p>
                </div>
                <Shield className="text-blue-500 w-12 h-12 opacity-20" />
            </div>

            <div className="glass-panel rounded-2xl border border-white/5 p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <Server className="text-blue-400" />
                    <h2 className="text-xl font-semibold text-white">Database Connection</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {testMessage.text && (
                        <div className={`p-4 rounded-xl border flex items-center gap-3 ${testMessage.type === 'success'
                                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                            }`}>
                            {testMessage.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                            {testMessage.text}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Server Address / IP</label>
                            <div className="relative">
                                <Server className="absolute left-3 top-2.5 text-slate-500" size={16} />
                                <input
                                    type="text"
                                    name="server"
                                    value={config.server}
                                    onChange={handleChange}
                                    className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                                    placeholder="localhost or 192.168.x.x"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Port</label>
                            <div className="relative">
                                <div className="absolute left-3 top-2.5 text-slate-500 font-mono text-xs">#</div>
                                <input
                                    type="number"
                                    name="port"
                                    value={config.port}
                                    onChange={handleChange}
                                    className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                                    placeholder="1433"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Database Name</label>
                            <div className="relative">
                                <Database className="absolute left-3 top-2.5 text-slate-500" size={16} />
                                <input
                                    type="text"
                                    name="database"
                                    value={config.database}
                                    onChange={handleChange}
                                    className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                                    placeholder="cms"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Username</label>
                            <div className="relative">
                                <User className={`absolute left-3 top-2.5 ${config.windowsAuth ? 'text-slate-700' : 'text-slate-500'}`} size={16} />
                                <input
                                    type="text"
                                    name="user"
                                    value={config.user}
                                    onChange={handleChange}
                                    disabled={config.windowsAuth}
                                    className={`w-full bg-[#0f172a]/50 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 ${config.windowsAuth ? 'opacity-30 cursor-not-allowed' : ''}`}
                                    placeholder="acs_reader"
                                    required={!config.windowsAuth}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Password</label>
                            <div className="relative">
                                <Key className={`absolute left-3 top-2.5 ${config.windowsAuth ? 'text-slate-700' : 'text-slate-500'}`} size={16} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={config.password || ''}
                                    onChange={handleChange}
                                    disabled={config.windowsAuth}
                                    className={`w-full bg-[#0f172a]/50 border border-white/10 rounded-xl pl-10 pr-10 py-2 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 ${config.windowsAuth ? 'opacity-30 cursor-not-allowed' : ''}`}
                                    placeholder="Enter database password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    disabled={config.windowsAuth}
                                    className={`absolute right-3 top-2.5 transition-colors ${config.windowsAuth ? 'text-slate-700 cursor-not-allowed' : 'text-slate-500 hover:text-white'}`}
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 pt-2 flex-wrap">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${config.windowsAuth ? 'bg-blue-600 border-blue-600' : 'border-slate-600 group-hover:border-slate-500'}`}>
                                {config.windowsAuth && <CheckCircle size={14} className="text-white" />}
                            </div>
                            <input type="checkbox" name="windowsAuth" checked={!!config.windowsAuth} onChange={handleChange} className="hidden" />
                            <span className="text-slate-400 group-hover:text-slate-300 font-medium text-blue-300">Use Windows Authentication</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${config.encrypt ? 'bg-blue-600 border-blue-600' : 'border-slate-600 group-hover:border-slate-500'}`}>
                                {config.encrypt && <CheckCircle size={14} className="text-white" />}
                            </div>
                            <input type="checkbox" name="encrypt" checked={config.encrypt} onChange={handleChange} className="hidden" />
                            <span className="text-slate-400 group-hover:text-slate-300">Use Encryption</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${config.trustServerCertificate ? 'bg-blue-600 border-blue-600' : 'border-slate-600 group-hover:border-slate-500'}`}>
                                {config.trustServerCertificate && <CheckCircle size={14} className="text-white" />}
                            </div>
                            <input type="checkbox" name="trustServerCertificate" checked={config.trustServerCertificate} onChange={handleChange} className="hidden" />
                            <span className="text-slate-400 group-hover:text-slate-300">Trust Server Certificate</span>
                        </label>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-end gap-4">
                        <button
                            type="button"
                            onClick={fetchSettings}
                            className="px-6 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors font-medium"
                        >
                            Reset
                        </button>

                        <button
                            type="button"
                            onClick={handleTest}
                            disabled={testing || saving}
                            className="px-6 py-2.5 rounded-xl border border-blue-500/20 text-blue-400 hover:bg-blue-500/10 transition-colors font-medium flex items-center gap-2 disabled:opacity-50"
                        >
                            {testing ? <RefreshCw className="animate-spin" size={18} /> : <RefreshCw size={18} />}
                            {testing ? 'Testing...' : 'Test Connection'}
                        </button>
                        <button
                            type="submit"
                            disabled={saving || testing}
                            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {saving ? <RefreshCw className="animate-spin" size={18} /> : <Save size={18} />}
                            {saving ? 'Saving...' : 'Save Configuration'}
                        </button>
                    </div>
                </form>
            </div>

            {/* DEPLOYMENT SECTION */}
            <div className="glass-panel rounded-2xl border border-white/5 p-8 mt-6">
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3 text-white">
                        <Database className="text-purple-400" />
                        <h2 className="text-xl font-semibold">Database Initialization</h2>
                    </div>
                    <button
                        onClick={() => setShowSqlModal(true)}
                        className="text-xs text-blue-400 hover:text-white underline"
                    >
                        View Manual SQL Code
                    </button>
                </div>

                <p className="text-slate-400 mb-4 text-sm">
                    This action creates the required <strong>Views</strong> in the database.
                </p>

                <div className="space-y-4">
                    <div className="bg-black/40 rounded-xl border border-white/10 p-4 h-32 overflow-y-auto font-mono text-xs">
                        {deployLogs.length === 0 ? (
                            <span className="text-slate-600 italic">Deployment logs will appear here...</span>
                        ) : (
                            deployLogs.map((log, i) => (
                                <div key={i} className={`${log.includes('[ERROR]') ? 'text-rose-400' : log.includes('[SUCCESS]') ? 'text-emerald-400' : 'text-slate-300'}`}>
                                    {log}
                                </div>
                            ))
                        )}
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={handleDeploy}
                            disabled={deploying}
                            className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold shadow-lg shadow-purple-600/20 transition-all flex items-center gap-2 disabled:opacity-50"
                        >
                            {deploying ? <RefreshCw className="animate-spin" size={18} /> : <Database size={18} />}
                            {deploying ? 'Deploying...' : 'Deploy Database Views'}
                        </button>
                    </div>
                </div>
            </div>

            {/* MANUAL SQL MODAL */}
            {showSqlModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowSqlModal(false)}>
                    <div className="bg-[#0f172a] border border-white/10 rounded-2xl max-w-2xl w-full p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
                        <h3 className="text-xl font-bold text-white mb-2">Manual SQL Deployment</h3>
                        <p className="text-slate-400 text-sm mb-4">Copy the script below and run it in SQL Server Management Studio (SSMS).</p>

                        <textarea
                            readOnly
                            className="w-full h-64 bg-black/50 border border-white/10 rounded-xl p-4 text-xs font-mono text-emerald-400 focus:outline-none"
                            value={manualSql}
                        />

                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                onClick={() => setShowSqlModal(false)}
                                className="px-4 py-2 text-slate-400 hover:text-white"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(manualSql);
                                    alert('Copied to clipboard!');
                                }}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium"
                            >
                                Copy to Clipboard
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
