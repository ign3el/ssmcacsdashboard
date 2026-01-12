import React from 'react';
import { Search, Download } from 'lucide-react';

const FilterBar = ({ onSearch, onExport }) => {
    return (
        <div className="flex justify-between items-center mb-6">
            {/* Search Input */}
            <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" size={18} />
                <input
                    type="text"
                    placeholder="Search Cardholder, Door, or Location..."
                    className="glass-input w-full pl-10"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>

            {/* Actions */}
            <div className="flex gap-4">
                {/* Date Range Picker Placeholder */}
                <select className="glass-input cursor-pointer">
                    <option>Last 24 Hours</option>
                    <option>Last 7 Days</option>
                    <option>Custom Range</option>
                </select>

                <button onClick={onExport} className="primary flex items-center gap-2">
                    <Download size={18} />
                    Export Report
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
