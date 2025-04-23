import {
  Copy,
  DollarSign,
  TrendingUp,
  Percent,
  ShoppingCart,
  Timer,
  List,
  ArrowDown,
  ArrowUp,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { getUserStats } from "../../api/userService";
import { toast } from "react-hot-toast";

export default function Dashboard() {
  const [expandedStat, setExpandedStat] = useState(null);
  const [userStats, setUserStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getUserStats();
        setUserStats(data);
      } catch (err) {
        console.error("Failed to fetch user stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const stats = [
    {
      title: "Available Balance",
      value: userStats?.availableBalance || "$0.00",
      icon: <DollarSign className="text-cyan-400" size={20} />,
    },
    {
      title: "Total Profit",
      value: userStats?.totalProfit || "$0.00",
      icon: <TrendingUp className="text-cyan-400" size={20} />,
    },
    {
      title: "Total Commission",
      value: userStats?.totalCommission || "$0.00",
      icon: <Percent className="text-cyan-400" size={20} />,
    },
    {
      title: "Active Orders",
      value: userStats?.activeOrders || "0",
      icon: <ShoppingCart className="text-cyan-400" size={20} />,
    },
    {
      title: "Expired Orders",
      value: userStats?.expiredOrders || "0",
      icon: <Timer className="text-cyan-400" size={20} />,
    },
    {
      title: "Total Orders",
      value: userStats?.totalOrders || "0",
      icon: <List className="text-cyan-400" size={20} />,
    },
    {
      title: "Total Deposits",
      value: userStats?.totalDeposit || "$0.00",
      icon: <ArrowDown className="text-cyan-400" size={20} />,
    },
    {
      title: "Total Withdrawals",
      value: userStats?.totalWithdrawals || "$0.00",
      icon: <ArrowUp className="text-cyan-400" size={20} />,
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  if (loading) {
    return <div className="text-cyan-300">Loading dashboard...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-5 shadow-lg hover:shadow-cyan-500/10 transition"
              onClick={() => setExpandedStat(idx)}
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h4 className="text-gray-300 text-sm font-medium">
                  {item.title}
                </h4>
              </div>
              <p className="text-xl font-semibold text-cyan-300">{item.value}</p>
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
            <p className="text-gray-400">More details about {stats[expandedStat].title} can be shown here.</p>
          </div>
        )}
      </div>

      {/* User Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Username */}
        <div className="bg-[#1a1a2f]/70 p-5 rounded-2xl border border-cyan-500/20 backdrop-blur-md shadow-md">
          <h4 className="text-sm text-gray-400 mb-1">👤 Username</h4>
          <p className="text-lg font-medium text-cyan-300">
            {JSON.parse(localStorage.getItem("user"))?.username || "N/A"}
          </p>
        </div>

        {/* Referral Code */}
        <div className="bg-[#1a1a2f]/70 p-5 rounded-2xl border border-cyan-500/20 backdrop-blur-md shadow-md relative">
          <h4 className="text-sm text-gray-400 mb-1">🧾 Referral Code</h4>
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-cyan-300">
              {userStats?.referralCode || "N/A"}
            </p>
            <button
              onClick={() => copyToClipboard(userStats?.referralCode || "")}
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
              {userStats?.referralCode
                ? `https://gocloudmining.com/register?ref=${userStats.referralCode}`
                : "N/A"}
            </p>
            {userStats?.referralCode && (
              <button
                onClick={() =>
                  copyToClipboard(
                    `https://gocloudmining.com/ref/${userStats.referralCode}`
                  )
                }
                className="text-cyan-400 hover:text-white transition"
                title="Copy Link"
              >
                <Copy size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
