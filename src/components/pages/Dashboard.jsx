import { Copy, DollarSign, TrendingUp, Percent, ShoppingCart, Timer, List, ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const stats = [
    { title: "Available Balance", value: "$1,250.00", icon: <DollarSign className="text-cyan-400" size={20} /> },
    { title: "Total Profit", value: "$3,420.50", icon: <TrendingUp className="text-cyan-400" size={20} /> },
    { title: "Total Commission", value: "$1,200.00", icon: <Percent className="text-cyan-400" size={20} /> },
    { title: "Active Orders", value: "12", icon: <ShoppingCart className="text-cyan-400" size={20} /> },
    { title: "Expired Orders", value: "5", icon: <Timer className="text-cyan-400" size={20} /> },
    { title: "Total Orders", value: "42", icon: <List className="text-cyan-400" size={20} /> },
    { title: "Total Deposits", value: "$6,000.00", icon: <ArrowDown className="text-cyan-400" size={20} /> },
    { title: "Total Withdrawals", value: "$2,800.00", icon: <ArrowUp className="text-cyan-400" size={20} /> },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-5 shadow-lg hover:shadow-cyan-500/10 transition"
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h4 className="text-gray-300 text-sm font-medium">{item.title}</h4>
            </div>
            <p className="text-xl font-semibold text-cyan-300">{item.value}</p>
            <button className="mt-4 text-xs text-blue-400 hover:underline hover:text-blue-300 transition">
              View All →
            </button>
          </div>
        ))}
      </div>

      {/* User Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Username */}
        <div className="bg-[#1a1a2f]/70 p-5 rounded-2xl border border-cyan-500/20 backdrop-blur-md shadow-md">
          <h4 className="text-sm text-gray-400 mb-1">👤 Username</h4>
          <p className="text-lg font-medium text-cyan-300">cryptoKing42</p>
        </div>

        {/* Level */}
        <div className="bg-[#1a1a2f]/70 p-5 rounded-2xl border border-cyan-500/20 backdrop-blur-md shadow-md">
          <h4 className="text-sm text-gray-400 mb-1">🎖️ Level</h4>
          <p className="text-lg font-medium text-cyan-300">Pro Miner</p>
        </div>

        {/* Referral Code */}
        <div className="bg-[#1a1a2f]/70 p-5 rounded-2xl border border-cyan-500/20 backdrop-blur-md shadow-md relative">
          <h4 className="text-sm text-gray-400 mb-1">🧾 Referral Code</h4>
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-cyan-300">GOCLOUD42</p>
            <button
              onClick={() => copyToClipboard("GOCLOUD42")}
              className="text-cyan-400 hover:text-white transition"
              title="Copy Code"
            >
              <Copy size={16} />
            </button>
          </div>
        </div>

        {/* Affiliate Link */}
        <div className="bg-[#1a1a2f]/70 p-5 rounded-2xl border border-cyan-500/20 backdrop-blur-md shadow-md relative">
          <h4 className="text-sm text-gray-400 mb-1">🔗 Affiliate Link</h4>
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-medium text-blue-400 break-all">
              https://gocloudmining.com/ref/GOCLOUD42
            </p>
            <button
              onClick={() => copyToClipboard("https://gocloudmining.com/ref/GOCLOUD42")}
              className="text-cyan-400 hover:text-white transition"
              title="Copy Link"
            >
              <Copy size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
