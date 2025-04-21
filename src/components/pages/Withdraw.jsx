import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Wallet, ChevronDown, Loader2, CheckCircle2 } from "lucide-react";
import { getUserBalance } from "../../api/userService";
import { getWithdrawMethods, submitWithdraw, getUserHistoricalWithdraws} from "../../api/withdraw";

export default function Withdraw() {
  const [balance, setBalance] = useState(0.0);
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");
  const [receivable, setReceivable] = useState("0");
  const [loading, setLoading] = useState(false);
  const [methods, setMethods] = useState([]);
  const [method, setMethod] = useState(null);
  const [loadingMethods, setLoadingMethods] = useState(true);
  const [withdrawHistory, setWithdrawHistory] = useState([]);

  const isValid = () => {
    const amt = parseFloat(amount);
    return amt > 99 && amt <= balance && password.length > 3;
  };

  useEffect(() => {
    const amt = parseFloat(amount);
    if (!isNaN(amt)) {
      const receivableAmt = amt * method.rate;
      setReceivable(receivableAmt.toFixed(8));
    } else {
      setReceivable("0");
    }
  }, [amount, method]);

  const handleSubmit = async () => {
    if (!isValid()) {
      if (parseFloat(amount) < 100) {
        toast.error("Minimum withdrawal amount is $100.");
      } else {
        toast.error("Enter a valid amount and password.");
      }
      return;
    }
    
  
    setLoading(true);
  
    const formData = new FormData();
    formData.append("amountInUsd", amount);
    formData.append("withdrawalMethod", method.id);
    formData.append("paymentPassword", password);
    formData.append("receivablesInCoins", receivable);
  
    try {
      await submitWithdraw(formData);
      toast.success("Withdrawal submitted!");
      setAmount("");
      setPassword("");
    } catch (err) {
      toast.error(err.message || "Withdrawal failed.");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const data = await getUserBalance();
        setBalance(data.balance);
      } catch (err) {
        toast.error("Failed to fetch balance");
      }
    };

    const fetchMethods = async () => {
      try {
        const data = await getWithdrawMethods();
        setMethods(data);
        if (data.length > 0) setMethod(data[0]);
      } catch (err) {
        toast.error("Unable to fetch withdraw methods");
      } finally {
        setLoadingMethods(false);
      }
    };

    const fetchWithdrawHistory = async () => {
      try {
        const data = await getUserHistoricalWithdraws();
        setWithdrawHistory(data);
      } catch (err) {
        toast.error("Failed to fetch");
      }
    };

    fetchWithdrawHistory();
    fetchMethods();
    fetchBalance();
  }, []);

  useEffect(() => {
    const amt = parseFloat(amount);
    if (!isNaN(amt) && method) {
      const receivableAmt = amt * method.conversionRate;
      setReceivable(receivableAmt.toFixed(8));
    } else {
      setReceivable("0");
    }
  }, [amount, method]);

  const maskAddress = (address) => {
    if (address.length <= 6) return address;
    return `${address.slice(0, 3)}***${address.slice(-3)}`;
  };

  return (
    <div className="space-y-10">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Available Balance */}
      <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 shadow-lg flex items-center justify-between">
        <div>
          <h4 className="text-gray-400 text-sm">Available Balance</h4>
          <p className="text-2xl font-bold text-cyan-300">
            ${balance.toFixed(2)}
          </p>
        </div>
        <Wallet className="text-cyan-400" size={32} />
      </div>

      {/* Withdraw Form */}
      <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 shadow-lg space-y-6">
        {/* Method */}
        {!loadingMethods && method && (
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Withdrawal Method
            </label>
            <div className="relative">
              <select
                className="w-full bg-[#0f0f1c] border border-cyan-500/30 rounded-lg px-4 py-2 pr-10 text-white appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500"
                value={method.id}
                onChange={(e) =>
                  setMethod(
                    methods.find((m) => m.id === parseInt(e.target.value))
                  )
                }
              >
                {methods.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.coinName} - {maskAddress(m.walletAddress)}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-cyan-400 pointer-events-none"
                size={18}
              />
            </div>
          </div>
        )}

        {/* Amount */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Enter Amount (USD)
          </label>
          <input
            type="number"
            className="w-full bg-[#0f0f1c] border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
            placeholder="e.g., 500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Payment Password */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Payment Password
          </label>
          <input
            type="password"
            className="w-full bg-[#0f0f1c] border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
            placeholder="Enter secure password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Info Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
          <div>
            <span className="block text-gray-500">Handling Fee</span>
            <span>0 USD</span>
          </div>
          <div>
            <span className="block text-gray-500">Conversion Rate</span>
            <span>
              1 USD ≈ {method?.conversionRate.toFixed(9)} {method?.coinName}
            </span>
          </div>
          <div>
            <span className="block text-gray-500">Receivable</span>
            <span>
              {receivable} {method?.coinName}
            </span>
          </div>
        </div>

        {/* Submit */}
        <button
          className={`w-full mt-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center ${
            isValid()
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90"
              : "bg-gray-600/50 cursor-not-allowed text-gray-400"
          }`}
          onClick={handleSubmit}
          disabled={!isValid() || loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin" size={18} /> Submitting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} /> Submit Withdrawal
            </span>
          )}
        </button>
      </div>

      {/* Withdraw History */}
      <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-4">
          Withdrawal History
        </h3>
        <div className="overflow-auto">
          <table className="min-w-full text-sm text-left text-gray-400">
            <thead>
              <tr className="border-b border-gray-700 text-gray-500">
                <th className="px-4 py-2">TXID</th>
                <th className="px-4 py-2">Wallet Address</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {withdrawHistory.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-800 hover:bg-[#1e1e36]/40 transition"
                >
                  <td className="px-4 py-2">{item.txId}</td>
                  <td className="px-4 py-2">{item.walletAddress}</td>
                  <td className="px-4 py-2">${item.amount}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.status === "Approved"
                          ? "bg-green-600/20 text-green-400"
                          : "bg-yellow-600/20 text-yellow-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
