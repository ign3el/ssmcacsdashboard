import { useState, useEffect } from 'react';
import { User, CreditCard, Clock, DoorOpen, Search, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';

export default function CardholderPage() {
    const [cardholders, setCardholders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    const filteredCardholders = cardholders.filter(ch => {
        if (!searchTerm) return true;
        const search = searchTerm.toLowerCase();
        return (
            (ch.CardholderName || '').toLowerCase().includes(search) ||
            (ch.CardNumber || '').toString().includes(search) ||
            (ch.BehaviorDescription || '').toLowerCase().includes(search) ||
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
                    <p className="text-slate-400">Employee access cards and recent activity</p>
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
                            {filteredCardholders.map((ch, idx) => (
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
                                        <div className="flex items-center gap-2 text-slate-300">
                                            <CreditCard size={16} className="text-blue-400" />
                                            {ch.CardNumber}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                            {ch.BehaviorDescription || 'No Behavior'}
                                        </span>
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
                            ))}
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
        </div>
    );
}
