import React from 'react';
import { 
  TrendingUp, Users, Zap, ArrowUpRight, 
  ArrowDownRight, Activity, DollarSign 
} from 'lucide-react';

const Dashboard = () => {
  // Dữ liệu mẫu cho Dashboard
  const stats = [
    { label: "Equity", value: "$52,450.00", change: "+5.2%", isUp: true },
    { label: "Daily Profit", value: "$1,240.15", change: "+1.2%", isUp: true },
    { label: "Max Drawdown", value: "2.4%", change: "-0.5%", isUp: false },
    { label: "Win Rate", value: "68%", change: "+4%", isUp: true },
  ];

  const activeTrades = [
    { pair: "EUR/USD", type: "Buy", lot: "1.00", profit: "+$240.00", status: "Profit" },
    { pair: "XAU/USD", type: "Sell", lot: "0.50", profit: "-$120.00", status: "Loss" },
    { pair: "GBP/JPY", type: "Buy", lot: "2.00", profit: "+$580.00", status: "Profit" },
  ];

  return (
    <div className="flex-1 space-y-8 animate-in fade-in duration-700">
      {/* Welcome Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Ryan! 👋</h1>
          <p className="text-gray-500">Here's what's happening with your trading accounts today.</p>
        </div>
        <div className="bg-[#141414] px-4 py-2 rounded-xl border border-gray-800 text-sm text-gray-400 font-medium">
          Last update: <span className="text-white">Just now</span>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-[#141414] p-6 rounded-[24px] border border-gray-800/50 hover:border-indigo-500/50 transition-colors">
            <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              <div className={`flex items-center text-[11px] font-bold px-2 py-1 rounded-lg ${stat.isUp ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                {stat.isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 bg-[#141414] rounded-[32px] p-8 border border-gray-800/50 flex flex-col justify-between min-h-[400px]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <Activity className="text-indigo-500" size={20} /> Profit Growth
            </h3>
            <div className="flex bg-[#0a0a0a] p-1 rounded-xl">
              {['1D', '1W', '1M', 'ALL'].map(t => (
                <button key={t} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${t === '1W' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          
          {/* Giả lập biểu đồ bằng CSS đơn giản hoặc bạn có thể dùng Recharts/Chart.js vào đây */}
          <div className="flex-1 flex items-end gap-2 h-48 px-2">
            {[40, 70, 45, 90, 65, 80, 95, 70, 85, 100].map((h, i) => (
              <div 
                key={i} 
                style={{ height: `${h}%` }} 
                className="flex-1 bg-gradient-to-t from-indigo-600/10 to-indigo-500/80 rounded-t-lg transition-all hover:to-indigo-400"
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-gray-600 font-bold uppercase tracking-tighter">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Recent Activity / Active Trades */}
        <div className="bg-[#141414] rounded-[32px] p-8 border border-gray-800/50">
          <h3 className="text-white font-bold text-lg mb-6">Active Trades</h3>
          <div className="space-y-6">
            {activeTrades.map((trade, idx) => (
              <div key={idx} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${trade.type === 'Buy' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {trade.type[0]}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{trade.pair}</p>
                    <p className="text-gray-500 text-[10px] uppercase font-bold">{trade.lot} Lots</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-sm ${trade.status === 'Profit' ? 'text-green-500' : 'text-red-500'}`}>
                    {trade.profit}
                  </p>
                  <p className="text-gray-600 text-[10px] uppercase font-bold">Running</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-[#1f1f1f] text-gray-300 rounded-xl text-xs font-bold hover:bg-[#252525] transition-all">
            View All Positions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;