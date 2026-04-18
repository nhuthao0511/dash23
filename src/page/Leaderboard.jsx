import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

const Leaderboard = () => {
  const topTraders = [
    { rank: 1, name: "Alex Rivera", profit: "$120,450", roi: "+245%", winRate: "78%" },
    { rank: 2, name: "Sarah Chen", profit: "$98,200", roi: "+180%", winRate: "72%" },
    { rank: 3, name: "Marcus Vane", profit: "$85,000", roi: "+165%", winRate: "69%" },
  ];

  return (
    <div className="flex-1 animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white mb-1">Leaderboard</h1>
        <p className="text-gray-500 text-sm">Top performing traders in the community.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {topTraders.map((trader) => (
          <div key={trader.rank} className="bg-[#141414] p-6 rounded-[24px] border border-gray-800/50 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-gray-800">
              {trader.rank === 1 && <Trophy size={48} className="text-yellow-500/10" />}
            </div>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 
              ${trader.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' : 'bg-gray-800 text-gray-400'}`}>
              <span className="font-bold">#{trader.rank}</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-1">{trader.name}</h3>
            <div className="flex justify-between mt-4">
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-bold">Total Profit</p>
                <p className="text-green-500 font-bold">{trader.profit}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-[10px] uppercase font-bold">ROI</p>
                <p className="text-white font-bold">{trader.roi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;