import React, { useState, useMemo, useEffect } from 'react';
import { Download, CheckSquare, Square, Filter, Plus, X, ArrowUp, ArrowDown, AlertCircle, FileSpreadsheet, FileIcon } from 'lucide-react';
import { format, subDays, isAfter, isBefore } from 'date-fns';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReportGenerator = ({ data }) => {
    const [selectedColumns, setSelectedColumns] = useState({
        EventTime: true,
        CardholderName: true,
        CardNumber: true,
        DoorName: true,
        Location: true,
        EventType: true,
        AccessGranted: true
    });

    // Date Filters
    const [dateRange, setDateRange] = useState('30days');
    const [customStart, setCustomStart] = useState('');
    const [customEnd, setCustomEnd] = useState('');

    // Advanced Filters
    const [filters, setFilters] = useState([]); // Array of { field, value }
    const [sortConfig, setSortConfig] = useState({ key: 'EventTime', direction: 'desc' });

    // Validation State
    const [validationMsg, setValidationMsg] = useState(null);

    const columns = [
        { key: 'EventTime', label: 'Time' },
        { key: 'CardholderName', label: 'Cardholder' },
        { key: 'CardNumber', label: 'Card #' },
        { key: 'DoorName', label: 'Door' },
        { key: 'Location', label: 'Location' },
        { key: 'EventType', label: 'Event Type' },
        { key: 'AccessGranted', label: 'Status' }
    ];

    // Compute Valid Options (Only Visible Columns)
    const visibleOptions = columns.filter(col => selectedColumns[col.key]);

    // Validation Effect
    useEffect(() => {
        const issues = [];

        // Check Sort
        if (!selectedColumns[sortConfig.key]) {
            issues.push(`Sort field '${columns.find(c => c.key === sortConfig.key)?.label}' is hidden.`);
        }

        // Check Filters
        filters.forEach(f => {
            if (!selectedColumns[f.field]) {
                const label = columns.find(c => c.key === f.field)?.label;
                if (!issues.includes(`Filter field '${label}' is hidden.`)) {
                    issues.push(`Filter field '${label}' is hidden.`);
                }
            }
        });

        if (issues.length > 0) {
            setValidationMsg({ type: 'error', text: issues[0], actionField: sortConfig.key });
        } else {
            setValidationMsg(null);
        }
    }, [selectedColumns, sortConfig, filters]);

    const toggleColumn = (key) => {
        setSelectedColumns(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const fixVisibility = () => {
        if (!selectedColumns[sortConfig.key]) {
            toggleColumn(sortConfig.key);
        }
        filters.forEach(f => {
            if (!selectedColumns[f.field]) setSelectedColumns(prev => ({ ...prev, [f.field]: true }));
        });
    };

    const addFilter = () => {
        const defaultField = visibleOptions.length > 0 ? visibleOptions[0].key : 'EventTime';
        setFilters([...filters, { field: defaultField, value: '' }]);
    };

    const removeFilter = (index) => {
        const newFilters = [...filters];
        newFilters.splice(index, 1);
        setFilters(newFilters);
    };

    const updateFilter = (index, key, val) => {
        const newFilters = [...filters];
        newFilters[index][key] = val;
        setFilters(newFilters);
    };

    // Process Data
    const processedData = useMemo(() => {
        let result = [...data];

        // 1. Date Filter
        result = result.filter(item => {
            const itemDate = new Date(item.EventTime);
            const now = new Date();
            if (dateRange === '24h') return isAfter(itemDate, subDays(now, 1));
            if (dateRange === '7days') return isAfter(itemDate, subDays(now, 7));
            if (dateRange === '30days') return isAfter(itemDate, subDays(now, 30));
            if (dateRange === 'custom' && customStart && customEnd) {
                const start = new Date(customStart);
                const end = new Date(customEnd);
                return isAfter(itemDate, start) && isBefore(itemDate, end);
            }
            return true;
        });

        // 2. Apply Filter Rules
        if (filters.length > 0) {
            result = result.filter(item => {
                return filters.every(rule => {
                    if (!rule.value) return true;
                    const itemValue = String(item[rule.field]).toLowerCase();
                    const ruleValue = rule.value.toLowerCase();

                    if (rule.field === 'AccessGranted') {
                        const status = item.AccessGranted ? 'granted' : 'denied';
                        return status.includes(ruleValue);
                    }

                    return itemValue.includes(ruleValue);
                });
            });
        }

        // Apply Sort
        if (selectedColumns[sortConfig.key]) {
            result.sort((a, b) => {
                const valA = a[sortConfig.key];
                const valB = b[sortConfig.key];
                if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
                if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }

        return result;
    }, [data, filters, sortConfig, dateRange, customStart, customEnd, selectedColumns]);

    // Format Helpers
    const formatValue = (key, val) => {
        if (key === 'EventTime') return format(new Date(val), 'yyyy-MM-dd HH:mm:ss');
        if (key === 'AccessGranted') return val ? 'Granted' : 'Denied';
        return val;
    };

    // --- EXPORT LOGIC ---

    const handleExportCSV = () => {
        if (validationMsg) return;

        const headers = columns.filter(col => selectedColumns[col.key]).map(col => col.label);
        const keys = columns.filter(col => selectedColumns[col.key]).map(col => col.key);

        const csvRows = [
            headers.join(','),
            ...processedData.map(row => {
                return keys.map(key => {
                    let val = formatValue(key, row[key]);
                    return `"${val}"`;
                }).join(',');
            })
        ];

        // Robust Blob Method
        const csvString = csvRows.join("\n");
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", `SSMC_Report_${format(new Date(), 'yyyyMMdd_HHmmss')}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const handleExportPDF = () => {
        if (validationMsg) return;

        const doc = new jsPDF();
        const tableColumn = columns.filter(col => selectedColumns[col.key]).map(col => col.label);
        const tableRows = [];

        processedData.forEach(row => {
            const rowData = columns
                .filter(col => selectedColumns[col.key])
                .map(col => formatValue(col.key, row[col.key]));
            tableRows.push(rowData);
        });

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 20,
            styles: { fontSize: 8 },
            headStyles: { fillColor: [41, 128, 185] }
        });

        doc.text(`SSMC Access Report`, 14, 15);
        doc.save(`SSMC_Report_${format(new Date(), 'yyyyMMdd_HHmmss')}.pdf`);
    };

    return (
        <div className="space-y-6 animate-fade-in">

            {/* Validation Banner */}
            {validationMsg && (
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center justify-between text-red-200">
                    <div className="flex items-center gap-3">
                        <AlertCircle size={20} className="text-red-400" />
                        <span>{validationMsg.text} Please check it to proceed.</span>
                    </div>
                    <button
                        onClick={fixVisibility}
                        className="px-4 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                        Auto-Fix
                    </button>
                </div>
            )}

            <div className={`glass-panel p-6 rounded-2xl border border-white/5 space-y-6 transition-opacity ${validationMsg ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>

                {/* TOP ROW: Columns & Sort */}
                <div className="flex flex-col xl:flex-row gap-8">

                    {/* Date Controls */}
                    <div className="min-w-[200px]">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Time Period</h3>
                        <div className="space-y-2">
                            <select
                                value={dateRange}
                                onChange={(e) => setDateRange(e.target.value)}
                                className="bg-[#0f172a]/50 text-sm text-slate-300 border border-white/10 rounded-lg px-3 py-2 w-full outline-none"
                            >
                                <option value="24h">Last 24 Hours</option>
                                <option value="7days">Last 7 Days</option>
                                <option value="30days">Last 30 Days</option>
                                <option value="custom">Custom Range</option>
                            </select>

                            {dateRange === 'custom' && (
                                <div className="flex flex-col gap-2">
                                    <input type="datetime-local" className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-slate-300" value={customStart} onChange={e => setCustomStart(e.target.value)} />
                                    <input type="datetime-local" className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-slate-300" value={customEnd} onChange={e => setCustomEnd(e.target.value)} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Columns */}
                    <div className="flex-1">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Visible Columns</h3>
                        <div className="flex flex-wrap gap-2">
                            {columns.map(col => (
                                <button
                                    key={col.key}
                                    onClick={() => toggleColumn(col.key)}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-medium
                                    ${selectedColumns[col.key]
                                            ? 'bg-blue-500/20 border-blue-500/50 text-blue-200'
                                            : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'}`}
                                >
                                    {selectedColumns[col.key] ? <CheckSquare size={12} /> : <Square size={12} />}
                                    {col.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sort Config */}
                    <div className="min-w-[200px]">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Sort Order</h3>
                        <div className="flex items-center gap-2 bg-[#0f172a]/50 p-1 rounded-lg border border-white/10">
                            <select
                                className="bg-transparent text-sm text-slate-300 outline-none w-full p-1 cursor-pointer"
                                value={sortConfig.key}
                                onChange={(e) => setSortConfig({ ...sortConfig, key: e.target.value })}
                            >
                                {visibleOptions.map(col => <option key={col.key} value={col.key}>{col.label}</option>)}
                            </select>
                            <button
                                onClick={() => setSortConfig(prev => ({ ...prev, direction: prev.direction === 'asc' ? 'desc' : 'asc' }))}
                                className="p-1.5 hover:bg-white/10 rounded text-slate-400 hover:text-white"
                            >
                                {sortConfig.direction === 'asc' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-[1px] bg-white/5 w-full"></div>

                {/* MIDDLE ROW: Advanced Filter Builder */}
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                            <Filter size={12} /> Filter Rules
                        </h3>
                        <button
                            onClick={addFilter}
                            className="text-xs flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <Plus size={14} /> Add Rule
                        </button>
                    </div>

                    <div className="space-y-2">
                        {filters.length === 0 && (
                            <p className="text-sm text-slate-600 italic">No filters applied. Showing all records.</p>
                        )}
                        {filters.map((rule, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row items-center gap-2 animate-fade-in group">
                                <span className="text-xs text-slate-500 font-mono w-6 text-center">{idx + 1}.</span>

                                <div className="flex-1 flex items-center gap-2 w-full">
                                    <select
                                        className="bg-[#0f172a]/50 border border-white/10 rounded px-3 py-2 text-sm text-slate-300 outline-none focus:border-blue-500/50 flex-1"
                                        value={rule.field}
                                        onChange={(e) => updateFilter(idx, 'field', e.target.value)}
                                    >
                                        {!selectedColumns[rule.field] && <option value={rule.field}>{columns.find(c => c.key === rule.field)?.label} (Hidden)</option>}
                                        {visibleOptions.map(col => <option key={col.key} value={col.key}>{col.label}</option>)}
                                    </select>

                                    <span className="text-xs text-slate-500">contains</span>

                                    <input
                                        type="text"
                                        className="bg-[#0f172a]/50 border border-white/10 rounded px-3 py-2 text-sm text-slate-300 outline-none focus:border-blue-500/50 flex-[2]"
                                        placeholder="Value..."
                                        value={rule.value}
                                        onChange={(e) => updateFilter(idx, 'value', e.target.value)}
                                    />
                                </div>

                                <button
                                    onClick={() => removeFilter(idx)}
                                    className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                    <div className="flex items-center text-xs text-slate-500 mr-2">Use table below for live preview</div>

                    <button
                        onClick={handleExportCSV}
                        disabled={!!validationMsg}
                        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl font-medium shadow-lg shadow-emerald-600/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FileSpreadsheet size={18} />
                        Export Excel (CSV)
                    </button>

                    <button
                        onClick={handleExportPDF}
                        disabled={!!validationMsg}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-xl font-medium shadow-lg shadow-red-600/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FileIcon size={18} />
                        Export PDF
                    </button>
                </div>
            </div>

            {/* Preview Table */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/5">
                <div className="p-4 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
                    <h3 className="font-semibold text-slate-300">Preview Results</h3>
                    <span className="text-xs text-slate-500">{processedData.length} records match</span>
                </div>
                <div className="overflow-x-auto max-h-[500px] custom-scrollbar">
                    <table className="w-full">
                        <thead className="bg-white/5 sticky top-0 backdrop-blur-md">
                            <tr>
                                {columns.map(col => selectedColumns[col.key] && (
                                    <th key={col.key} className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        {col.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {processedData.slice(0, 50).map((row, idx) => (
                                <tr key={idx} className="hover:bg-white/5 transition-colors">
                                    {columns.map(col => selectedColumns[col.key] && (
                                        <td key={col.key} className="px-6 py-3 text-sm text-slate-300 whitespace-nowrap">
                                            {formatValue(col.key, row[col.key])}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportGenerator;
