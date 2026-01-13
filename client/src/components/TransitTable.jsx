import React, { useState, useMemo } from 'react';
import { format } from 'date-fns';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, AlertCircle, CheckCircle } from 'lucide-react';

const TransitTable = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [sortConfig, setSortConfig] = useState({ key: 'EventTime', direction: 'desc' });

    // Sorting Logic
    const sortedData = useMemo(() => {
        let sortableItems = [...data];
        if (sortConfig.key) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

    // Pagination Logic
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const currentData = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) return null;
        return sortConfig.direction === 'asc' ? <ChevronUp size={14} className="text-blue-400" /> : <ChevronDown size={14} className="text-blue-400" />;
    };

    return (
        <div className="flex flex-col h-full gap-4">
            {/* Table Container */}
            <div className="glass-panel rounded-2xl border border-white/5 flex-1 min-h-0 overflow-hidden flex flex-col">
                <div className="overflow-auto custom-scrollbar flex-1">
                    <table className="w-full relative border-collapse">
                        <thead className="sticky top-0 z-10 bg-[#0f172a]">
                            <tr className="border-b border-white/5">
                                {[
                                    { label: 'Time', key: 'EventTime' },
                                    { label: 'Cardholder', key: 'CardholderName' },
                                    { label: 'Card #', key: 'CardNumber' },
                                    { label: 'Door', key: 'DoorName' },
                                    { label: 'Location', key: 'DoorDescription' },
                                    { label: 'Event', key: 'EventType' },
                                    { label: 'Status', key: 'AccessGranted' }
                                ].map((col) => (
                                    <th
                                        key={col.key}
                                        onClick={() => requestSort(col.key)}
                                        className="group px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider cursor-pointer hover:bg-white/5 transition-colors select-none first:pl-8 last:pr-8 whitespace-nowrap bg-[#0f172a]"
                                    >
                                        <div className="flex items-center gap-2 group-hover:text-blue-200 transition-colors">
                                            {col.label}
                                            {getSortIcon(col.key)}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {currentData.map((row, index) => (
                                <tr key={index} className="table-row-hover group transition-all duration-200">
                                    <td className="px-6 py-4 text-sm text-slate-300 font-mono whitespace-nowrap first:pl-8">
                                        {row.EventTime ? (
                                            <>
                                                {format(new Date(row.EventTime), 'HH:mm:ss')}
                                                <span className="text-slate-500 ml-2 text-xs">{format(new Date(row.EventTime), 'MMM dd')}</span>
                                            </>
                                        ) : (
                                            <span className="text-slate-500">N/A</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-xs font-bold text-slate-300 ring-1 ring-white/10 group-hover:ring-blue-400/50 transition-all">
                                                {row.CardholderName ? row.CardholderName.charAt(0) : '?'}
                                            </div>
                                            <span className="font-medium text-slate-200 group-hover:text-white transition-colors">{row.CardholderName || 'Unknown'}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-400">{row.CardNumber}</td>
                                    <td className="px-6 py-4 text-sm text-slate-300">{row.DoorName}</td>
                                    <td className="px-6 py-4 text-sm text-slate-400">{row.DoorDescription || row.DoorName}</td>
                                    <td className="px-6 py-4 text-sm text-slate-300">{row.EventType}</td>
                                    <td className="px-6 py-4 last:pr-8">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border
                        ${row.AccessGranted
                                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]'
                                                : 'bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.1)]'
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${row.AccessGranted ? 'bg-emerald-400' : 'bg-rose-400'}`}></span>
                                            {row.AccessGranted ? 'Granted' : 'Denied'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {data.length === 0 && (
                                <tr>
                                    <td colSpan="8" className="text-center py-16 text-slate-500">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
                                                <AlertCircle className="w-6 h-6" />
                                            </div>
                                            <p>No activity records found for this period.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-2 flex-shrink-0">
                <p className="text-sm text-slate-500 font-medium">
                    Showing <span className="text-white">{Math.min(((currentPage - 1) * itemsPerPage) + 1, sortedData.length)}</span> - <span className="text-white">{Math.min(currentPage * itemsPerPage, sortedData.length)}</span> of <span className="text-white">{sortedData.length}</span>
                </p>

                <div className="glass-panel rounded-xl p-1 flex items-center gap-1">
                    <button
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronsLeft size={16} />
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

                    <span className="text-sm font-medium text-slate-300 px-2 min-w-[80px] text-center">
                        Page <span className="text-blue-400">{currentPage}</span> / {Math.max(1, totalPages)}
                    </span>

                    <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight size={16} />
                    </button>
                    <button
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronsRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransitTable;
