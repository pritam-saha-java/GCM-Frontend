import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  Wallet,
  ChevronDown,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const cryptoOptions = [
  { label: "Bitcoin (BTC)", value: "BTC", rate: 0.000011787 },
  { label: "Ethereum (ETH)", value: "ETH", rate: 0.00019 },
  { label: "USDT (TRC20)", value: "USDT", rate: 1 },
  { label: "Litecoin (LTC)", value: "LTC", rate: 0.003 },
];

export default function Deposit() {
  const [balance, setBalance] = useState(1250.0);
  const [method, setMethod] = useState(cryptoOptions[0]);
  const [amount, setAmount] = useState("");
  const [payable, setPayable] = useState("0.00");
  const [cryptoAmount, setCryptoAmount] = useState("0");
  const [loading, setLoading] = useState(false);

  const isValidAmount = () => {
    const amt = parseFloat(amount);
    return !isNaN(amt) && amt >= 100 && amt <= 9999999;
  };

  useEffect(() => {
    const amt = parseFloat(amount);
    if (isValidAmount()) {
      setPayable(amt.toFixed(2));
      setCryptoAmount((amt * method.rate).toFixed(8));
    } else {
      setPayable("0.00");
      setCryptoAmount("0");
    }
  }, [amount, method]);

  const handleSubmit = () => {
    if (!isValidAmount()) {
      toast.error("Amount must be between 100 and 9,999,999 USD.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Deposit submitted successfully!");
      setAmount(""); // Reset form
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Available Balance */}
      <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 shadow-lg flex items-center justify-between">
        <div>
          <h4 className="text-gray-400 text-sm">Available Balance</h4>
          <p className="text-2xl font-bold text-cyan-300">${balance.toFixed(2)}</p>
        </div>
        <Wallet className="text-cyan-400" size={32} />
      </div>

      {/* Deposit Form */}
      <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 shadow-lg space-y-6">
        {/* Method Selector */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Deposit Method</label>
          <div className="relative">
            <select
              className="w-full bg-[#0f0f1c] border border-cyan-500/30 rounded-lg px-4 py-2 pr-10 text-white appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500"
              value={method.value}
              onChange={(e) =>
                setMethod(cryptoOptions.find((coin) => coin.value === e.target.value))
              }
            >
              {cryptoOptions.map((coin) => (
                <option key={coin.value} value={coin.value}>
                  {coin.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 text-cyan-400 pointer-events-none" size={18} />
          </div>
        </div>

        {/* Amount Field */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Enter Amount (USD)</label>
          <input
            type="number"
            min="100"
            className="w-full bg-[#0f0f1c] border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
            placeholder="e.g., 500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Info Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
          <div>
            <span className="block text-gray-500">Limit</span>
            <span>100.00 USD - 9,999,999.00 USD</span>
          </div>
          <div>
            <span className="block text-gray-500">Handling Fee</span>
            <span>0.00%</span>
          </div>
          <div>
            <span className="block text-gray-500">Payable</span>
            <span>{payable} USD</span>
          </div>
          <div>
            <span className="block text-gray-500">Conversion Rate</span>
            <span>1 USD ≈ {method.rate} {method.value}</span>
          </div>
          <div>
            <span className="block text-gray-500">Payable Amount</span>
            <span>{cryptoAmount} {method.value}</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          className={`w-full mt-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center ${
            isValidAmount()
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90"
              : "bg-gray-600/50 cursor-not-allowed text-gray-400"
          }`}
          onClick={handleSubmit}
          disabled={!isValidAmount() || loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin" size={18} /> Submitting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} /> Submit Deposit
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
