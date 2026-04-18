import React from 'react';
import { Landmark, Plus, Copy, ExternalLink, Zap } from 'lucide-react';

const Assets = () => {
  const accounts = [
    { id: "MT5-998210", broker: "Fundpip Server", type: "Challenge", balance: "$50,000.00", status: "Active" },
    { id: "MT5-445120", broker: "Fundpip Server", type: "Evaluation", balance: "$10,000.00", status: "Failed" },
  ];

  return (
    <div className="flex-1 animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Trading Assets</h1>
          <p className="text-gray-500 text-sm">Manage your trading accounts and credentials.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
          <Plus size={18} /> Add New Account
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {accounts.map((acc, idx) => (
          <div key={idx} className="bg-[#141414] rounded-[24px] p-8 border border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-gray-800">
                <Landmark className="text-indigo-500" size={32} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-white font-bold text-lg">{acc.id}</h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${acc.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {acc.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{acc.broker} • {acc.type}</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Current Balance</p>
              <h2 className="text-white text-2xl font-black">{acc.balance}</h2>
            </div>

            <div className="flex gap-3">
              <button className="p-3 bg-[#1a1a1a] text-gray-400 rounded-xl hover:text-white transition-colors">
                <Copy size={18} />
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all border border-white/5">
                Trading Terminal
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;