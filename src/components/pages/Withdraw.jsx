export default function Deposite() {
    return (
      <div className="max-w-xl mx-auto mt-10 bg-[#1a1a2f]/70 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-cyan-500/20">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">💰 Make a Deposit</h2>
  
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Select Currency</label>
            <select className="w-full p-3 rounded-lg bg-[#0f0f1c] text-white border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <option>USDT (TRC20)</option>
              <option>BTC</option>
              <option>ETH</option>
              <option>BNB</option>
            </select>
          </div>
  
          <div>
            <label className="block mb-1 text-sm text-gray-300">Enter Amount</label>
            <input
              type="number"
              className="w-full p-3 rounded-lg bg-[#0f0f1c] text-white border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="0.00"
            />
          </div>
  
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] hover:shadow-lg transition duration-200"
            >
              🚀 Deposit Now
            </button>
          </div>
        </form>
  
        <p className="text-xs text-gray-400 mt-4 text-center">
          Your deposit will be processed within 5-10 minutes. Double-check your wallet address!
        </p>
      </div>
    );
  }
  