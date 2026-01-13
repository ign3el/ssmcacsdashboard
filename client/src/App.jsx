import React, { useState, useEffect, useRef } from 'react';
import { LayoutDashboard, FileText, Settings, Search, Bell, Menu, X, Calendar, Filter, ChevronLeft, ChevronRight, User, LogOut } from 'lucide-react';
import { format, subDays, isAfter, isBefore } from 'date-fns';
import Sidebar from './components/Sidebar';
import StatsCards from './components/StatsCards';
import TransitTable from './components/TransitTable';
import ReportGenerator from './components/ReportGenerator';
import CardholderPage from './components/CardholderPage';
import SettingsPage from './components/SettingsPage';

import LoginPage from './components/LoginPage';

// Custom Hook for Polling
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [currentView, setCurrentView] = useState('dashboard');
  const [data, setData] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [connectionError, setConnectionError] = useState(false);

  // Date Range State
  const [dateRange, setDateRange] = useState('24h');
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');

  // Check for persisted session
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setCurrentUser(user.username);
        setIsLoggedIn(true);
      } catch (e) {
        console.error('Failed to parse stored session');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    setCurrentUser('');
  };

  // --- SERVER-SIDE FETCHING & FILTERING ---
  const fetchData = async () => {
    try {
      const params = new URLSearchParams();

      // 1. Limit (Optimize Load) - User Requested "Top 1000"
      params.append('limit', '1000');

      // 2. Search Term
      if (searchTerm) params.append('search', searchTerm);

      // 3. Date Range Logic (Convert to ISO)
      const now = new Date();
      if (dateRange === '24h') params.append('start', subDays(now, 1).toISOString());
      else if (dateRange === '7days') params.append('start', subDays(now, 7).toISOString());
      else if (dateRange === '30days') params.append('start', subDays(now, 30).toISOString());
      else if (dateRange === 'custom' && customStart && customEnd) {
        const startDate = new Date(customStart);
        const endDate = new Date(customEnd);

        // Only send if both are set and valid dates
        if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
          params.append('start', startDate.toISOString());
          params.append('end', endDate.toISOString());
        } else {
          console.warn('Invalid custom date range provided:', customStart, customEnd);
          // Optionally, you could prevent the fetch or set a default range here
        }
      }

      const response = await fetch(`/api/transit?${params.toString()}`);
      const result = await response.json();
      // Ensure result is always an array
      setData(Array.isArray(result) ? result : []);

      // Fetch Employees for Stats
      const empResponse = await fetch('/api/employees');
      const empResult = await empResponse.json();
      setEmployeeData(Array.isArray(empResult) ? empResult : []);
      setEmployeeData(Array.isArray(empResult) ? empResult : []);
      setConnectionError(false); // Clear error on success
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
      setEmployeeData([]);
      // Only set error if it's a real fetch failure (likely DB down)
      setConnectionError(true);
    }
  };

  // Initial Load & Filter Changes -> Trigger Fetch
  useEffect(() => {
    fetchData();
  }, [searchTerm, dateRange]); // Re-fetch when search or range type changes (Custom requires manual Apply)

  // Polling (Keep "Live") - Re-fetches with active filters every 2s
  useInterval(() => {
    if (dateRange !== 'custom') {
      fetchData();
    }
  }, 2000);

  // Apply additional client-side filtering for Event and Status
  const filteredData = data.filter(item => {
    if (!searchTerm) return true;

    const search = searchTerm.toLowerCase();
    const eventType = (item.EventType || '').toLowerCase();
    const status = item.AccessGranted ? 'granted' : 'denied';
    const cardholderName = (item.CardholderName || '').toLowerCase();
    const doorName = (item.DoorName || '').toLowerCase();
    const location = (item.Location || '').toLowerCase();

    return eventType.includes(search) ||
      status.includes(search) ||
      cardholderName.includes(search) ||
      doorName.includes(search) ||
      location.includes(search);
  });

  const handleNavigate = (viewId) => {
    setCurrentView(viewId);
  };

  const handleLogin = (username) => {
    setCurrentUser(username);
    setIsLoggedIn(true);
    fetchData(); // Fetch data immediately on login
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-[#020b1c] text-slate-300 font-sans overflow-hidden selection:bg-blue-500/30">

      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-indigo-600/5 rounded-full blur-[100px]"></div>
      </div>

      <Sidebar currentView={currentView} onNavigate={handleNavigate} user={currentUser} onLogout={handleLogout} />

      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        {/* HEADER */}
        <header className="h-20 px-8 flex items-center justify-between border-b border-white/5 bg-[#020b1c]/80 backdrop-blur-xl">
          <div className="flex items-center gap-6">
            <img src="/logo-header.png" alt="SSMC" className="h-12 object-contain" />
            <div className="h-8 w-[1px] bg-white/10"></div>
            <h2 className="text-xl font-bold text-white tracking-wide">
              {currentView === 'dashboard' ? 'Security Dashboard' :
                currentView === 'reports' ? 'Report Generator' :
                  currentView === 'cardholders' ? 'Cardholder Management' :
                    'System Settings'}
            </h2>
          </div>

          <div className="flex items-center gap-6">

            <div className="h-8 w-[1px] bg-white/10"></div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#020b1c]"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/10">
                  {currentUser ? currentUser.substring(0, 2).toUpperCase() : 'DB'}
                </div>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-white">{currentUser}</p>
                  <p className="text-xs text-slate-500">Database User</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative">

          {/* GLOBAL ERROR BANNER */}
          {connectionError && currentView !== 'settings' && (
            <div className="max-w-7xl mx-auto mb-8 animate-fade-in">
              <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-rose-500/20 rounded-full text-rose-400">
                    <LogOut size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Database Connection Failed</h3>
                    <p className="text-rose-200 text-sm">Unable to connect to the SQL Server. Please check your configuration.</p>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentView('settings')}
                  className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-bold rounded-xl transition-colors shadow-lg shadow-rose-500/20"
                >
                  Go to Settings
                </button>
              </div>
            </div>
          )}

          {currentView === 'dashboard' && (
            <div className="max-w-7xl mx-auto space-y-8 animate-slide-up">

              {/* GLOBAL DATE FILTER */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-1">Dashboard</h1>
                  <p className="text-slate-500">Real-time access logs and system metrics.</p>
                </div>
                <div className="glass-panel p-1 rounded-xl border border-white/10 flex items-center gap-1">
                  <button
                    onClick={() => setDateRange('24h')}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${dateRange === '24h' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                  >
                    24h
                  </button>
                  <button
                    onClick={() => setDateRange('7days')}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${dateRange === '7days' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                  >
                    7d
                  </button>
                  <button
                    onClick={() => setDateRange('30days')}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${dateRange === '30days' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                  >
                    30d
                  </button>
                  <button
                    onClick={() => setDateRange('custom')}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${dateRange === 'custom' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                  >
                    <Calendar size={14} /> Custom
                  </button>
                </div>
              </div>

              {/* Custom Range Inputs (Only show if 'custom' is selected) */}
              {dateRange === 'custom' && (
                <div className="flex justify-end animate-fade-in">
                  <div className="glass-panel p-3 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase font-bold text-slate-500 mb-1">From</label>
                      <input
                        type="datetime-local"
                        className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-300 outline-none focus:border-blue-500/50"
                        value={customStart}
                        onChange={(e) => setCustomStart(e.target.value)}
                      />
                    </div>
                    <div className="h-8 w-[1px] bg-white/10"></div>
                    <div className="flex flex-col">
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-[10px] uppercase font-bold text-slate-500">To</label>
                        <button
                          onClick={() => {
                            const now = new Date();
                            setCustomEnd(format(now, "yyyy-MM-dd'T'HH:mm"));
                          }}
                          className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded hover:bg-blue-500/30 transition-colors"
                        >
                          NOW
                        </button>
                      </div>
                      <input
                        type="datetime-local"
                        className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-300 outline-none focus:border-blue-500/50"
                        value={customEnd}
                        onChange={(e) => setCustomEnd(e.target.value)}
                      />
                    </div>
                    <div className="h-8 w-[1px] bg-white/10"></div>
                    <button
                      onClick={() => fetchData()}
                      className="h-full px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2"
                    >
                      APPLY
                    </button>
                  </div>
                </div>
              )}

              {/* STATS CARDS */}
              <StatsCards data={filteredData} employeeData={employeeData} />

              {/* MAIN TABLE */}
              <div className="glass-panel rounded-2xl border border-white/5 overflow-hidden flex flex-col h-[600px]">
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                  <h3 className="font-semibold text-lg text-white">Live Access Logs</h3>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={16} className="text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search events, names, doors, status..."
                      className="bg-[#0f172a]/50 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:w-80 transition-all outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 placeholder:text-slate-600"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <TransitTable data={filteredData} />
                </div>
              </div>
            </div>
          )}

          {currentView === 'reports' && (
            <div className="max-w-7xl mx-auto space-y-8 animate-slide-up">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-1">Report Generator</h1>
                  <p className="text-slate-500">Create, customize, and export detailed access reports.</p>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={16} className="text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search events, names, doors, status..."
                    className="bg-[#0f172a]/50 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:w-80 transition-all outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 placeholder:text-slate-600"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              {/* Pass the SERVER-FILTERED data to the report generator */}
              <ReportGenerator data={filteredData} />
            </div>
          )}

          {currentView === 'cardholders' && (
            <div className="max-w-7xl mx-auto space-y-8 animate-slide-up">
              <CardholderPage />
            </div>
          )}

          {currentView === 'settings' && (
            <div className="max-w-7xl mx-auto space-y-8 animate-slide-up">
              <SettingsPage />
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;
