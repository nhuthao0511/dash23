const Affiliate = () => {
  return (
    <div className="flex-1 p-8">
      <h1 className="text-2xl font-bold text-white mb-6">Affiliate Program</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 bg-[#141414] p-8 rounded-3xl border border-gray-800">
          <h2 className="text-white font-bold mb-4">Your Referral Link</h2>
          <div className="flex gap-4">
            <input 
              readOnly 
              value="https://fundpip.com/ref/ryan123" 
              className="flex-1 bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 text-gray-400 text-sm"
            />
            <button className="bg-purple-600 px-6 py-3 rounded-xl text-white font-bold hover:bg-purple-700 transition-colors">
              Copy Link
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-3xl text-white">
          <p className="text-purple-100 text-sm mb-1 uppercase font-bold tracking-widest">Commission</p>
          <h2 className="text-4xl font-black mb-4">15%</h2>
          <p className="text-sm text-purple-200">Earn from every challenge purchase made by your referrals.</p>
        </div>
      </div>
    </div>
  );
};