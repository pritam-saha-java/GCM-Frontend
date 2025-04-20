import React, { useState, useEffect } from 'react';
import { Wallet } from 'lucide-react';
import { getAllCoins, bindUserAccountToCurrency } from "../../../api/depositeService";
import toast from "react-hot-toast";

export default function WalletAddressPage() {
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [coinOptions, setCoinOptions] = useState([]);

  useEffect(() => {
    const fetchAllCoins = async () => {
      try {
        const data = await getAllCoins();
        setCoinOptions(data);
        setSelectedCurrency(data[0]);
      } catch (err) {
        toast.error("Failed to fetch coin data");
      }
    };
    fetchAllCoins();
  }, []);

  const toggleCurrencyDropdown = () => {
    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsCurrencyDropdownOpen(false);
  };

  const handleSubmit = async () => {
    
    if (!walletAddress.trim()) {
      toast.error("Wallet address is required");
      return;
    }

    if (!selectedCurrency || !selectedCurrency.id) {
      toast.error("Please select a currency");
      return;
    }


    const formData = new FormData();
    formData.append("coinsId", selectedCurrency.id);
    formData.append("walletAddress", walletAddress);

    try {
      await bindUserAccountToCurrency(formData);
      toast.success("Wallet address bound successfully");
      setWalletAddress('');
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white py-10 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-2 text-2xl font-bold mb-6">
          <Wallet className="text-cyan-400" />
          <span>Wallet Address</span>
        </div>

        {/* Card */}
        <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 shadow-lg space-y-6">
          {/* Dropdown */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Select Currency</label>
            <div className="relative">
              <div
                className="border border-gray-700 bg-[#12121f] hover:bg-[#1e1e36] rounded-lg p-3 cursor-pointer flex items-center justify-between"
                onClick={toggleCurrencyDropdown}
              >
                {selectedCurrency && (
                  <div className="flex items-center">
                    <span>{selectedCurrency.coinName}</span>
                  </div>
                )}
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {isCurrencyDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full bg-[#1e1e36] border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                  {coinOptions.map((coin) => (
                    <div
                      key={coin.id}
                      className="p-3 hover:bg-cyan-900/30 transition cursor-pointer flex items-center border-b border-gray-800"
                      onClick={() => selectCurrency(coin)}
                    >
                      <span>{coin.coinName}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Wallet Input */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Wallet Address</label>
            <input
              type="text"
              placeholder="Please enter your wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#12121f] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition shadow-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
