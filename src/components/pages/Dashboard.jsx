import { Copy, DollarSign, TrendingUp, Percent, ShoppingCart, Timer, List, ArrowDown, ArrowUp, X } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [expandedStat, setExpandedStat] = useState(null);

  const stats = [
    { 
      title: "Available Balance", 
      value: "$1,250.00", 
      icon: <DollarSign className="text-cyan-400" size={20} />,
      viewAll: "/balance", // Regular link for Available Balance
      details: [] // Empty details - won't be used
    },
    { 
      title: "Total Profit", 
      value: "$3,420.50", 
      icon: <TrendingUp className="text-cyan-400" size={20} />,
      details: [
        { label: "Today", value: "$120.50" },
        { label: "This Week", value: "$850.75" },
        { label: "This Month", value: "$1,525.25" },
        { label: "Last Month", value: "$1,895.25" }
      ]
    },
    { 
      title: "Total Commission", 
      value: "$1,200.00", 
      icon: <Percent className="text-cyan-400" size={20} />,
      details: [
        { label: "Referral", value: "$750.00" },
        { label: "Affiliate", value: "$325.00" },
        { label: "Promotion", value: "$125.00" }
      ]
    },
    { 
      title: "Active Orders", 
      value: "12", 
      icon: <ShoppingCart className="text-cyan-400" size={20} />,
      details: [
        { label: "BTC Mining", value: "5" },
        { label: "ETH Mining", value: "4" },
        { label: "LTC Mining", value: "3" }
      ]
    },
    { 
      title: "Expired Orders", 
      value: "5", 
      icon: <Timer className="text-cyan-400" size={20} />,
      details: [
        { label: "Last Week", value: "2" },
        { label: "Last Month", value: "3" },
        { label: "Renewable", value: "1" }
      ]
    },
    { 
      title: "Total Orders", 
      value: "42", 
      icon: <List className="text-cyan-400" size={20} />,
      details: [
        { label: "Completed", value: "25" },
        { label: "Active", value: "12" },
        { label: "Expired", value: "5" }
      ]
    },
    { 
      title: "Total Deposits", 
      value: "$6,000.00", 
      icon: <ArrowDown className="text-cyan-400" size={20} />,
      details: [
        { label: "Bitcoin", value: "$3,500.00" },
        { label: "Ethereum", value: "$1,500.00" },
        { label: "USDT", value: "$1,000.00" }
      ]
    },
    { 
      title: "Total Withdrawals", 
      value: "$2,800.00", 
      icon: <ArrowUp className="text-cyan-400" size={20} />,
      details: [
        { label: "Bitcoin", value: "$1,800.00" },
        { label: "Ethereum", value: "$600.00" },
        { label: "USDT", value: "$400.00" }
      ]
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleViewAll = (idx) => {
    if (stats[idx].title === "Available Balance") {
      // Don't expand for Available Balance
      return;
    }
    
    if (expandedStat === idx) {
      setExpandedStat(null); // Close if already open
    } else {
      setExpandedStat(idx); // Open the clicked one
    }
  };

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="space-y-4">
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
              <button 
                className="mt-4 text-xs text-blue-400 hover:underline hover:text-blue-300 transition"
                onClick={() => handleViewAll(idx)}
              >
                View All →
              </button>
            </div>
          ))}
        </div>
        
        {/* Expanded Details Bar */}
        {expandedStat !== null && (
          <div className="mt-6 bg-[#1a1a2f] border border-cyan-500/30 rounded-xl p-6 shadow-lg backdrop-blur-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-cyan-300 font-semibold text-lg">
                {stats[expandedStat].title} Details
              </h3>
              <button 
                onClick={() => setExpandedStat(null)} 
                className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-cyan-900/30"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats[expandedStat].details.map((detail, detailIdx) => (
                <div 
                  key={detailIdx} 
                  className="bg-[#1a1a2f]/80 border border-cyan-500/20 rounded-xl p-4 hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition"
                >
                  <h4 className="text-gray-400 text-sm mb-2">{detail.label}</h4>
                  <p className="text-cyan-300 text-lg font-medium">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
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