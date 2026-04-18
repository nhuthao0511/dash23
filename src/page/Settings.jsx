import React from 'react';
import { User, Lock, Bell, ShieldCheck, Camera } from 'lucide-react';

const Settings = () => {
  return (
    <div className="flex-1 animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white mb-1">Settings</h1>
        <p className="text-gray-500 text-sm">Update your personal information and security settings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Side: Profile */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#141414] rounded-[32px] p-8 border border-gray-800/50">
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-800/50">
              <div className="relative group">
                <img src='./img/1.jpg' alt="Avatar" className="w-24 h-24 rounded-3xl object-cover ring-4 ring-indigo-500/20" />
                <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Ryan Crawford</h3>
                <p className="text-gray-500 text-sm">Verified Trader since Nov 2024</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] text-gray-500 uppercase font-bold tracking-widest px-1">Full Name</label>
                <input type="text" defaultValue="Ryan Crawford" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl py-3 px-4 text-white text-sm focus:border-indigo-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] text-gray-500 uppercase font-bold tracking-widest px-1">Email Address</label>
                <input type="email" defaultValue="ryan@example.com" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl py-3 px-4 text-white text-sm focus:border-indigo-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] text-gray-500 uppercase font-bold tracking-widest px-1">Country</label>
                <select className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl py-3 px-4 text-white text-sm focus:border-indigo-500 outline-none transition-all appearance-none">
                  <option>Vietnam</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>
            
            <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20">
              Save Changes
            </button>
          </div>
        </div>

        {/* Right Side: Quick Security */}
        <div className="space-y-6">
          <div className="bg-[#141414] rounded-[32px] p-6 border border-gray-800/50">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <ShieldCheck className="text-green-500" size={18} /> Security Status
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-[#0a0a0a] rounded-xl border border-gray-800">
                <div className="flex items-center gap-3">
                  <Lock size={16} className="text-gray-500" />
                  <span className="text-xs text-gray-300">2FA Authentication</span>
                </div>
                <div className="w-10 h-5 bg-indigo-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 px-1">Protect your account by adding an extra layer of security.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;