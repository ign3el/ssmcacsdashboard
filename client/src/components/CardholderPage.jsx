import { useState, useEffect } from 'react';
import { User, CreditCard, Clock, DoorOpen, Search, AlertCircle, ChevronDown, ChevronRight, X } from 'lucide-react';
import { format } from 'date-fns';

export default function CardholderPage() {
    const [cardholders, setCardholders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedBehavior, setExpandedBehavior] = useState(null); // Format: "cardholderId-behaviorId"
    const [behaviorDoors, setBehaviorDoors] = useState({});
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        fetchCardholders();
    }, []);

    const fetchCardholders = async () => {
        try {
            const response = await fetch('/api/cardholders');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCardholders(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching cardholders:', error);
            setError(error.message);
            setLoading(false);
        }
    };

    const fetchBehaviorDoors = async (behaviorId) => {
        if (behaviorDoors[behaviorId]) return; // Already fetched

        try {
            const response = await fetch(`/api/behaviors/${behaviorId}/doors`);
            if (!response.ok) throw new Error('Failed to fetch doors');
            const doors = await response.json();
            setBehaviorDoors(prev => ({ ...prev, [behaviorId]: doors }));
        } catch (error) {
            console.error('Error fetching behavior doors:', error);
            setBehaviorDoors(prev => ({ ...prev, [behaviorId]: [] }));
        }
    };

    const toggleBehavior = (cardholderId, behaviorId) => {
        const key = `${cardholderId}-${behaviorId}`;
        if (expandedBehavior === key) {
            setExpandedBehavior(null);
        } else {
            setExpandedBehavior(key);
            fetchBehaviorDoors(behaviorId);
        }
    };

    const filteredCardholders = cardholders.filter(ch => {
        if (!searchTerm) return true;
        const search = searchTerm.toLowerCase();
        return (
            (ch.CardholderName || '').toLowerCase().includes(search) ||
            (ch.CardNumber || '').toString().includes(search) ||
            (ch.BehaviorDescriptions || '').toLowerCase().includes(search) ||
            (ch.LastDoorUsed || '').toLowerCase().includes(search)
        );
    });

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-slate-400">Loading cardholders...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="glass-panel rounded-2xl p-8 text-center">
                <AlertCircle className="mx-auto mb-4 text-rose-500" size={48} />
                <h3 className="text-xl font-semibold text-white mb-2">Error Loading Data</h3>
                <p className="text-slate-400">{error}</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Cardholders</h1>
                    <div className="flex items-center gap-3">
                        <p className="text-slate-400">Employee access cards and recent activity</p>
                        <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-0.5 rounded-full border border-blue-500/30">
                            {cardholders.length} Total
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Table */}
            <div className="glass-panel rounded-2xl border border-white/5 overflow-hidden flex flex-col h-[600px]">
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                    <h3 className="font-semibold text-lg text-white">Cardholder Directory</h3>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={16} className="text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search cardholders, cards, behaviors..."
                            className="bg-[#0f172a]/50 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:w-80 transition-all outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 placeholder:text-slate-600"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-auto">
                    <table className="w-full">
                        <thead className="sticky top-0 bg-[#0a1628]/95 backdrop-blur-sm z-10">
                            <tr className="border-b border-white/5">
                                <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    Cardholder
                                </th>
                                <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    Card #
                                </th>
                                <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    Behavior
                                </th>
                                <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    Last Door Used
                                </th>
                                <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    Last Access Time
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCardholders.map((ch, idx) => {
                                let cards = [];
                                try {
                                    if (ch.CardsJSON) {
                                        cards = JSON.parse(ch.CardsJSON);
                                    } else {
                                        cards = (ch.CardNumber || '').split('\n').filter(c => c.trim()).map(c => ({ CardNumber: c, StateID: 0 }));
                                    }
                                } catch (e) {
                                    cards = (ch.CardNumber || '').split('\n').filter(c => c.trim()).map(c => ({ CardNumber: c, StateID: 0 }));
                                }

                                const behaviorDescs = (ch.BehaviorDescriptions || '').split('|');
                                const behaviorIds = (ch.BehaviorIds || '').split(',');

                                return (
                                    <tr
                                        key={idx}
                                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                    >
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                                    <User className="text-white" size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-white font-medium">{ch.CardholderName}</div>
                                                    <div className="text-xs text-slate-500">ID: {ch.EmployeeID}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex flex-col gap-1">
                                                {cards.map((card, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={(e) => { e.stopPropagation(); setSelectedCard(card); }}
                                                        className={`flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 transition-colors text-sm ${card.StateID === 0 ? 'text-emerald-400' : 'text-slate-400'} w-full text-left`}
                                                    >
                                                        <CreditCard size={14} />
                                                        <span className="font-mono">{card.CardNumber}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex flex-col gap-2">
                                                {behaviorDescs.map((desc, i) => {
                                                    const behaviorId = behaviorIds[i];
                                                    const expandKey = `${ch.CardholderId}-${behaviorId}`;
                                                    const isExpanded = expandedBehavior === expandKey;
                                                    const doors = behaviorDoors[behaviorId] || [];

                                                    return desc ? (
                                                        <div key={i} className="space-y-1">
                                                            <button
                                                                onClick={() => toggleBehavior(ch.CardholderId, behaviorId)}
                                                                className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                                                            >
                                                                {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                                                {desc}
                                                            </button>
                                                            {isExpanded && (
                                                                <div className="ml-6 mt-1 space-y-1">
                                                                    {doors.length > 0 ? (
                                                                        doors.map((door, di) => (
                                                                            <div key={di} className="text-xs text-slate-400 flex items-center gap-1">
                                                                                <DoorOpen size={12} className="text-emerald-400" />
                                                                                {door.DoorDescription || door.DoorKey}
                                                                            </div>
                                                                        ))
                                                                    ) : (
                                                                        <div className="text-xs text-slate-500 italic">No doors assigned</div>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : null;
                                                })}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2 text-slate-300">
                                                <DoorOpen size={16} className="text-emerald-400" />
                                                {ch.LastDoorUsed || 'No Activity'}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2 text-slate-300">
                                                <Clock size={16} className="text-cyan-400" />
                                                {ch.LastAccessTime
                                                    ? format(new Date(ch.LastAccessTime), 'MMM dd, yyyy HH:mm')
                                                    : 'Never'}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                            {filteredCardholders.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center py-16 text-slate-500">
                                        <div className="flex flex-col items-center gap-2">
                                            <AlertCircle className="w-12 h-12 text-slate-600" />
                                            <p>No cardholders found</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Card Details Modal */}
            {selectedCard && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedCard(null)}>
                    <div className="bg-[#0f172a] border border-white/10 rounded-2xl max-w-lg w-full p-6 shadow-2xl transform transition-all animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-white">Card Details</h3>
                                <p className="text-slate-400 text-sm">Detailed information for this credential</p>
                            </div>
                            <button onClick={() => setSelectedCard(null)} className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-lg">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                                    <span className="text-slate-400">Card Number</span>
                                    <span className="font-mono text-xl text-white font-medium tracking-wide">{selectedCard.CardNumber}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400">Status</span>
                                    <span className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${selectedCard.StateID === 0 ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>
                                        {selectedCard.StateID === 0 ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400">Expiration</span>
                                    <span className="text-white font-medium">
                                        {selectedCard.ExpiryDateTime ? format(new Date(selectedCard.ExpiryDateTime), 'MMM dd, yyyy') : 'Never'}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider text-[10px]">Last Known Activity</h4>
                                <div className="p-4 rounded-xl bg-black/20 border border-white/5 space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                                            <DoorOpen size={16} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white font-medium">{selectedCard.LastDoorName || 'No recent access'}</p>
                                            <p className="text-xs text-slate-500">Last door accessed</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                                            <Clock size={16} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white font-medium">
                                                {selectedCard.LastUsedDate ? format(new Date(selectedCard.LastUsedDate), 'MMM dd, yyyy HH:mm') : 'N/A'}
                                            </p>
                                            <p className="text-xs text-slate-500">Time of access</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
