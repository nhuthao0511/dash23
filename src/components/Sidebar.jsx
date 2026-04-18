import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Wallet, Trophy, ClipboardList, 
  ShoppingCart, Users, Landmark, Settings, Rocket 
} from 'lucide-react';

const SidebarItem = ({ to, icon: Icon, label }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => `
      flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
      ${isActive 
        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
        : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-gray-200'}
    `}
  >
    <Icon size={20} />
    <span className="font-medium text-sm">{label}</span>
  </NavLink>
);

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#0a0a0a] border-r border-gray-800 flex flex-col p-6 overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="bg-indigo-600 p-1.5 rounded-lg">
          <Rocket className="text-white" size={20} fill="currentColor" />
        </div>
        <span className="text-xl font-bold text-white tracking-tight">FUNDPIP</span>
      </div>

      {/* Main Menu */}
      <div className="space-y-1 mb-8">
        <SidebarItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
        <SidebarItem to="/payout" icon={Wallet} label="Payout" />
        <SidebarItem to="/leaderboard" icon={Trophy} label="Leaderboard" />
        <SidebarItem to="/order-list" icon={ClipboardList} label="Order List" />
      </div>

      <div className="space-y-1">
        <SidebarItem to="/buy" icon={ShoppingCart} label="Buy Challenge" />
        <SidebarItem to="/affiliate" icon={Users} label="Affiliate" />
        <SidebarItem to="/assets" icon={Landmark} label="Assets" />
        <SidebarItem to="/settings" icon={Settings} label="Settings" />
      </div>

      {/* Pro Plan Card */}
      <div className="mt-auto bg-[#141414] rounded-2xl p-4 border border-gray-800/50">
        <div className="bg-indigo-600/20 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
          <Rocket size={16} className="text-indigo-500" />
        </div>
        <h4 className="text-white text-sm font-bold mb-1">Pro Plan</h4>
        <p className="text-gray-500 text-[11px] mb-4 leading-relaxed">
          Unlock advanced analytics and priority payouts.
        </p>
        <button className="w-full bg-white text-black text-xs font-bold py-2.5 rounded-xl hover:bg-gray-200 transition-colors uppercase tracking-wider">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;