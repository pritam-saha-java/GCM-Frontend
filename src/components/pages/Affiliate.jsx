import { useState } from "react";
import { Copy } from "lucide-react";
import { toast } from "react-hot-toast";

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast.success("Copied to clipboard!");
};

const mockPartners = ["john_doe", "crypto_master", "eth_legend"];
const levelData = [
  {
    date: "2025-04-15",
    from: "john_doe",
    level: "1",
    amount: "$50",
    type: "Referral Bonus",
  },
  {
    date: "2025-04-16",
    from: "crypto_master",
    level: "2",
    amount: "$30",
    type: "Commission",
  },
];

export default function Affiliate() {
  const email = "user@example.com";
  const username = "sfegeg";
  const code = "3356697";
  const link = `https://bchmimer.info//#/register/${code}`;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Affiliate Info */}
        <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 p-6 rounded-2xl shadow-lg space-y-4">
          <h3 className="text-xl font-bold text-white mb-2">Affiliate Program</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Your Email:</span>
              <span className="text-white">{email}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-400">Your Username:</span>
              <span className="text-white">{username}</span>
              <button onClick={() => copyToClipboard(username)}>
                <Copy size={16} className="text-cyan-400 hover:text-cyan-300" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-400">Your Referral Code:</span>
              <span className="text-white">{code}</span>
              <button onClick={() => copyToClipboard(code)}>
                <Copy size={16} className="text-cyan-400 hover:text-cyan-300" />
              </button>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-gray-400">Your Affiliate Link:</span>
              <div className="flex-1 break-all text-cyan-400">
                {link}
                <button onClick={() => copyToClipboard(link)} className="ml-2">
                  <Copy size={16} className="inline text-cyan-400 hover:text-cyan-300" />
                </button>
              </div>
            </div>
          </div>

          <p className="mt-4 text-gray-300 text-sm">
            <span className="font-semibold text-cyan-400">Earn Bonus Shares</span><br />
            As an affiliate partner of our website, you have the opportunity to earn money by sharing your referral link with friends and family. Even if you do not invest, you can still start earning up to 3% of each purchase made by the users you refer.
            <br /><br />
            Simply copy and share your unique referral link with your friends, and watch your referral rewards grow.
          </p>

          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md text-sm text-white hover:opacity-90 transition">
            Learn More
          </button>
        </div>

        {/* Partners List */}
        <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-white mb-2">Partners List</h3>
          <p className="text-sm text-gray-400 mb-4">Total Partners: <span className="text-cyan-400 font-semibold">{mockPartners.length}</span></p>
          <ul className="space-y-2">
            {mockPartners.map((user, index) => (
              <li key={index} className="text-white bg-[#22223a]/50 rounded-md px-3 py-2 text-sm shadow-sm">
                {user}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Level Table */}
      <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Progress Level</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-300">
            <thead>
              <tr className="border-b border-gray-700 text-gray-500">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">From</th>
                <th className="px-4 py-2">Level</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {levelData.map((item, i) => (
                <tr key={i} className="border-b border-gray-800 hover:bg-[#1e1e36]/40 transition">
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2 text-cyan-400">{item.from}</td>
                  <td className="px-4 py-2">{item.level}</td>
                  <td className="px-4 py-2 text-green-400">{item.amount}</td>
                  <td className="px-4 py-2 text-white">{item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
