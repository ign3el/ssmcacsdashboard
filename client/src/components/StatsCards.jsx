import React from 'react';
import { ShieldCheck, ShieldAlert, Activity, User } from 'lucide-react';

const StatsCards = ({ data, employeeData = [] }) => {
    const totalEntries = data.length;
    const deniedCount = data.filter(d => !d.AccessGranted).length;
    const employeeCount = employeeData.length;
    const lastActive = data[0] ? new Date(data[0].EventTime).toLocaleTimeString() : 'N/A';

    const cards = [
        { title: 'Total Entries', value: totalEntries, icon: Activity, color: 'text-accent' },
        { title: 'Security Alerts', value: deniedCount, icon: ShieldAlert, color: 'text-danger' },
        { title: 'Registered Employees', value: employeeCount, icon: User, color: 'text-warning' },
        { title: 'Last Activity', value: lastActive, icon: ShieldCheck, color: 'text-success' },
    ];

    return (
        <div className="flex gap-4 mb-6">
            {cards.map((card, index) => (
                <div key={index} className="glass-card flex-1 flex items-center justify-between">
                    <div>
                        <p className="text-secondary text-sm">{card.title}</p>
                        <h3 className="text-xl mt-1">{card.value}</h3>
                    </div>
                    <card.icon className={`${card.color}`} size={24} />
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
