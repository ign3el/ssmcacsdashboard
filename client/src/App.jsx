import React, { useState, useEffect, useRef } from 'react';
import { LayoutDashboard, FileText, Settings, Search, Bell, Menu, X, Calendar, Filter, ChevronLeft, ChevronRight, User, LogOut } from 'lucide-react';
import { format, subDays, isAfter, isBefore } from 'date-fns';
import Sidebar from './components/Sidebar';
import StatsCards from './components/StatsCards';
import TransitTable from './components/TransitTable';
import ReportGenerator from './components/ReportGenerator';

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
  const [currentView, setCurrentView] = useState('dashboard');
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Date Range State
  const [dateRange, setDateRange] = useState('24h');
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');

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
        // Only send if both are set
        params.append('start', new Date(customStart).toISOString());
        params.append('end', new Date(customEnd).toISOString());
      }

      const response = await fetch(`http://localhost:3000/api/transit?${params.toString()}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Initial Load & Filter Changes -> Trigger Fetch
  useEffect(() => {
    fetchData();
  }, [searchTerm, dateRange, customStart, customEnd]); // Re-fetch when ANY filter changes

  // Polling (Keep "Live") - Re-fetches with active filters every 2s
  useInterval(() => {
    fetchData();
  }, 2000);

  // Data is now pre-filtered by Server, so no local filter logic needed
  const filteredData = data;

  const handleNavigate = (viewId) => {
    setCurrentView(viewId);
  };

  return (
    <div className="flex h-screen bg-[#020b1c] text-slate-300 font-sans overflow-hidden selection:bg-blue-500/30">

      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-indigo-600/5 rounded-full blur-[100px]"></div>
      </div>

      <Sidebar currentView={currentView} onNavigate={handleNavigate} />

      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        {/* HEADER */}
        <header className="h-16 px-8 flex items-center justify-between border-b border-white/5 bg-[#020b1c]/80 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              {currentView === 'dashboard' ? 'Overview' : currentView === 'reports' ? 'Reports & Analytics' : 'Settings'}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            {/* Global Search Bar */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-slate-500 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search events, names, doors..."
                className="bg-[#0f172a]/50 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:w-80 transition-all outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 placeholder:text-slate-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="h-8 w-[1px] bg-white/10"></div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#020b1c]"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/10">
                  AD
                </div>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs text-slate-500">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative">

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
                      <label className="text-[10px] uppercase font-bold text-slate-500 mb-1">To</label>
                      <input
                        type="datetime-local"
                        className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-300 outline-none focus:border-blue-500/50"
                        value={customEnd}
                        onChange={(e) => setCustomEnd(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STATS CARDS */}
              <StatsCards data={filteredData} />

              {/* MAIN TABLE */}
              <div className="glass-panel rounded-2xl border border-white/5 overflow-hidden flex flex-col h-[600px]">
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                  <h3 className="font-semibold text-lg text-white">Live Access Logs</h3>
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                      <Filter size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                      <Settings size={18} />
                    </button>
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
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Report Generator</h1>
                <p className="text-slate-500">Create, customize, and export detailed access reports.</p>
              </div>
              {/* Pass the SERVER-FILTERED data to the report generator */}
              <ReportGenerator data={filteredData} />
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;
