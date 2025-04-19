import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  Wallet,
  ChevronDown,
  CheckCircle2,
  Loader2,
  Copy,
  CheckCheck,
  UploadCloud,
} from "lucide-react";
import { getUserBalance } from "../../api/userService";
import { getAllCoins, submitDeposit, getUserHistoricalDeposits } from "../../api/depositeService";

export default function Deposit() {
  const [balance, setBalance] = useState(0);
  const [coinOptions, setCoinOptions] = useState([]);
  const [method, setMethod] = useState(null);
  const [amount, setAmount] = useState("");
  const [payable, setPayable] = useState("0.00");
  const [cryptoAmount, setCryptoAmount] = useState("0");
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const [confirmationData, setConfirmationData] = useState(null);
  const [screenshotFile, setScreenshotFile] = useState(null);
  const [depositHistory, setDepositHistory] = useState([]);


  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const data = await getUserBalance();
        setBalance(data.balance);
      } catch (err) {
        toast.error("Failed to fetch balance");
      }
    };

    const fetchAllCoins = async () => {
      try {
        const data = await getAllCoins();
        setCoinOptions(data);
        setMethod(data[0]);
      } catch (err) {
        toast.error("Failed to fetch coin data");
      }
    };

    const fetchDepositHistory = async () => {
      try {
        const data = await getUserHistoricalDeposits();
        setDepositHistory(data);
      } catch (err) {
        toast.error("Failed to fetch coin data");
      }
    };

    fetchBalance();
    fetchAllCoins();
    fetchDepositHistory();
  }, []);

  const isValidAmount = () => {
    const amt = parseFloat(amount);
    return !isNaN(amt) && amt >= 100 && amt <= 9999999;
  };

  useEffect(() => {
    const amt = parseFloat(amount);
    if (isValidAmount() && method) {
      setPayable(amt.toFixed(2));
      setCryptoAmount((amt / method.conversionRate).toFixed(8));
    } else {
      setPayable("0.00");
      setCryptoAmount("0");
    }
  }, [amount, method]);

  const handleCopy = () => {
    navigator.clipboard.writeText(method.adminWalletAddress);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 1500);
  };

  const handleSubmit = () => {
    setConfirmationData({
      usdAmount: parseFloat(amount).toFixed(2),
      cryptoAmount,
      coinName: method.coinName,
      walletAddress: method.walletAddress,
      coinType: method.coinName,
    });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowConfirmation(true);
    }, 1000);
  };

  const handleScreenshotUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
      setScreenshotFile(file);
    }
  };
  

  const handleFinalSubmit = async () => {
    if (!screenshotFile) {
      toast.error("Please upload a payment screenshot.");
      return;
    }
  
    const formData = new FormData();
    formData.append("amount", cryptoAmount);
    formData.append("usdAmount", confirmationData.usdAmount);
    formData.append("coinType", confirmationData.coinType);
    formData.append("screenshot", screenshotFile);
  
    try {
      setLoading(true);
      await submitDeposit(formData);
      toast.success("Deposit submitted successfully!");
      setLoading(false);
      setAmount("");
      setConfirmationData(null);
      setScreenshotFile(null);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };
  

  if (showConfirmation && method) {
    return (
      <div className="space-y-6">
        <Toaster position="top-right" />
        <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 shadow-lg space-y-4">
          <h3 className="text-lg font-semibold text-cyan-300">Deposit Confirmation</h3>
          <p className="text-gray-300">
            You have requested <strong className="text-cyan-400">${payable}</strong>, please pay{" "}
            <strong className="text-cyan-400">{cryptoAmount} {method.coinName.split(" ").pop()}</strong> for successful payment.
          </p>
          <p className="text-sm text-gray-400">
            After the payment is successful, save the screenshot and upload the screenshot as prompted.
          </p>

          <div className="text-sm space-y-2">
            <div className="text-gray-400">Wallet Address</div>
            <div className="flex items-center justify-between bg-[#0f0f1c] border border-cyan-500/30 px-4 py-2 rounded-lg text-white">
              <span className="truncate">{method.adminWalletAddress}</span>
              <button onClick={handleCopy}>
                {copySuccess ? (
                  <CheckCheck className="text-green-400" size={18} />
                ) : (
                  <Copy className="text-cyan-400" size={18} />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">Upload transfer screenshot</label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-300 bg-[#0f0f1c] border border-cyan-500/30 rounded-lg px-4 py-2"
              onChange={handleScreenshotUpload}
            />
            <p className="text-xs text-gray-500">
              The screenshot must contain the transaction hash. If unclear or wrong, the recharge will not be completed.
            </p>
          </div>

          <button
            className={`w-full mt-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center ${
              screenshot
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90"
                : "bg-gray-600/50 cursor-not-allowed text-gray-400"
            }`}
            onClick={handleFinalSubmit}
            disabled={!screenshot}
          >
            <UploadCloud className="mr-2" size={18} /> Submit Payment
          </button>
        </div>
      </div>
    );
  }

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
              value={method?.id || ""}
              onChange={(e) =>
                setMethod(coinOptions.find((coin) => coin.id === parseInt(e.target.value)))
              }
            >
              {coinOptions.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.coinName}
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
        {method && (
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
              <span>1 USD ≈ {(method.conversionRate)} {method.coinName.split(" ").pop()}</span>
            </div>
            <div>
              <span className="block text-gray-500">Payable Amount</span>
              <span>{cryptoAmount} {method.coinName.split(" ").pop()}</span>
            </div>
          </div>
        )}

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

      <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Deposit History</h3>
        <div className="overflow-auto">
          <table className="min-w-full text-sm text-left text-gray-400">
            <thead>
              <tr className="border-b border-gray-700 text-gray-500">
                <th className="px-4 py-2">TXID</th>
                <th className="px-4 py-2">Deposit Method</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Coins</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {depositHistory.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-800 hover:bg-[#1e1e36]/40 transition">
                  <td className="px-4 py-2">{item.txId}</td>
                  <td className="px-4 py-2">{item.coinType}</td>
                  <td className="px-4 py-2">${item.usdAmount}</td>
                  <td className="px-4 py-2">{item.amount}</td>
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
