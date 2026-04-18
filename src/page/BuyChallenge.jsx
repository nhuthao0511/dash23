import React from 'react';
import { Zap, ShieldCheck, Target } from 'lucide-react';

const BuyChallenge = () => {
  const plans = [
    { name: "Starter", balance: "$10,000", price: "$99", features: ["1:100 Leverage", "5% Daily Drawdown", "8% Profit Target"] },
    { name: "Pro", balance: "$50,000", price: "$299", features: ["1:100 Leverage", "5% Daily Drawdown", "10% Profit Target"], popular: true },
    { name: "Elite", balance: "$100,000", price: "$499", features: ["1:100 Leverage", "6% Daily Drawdown", "12% Profit Target"] },
  ];

  return (
    <div className="flex-1">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Choose Your Challenge</h1>
        <p className="text-gray-500">Select a plan that fits your trading style and start earning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className={`bg-[#141414] rounded-[32px] p-8 border transition-all duration-300 hover:-translate-y-2
            ${plan.popular ? 'border-indigo-600 ring-1 ring-indigo-600' : 'border-gray-800'}`}>
            {plan.popular && <span className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</span>}
            <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold text-white mb-6">{plan.balance}</div>
            <div className="text-4xl font-black text-white mb-8">{plan.price}<span className="text-lg text-gray-500 font-normal">/one-time</span></div>
            
            <div className="space-y-4 mb-8">
              {plan.features.map(f => (
                <div key={f} className="flex items-center gap-3 text-sm text-gray-400">
                  <ShieldCheck size={16} className="text-indigo-500" /> {f}
                </div>
              ))}
            </div>
            
            <button className={`w-full py-4 rounded-2xl font-bold transition-all
              ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-white text-black hover:bg-gray-200'}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyChallenge;