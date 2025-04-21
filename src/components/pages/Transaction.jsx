import { useEffect, useState } from "react";
import { getUserTransactions } from "../../api/userService";
export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getUserTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-4 sm:p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Transaction History</h3>

        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : transactions.length === 0 ? (
          <p className="text-gray-400">No transactions found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-300">
              <thead>
                <tr className="border-b border-gray-700 text-gray-500">
                  <th className="px-4 py-2 whitespace-nowrap">TXID</th>
                  <th className="px-4 py-2 whitespace-nowrap">Transacted</th>
                  <th className="px-4 py-2 whitespace-nowrap">Amount</th>
                  <th className="px-4 py-2 whitespace-nowrap">Wallet Type</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-800 hover:bg-[#1e1e36]/40 transition"
                  >
                    <td className="px-4 py-2">{tx.txid}</td>
                    <td className="px-4 py-2">{tx.date}</td>
                    <td
                      className={`px-4 py-2 font-semibold ${
                        tx.amount > 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      USD {tx.amount > 0 ? `${tx.amount}` : tx.amount}
                    </td>
                    <td className="px-4 py-2 text-cyan-400">{tx.walletType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
