import React, { useState } from 'react';
import { LayoutDashboard, FileText, Users, MapPin, ShieldAlert, Settings, LogOut, ChevronRight, Zap, Pin, PinOff } from 'lucide-react';

const Sidebar = ({ currentView, onNavigate, user, onLogout }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPinned, setIsPinned] = useState(false);

    // Derived state: Sidebar is open if Hovered OR Pinned
    const isOpen = isHovered || isPinned;

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'reports', label: 'Reports', icon: FileText },
        { id: 'cardholders', label: 'Cardholders', icon: Users },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div
            className={`h-screen relative flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-50 overflow-hidden
      ${isOpen ? 'w-72' : 'w-5'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* 
         GLASS LAYER 
         - Using pure CSS clipping via parent overflow-hidden to ensure NO artifacts bleed out.
      */}
            <div className={`absolute inset-0 bg-[#0f172a]/60 backdrop-blur-3xl border-r border-white/10 transition-all duration-700
        ${isOpen ? 'shadow-[15px_0_30px_rgba(0,0,0,0.3)]' : 'shadow-none'}`}>

                {/* TOP REFLECTION */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"></div>

                {/* SHINING EDGE */}
                <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-white/20 via-blue-500/50 to-white/20"></div>

                {/* NOISE TEXTURE */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
            </div>

            {/* COLLAPSED INDICATOR (Neon Strip) */}
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 z-10
          ${isOpen ? 'bg-transparent' : 'bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]'}`}>
            </div>

            {/* COLLAPSED ICON */}
            <div className={`absolute left-1 top-1/2 -translate-y-1/2 text-cyan-400 mix-blend-screen transition-all duration-300 z-20 ${isOpen ? 'opacity-0 -translate-x-10' : 'opacity-100'}`}>
                <ChevronRight size={16} className="animate-pulse filter drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
            </div>

            {/* CONTENT */}
            <div className={`relative z-10 flex-1 flex flex-col whitespace-nowrap transition-all duration-700 
          ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>

                {/* LOGO & PIN HEADER */}
                <div className="h-28 flex items-center justify-between px-6 relative">
                    <div className="absolute inset-x-8 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    <div className="flex items-center justify-center w-full">
                        <img
                            src="/logo-sidebar.png"
                            alt="SSMC Logo"
                            className={`transition-all duration-300 ${isOpen ? 'h-12 opacity-100' : 'h-8 opacity-0'}`}
                        />
                    </div>

                    {/* LOGOUT BUTTON (Top) */}
                    <button
                        onClick={onLogout}
                        className="p-2 ml-2 rounded-full transition-all duration-300 text-rose-400 hover:bg-rose-500/10 hover:text-rose-300"
                        title="Logout"
                    >
                        <LogOut size={16} />
                    </button>

                    {/* PIN BUTTON */}
                    <button
                        onClick={() => setIsPinned(!isPinned)}
                        className={`p-2 rounded-full transition-all duration-300 border border-transparent
                  ${isPinned
                                ? 'bg-blue-500/20 text-cyan-400 hover:bg-blue-500/30 border-blue-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                                : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
                        title={isPinned ? "Unpin Sidebar" : "Pin Sidebar Open"}
                    >
                        <Pin size={16} className={isPinned ? "fill-current" : ""} />
                    </button>
                </div>

                {/* MENU */}
                <nav className="flex-1 px-4 space-y-2 py-6 overflow-y-auto custom-scrollbar">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = currentView === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group relative
                          ${isActive
                                        ? 'text-white'
                                        : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/10 border border-blue-500/30 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-sm"></div>
                                )}
                                <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <Icon size={20} className={`shrink-0 relative z-10 transition-transform duration-300 drop-shadow-lg ${isActive ? 'text-cyan-300 scale-110' : 'group-hover:text-blue-200 group-hover:scale-105'}`} />

                                <span className={`font-medium text-sm relative z-10 tracking-wide ${isActive ? 'text-white font-semibold' : ''}`}>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

                {/* FOOTER */}
                <div className="p-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 relative overflow-hidden group">
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                            <div>
                                <p className="text-xs font-bold text-white max-w-[120px] truncate" title={user}>{user || 'Guest'}</p>
                                <p className="text-[10px] text-emerald-400 tracking-wider">● ONLINE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;
