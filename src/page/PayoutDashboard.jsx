import React from 'react';
import { Search, Bell, Filter, Download, MoreHorizontal } from 'lucide-react';

const StatCard = ({ label, amount, iconColor, trend, trendValue }) => (
  <div className="bg-[#141414] p-6 rounded-[24px] border border-gray-800/50 flex-1">
    <div className="flex justify-between items-start mb-6">
      <div className={`w-12 h-12 rounded-2xl ${iconColor}`}></div>
      {trendValue && (
        <span className={`text-[11px] font-bold px-2 py-1 rounded-lg flex items-center gap-1 
          ${trend === 'up' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
          {trend === 'up' ? '↗' : '↘'} {trendValue}
        </span>
      )}
    </div>
    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">{label}</p>
    <h3 className="text-white text-2xl font-bold">${amount}</h3>
  </div>
);

const PayoutDashboard = () => {
  const transactions = [
    { id: "#185941", date: "Nov 28, 2024", gross: "$40,000.00", net: "$20,000.00", stage: "Phase 02" },
    { id: "#185942", date: "Nov 29, 2024", gross: "$40,000.00", net: "$20,000.00", stage: "Phase 02" },
    { id: "#185943", date: "Nov 30, 2024", gross: "$40,000.00", net: "$20,000.00", stage: "Phase 01" },
  ];

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Payouts</h1>
          <p className="text-gray-500 text-sm">Manage and track your account withdrawals.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" placeholder="Search transactions..." 
              className="bg-[#141414] border-none rounded-xl py-2.5 pl-12 pr-4 text-sm text-gray-300 w-64 focus:ring-2 focus:ring-indigo-600 outline-none"
            />
          </div>
          <button className="bg-[#141414] p-2.5 rounded-xl text-gray-400 relative">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0a0a0a]"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-gray-800">
            <div className="text-right">
              <p className="text-white text-sm font-bold">Ryan Crawford</p>
              <p className="text-green-500 text-[10px] font-bold uppercase">Verified Trader</p>
            </div>
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="user" className="w-10 h-10 rounded-xl" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="flex gap-6 mb-10">
        <StatCard label="Total Balance" amount="4,500.00" iconColor="bg-indigo-500" trend="up" trendValue="12.5%" />
        <StatCard label="Available" amount="92.93" iconColor="bg-emerald-500" trend="down" trendValue="2.9%" />
        <StatCard label="Withdrawn" amount="837.92" iconColor="bg-orange-500" />
      </div>

      {/* Table Section */}
      <div className="bg-[#141414] rounded-[24px] border border-gray-800/50 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-white font-bold text-lg">Transaction History</h2>
            <span className="bg-indigo-500/20 text-indigo-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">3 Records</span>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-[#1f1f1f] text-gray-300 px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#252525]">
              <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 bg-[#1f1f1f] text-gray-300 px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#252525]">
              <Download size={16} /> Export
            </button>
          </div>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 text-[11px] uppercase tracking-widest border-b border-gray-800">
              <th className="pb-4 font-bold">ID</th>
              <th className="pb-4 font-bold">Date</th>
              <th className="pb-4 font-bold">Gross Amount</th>
              <th className="pb-4 font-bold text-white">Net Amount</th>
              <th className="pb-4 font-bold">Stage</th>
              <th className="pb-4 font-bold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {transactions.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-800/50 group hover:bg-white/[0.02]">
                <td className="py-6 text-gray-500 font-medium">{item.id}</td>
                <td className="py-6 text-white font-bold">{item.date}</td>
                <td className="py-6 text-gray-400 font-medium">{item.gross}</td>
                <td className="py-6 text-white font-bold">{item.net}</td>
                <td className="py-6">
                  <span className="bg-[#1f1f1f] text-gray-400 text-[10px] px-2 py-1 rounded-md font-bold">{item.stage}</span>
                </td>
                <td className="py-6">
                  <div className="flex justify-end items-center gap-3">
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold px-5 py-2 rounded-lg transition-colors uppercase tracking-wider shadow-lg shadow-indigo-600/20">
                      Withdraw
                    </button>
                    <button className="p-2 hover:bg-gray-800 rounded-lg text-gray-500 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayoutDashboard;