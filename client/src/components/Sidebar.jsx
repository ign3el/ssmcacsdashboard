import React, { useState } from 'react';
import { LayoutDashboard, FileText, Users, MapPin, ShieldAlert, Settings, LogOut, ChevronRight, Zap } from 'lucide-react';

const Sidebar = ({ currentView, onNavigate }) => {
    const [isHovered, setIsHovered] = useState(false);

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'reports', label: 'Reports', icon: FileText },
        { id: 'cardholders', label: 'Cardholders', icon: Users },
        { id: 'access-points', label: 'Access Points', icon: MapPin },
        { id: 'locations', label: 'Locations', icon: ShieldAlert },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div
            className={`h-screen relative flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-50
      ${isHovered ? 'w-72' : 'w-5'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* 
         GLASS LAYER 
         - Backdrop Blur: 3xl for deep frost
         - Background: Semi-transparent dark blue
         - Border: gradient border effect
      */}
            <div className={`absolute inset-0 bg-[#0f172a]/60 backdrop-blur-3xl border-r border-white/10 shadow-[15px_0_30px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-700
        ${isHovered ? 'rounded-r-2xl' : ''}`}>

                {/* TOP REFLECTION (Light Source) */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"></div>

                {/* SHINING EDGE (Highlights) */}
                <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-white/20 via-blue-500/50 to-white/20"></div>

                {/* NOISE/GRAIN TEXTURE (Subtle) */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
            </div>

            {/* COLLAPSED INDICATOR (Neon Strip) */}
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 z-10
          ${isHovered ? 'bg-transparent' : 'bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]'}`}>
            </div>

            {/* COLLAPSED ICON */}
            <div className={`absolute left-1 top-1/2 -translate-y-1/2 text-cyan-400 mix-blend-screen transition-all duration-300 z-20 ${isHovered ? 'opacity-0 -translate-x-10' : 'opacity-100'}`}>
                <ChevronRight size={16} className="animate-pulse filter drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
            </div>

            {/* CONTENT (Z-Index above glass) */}
            <div className={`relative z-10 flex-1 flex flex-col overflow-hidden whitespace-nowrap transition-all duration-700 
          ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>

                {/* LOGO */}
                <div className="h-28 flex items-center px-8 relative">
                    <div className="absolute inset-x-8 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)] mr-5 shrink-0 ring-1 ring-white/20 relative group">
                        <ShieldAlert className="text-white drop-shadow-md group-hover:scale-110 transition-transform" size={26} />
                        <div className="absolute inset-0 rounded-xl bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    <div className="overflow-hidden">
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 tracking-tight drop-shadow-sm">SSMC Access</h1>
                        <p className="text-[10px] text-cyan-400 font-bold tracking-[0.2em] uppercase flex items-center gap-1">
                            <Zap size={10} className="fill-current" /> Secure Monitor
                        </p>
                    </div>
                </div>

                {/* MENU */}
                <nav className="flex-1 px-4 space-y-2 py-8 overflow-y-auto custom-scrollbar">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = currentView === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group relative
                          ${isActive
                                        ? 'text-white'
                                        : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {/* ACTIVE BACKGROUND (Glowing Glass) */}
                                {isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/10 border border-blue-500/30 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-sm"></div>
                                )}

                                {/* HOVER GLOW */}
                                <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <Icon size={22} className={`shrink-0 relative z-10 transition-transform duration-300 drop-shadow-lg ${isActive ? 'text-cyan-300 scale-110' : 'group-hover:text-blue-200 group-hover:scale-105'}`} />

                                <span className={`font-medium text-sm relative z-10 tracking-wide ${isActive ? 'text-white font-semibold' : ''}`}>{item.label}</span>

                                {isActive && (
                                    <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgb(34,211,238)] animate-pulse"></div>
                                )}
                            </button>
                        );
                    })}
                </nav>

                {/* FOOTER */}
                <div className="p-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 blur-[50px] group-hover:bg-blue-500/30 transition-colors"></div>

                        <div className="flex items-center gap-3 relative z-10">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                            <div>
                                <p className="text-xs font-bold text-white">Service User</p>
                                <p className="text-[10px] text-emerald-400 tracking-wider">● ONLINE</p>
                            </div>
                        </div>

                        <button className="mt-4 flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 transition-all border border-white/5 hover:border-rose-500/30 text-xs font-medium uppercase tracking-wide">
                            <LogOut size={14} /> Disconnect
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
