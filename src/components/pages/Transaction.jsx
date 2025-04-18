const mockTransactions = [
    {
      txid: "D202504161809167032658448",
      date: "2025-04-16 18:09:16",
      amount: "+10.00",
      balance: "10.00",
      walletType: "Register reward",
      currency: "USD",
    },
    {
      txid: "D202504161709167032658123",
      date: "2025-04-16 17:09:16",
      amount: "-25.00",
      balance: "300.00",
      walletType: "Deposit",
      currency: "USD",
    },
    {
      txid: "D202504151809167032657999",
      date: "2025-04-15 12:45:23",
      amount: "+100.00",
      balance: "325.00",
      walletType: "Referral Bonus",
      currency: "USD",
    },
  ];
  
  export default function Transactions() {
    return (
      <div className="space-y-6">
        <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4">Transaction History</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-300">
              <thead>
                <tr className="border-b border-gray-700 text-gray-500">
                  <th className="px-4 py-2">TXID</th>
                  <th className="px-4 py-2">Transacted</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Post Balance</th>
                  <th className="px-4 py-2">Wallet Type</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((tx, idx) => (
                  <tr key={idx} className="border-b border-gray-800 hover:bg-[#1e1e36]/40 transition">
                    <td className="px-4 py-2">{tx.txid}</td>
                    <td className="px-4 py-2">{tx.date}</td>
                    <td
                      className={`px-4 py-2 font-semibold ${
                        tx.amount.startsWith("+")
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {tx.currency} {tx.amount}
                    </td>
                    <td className="px-4 py-2 text-white">
                      {tx.currency} {tx.balance}
                    </td>
                    <td className="px-4 py-2 text-cyan-400">{tx.walletType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  