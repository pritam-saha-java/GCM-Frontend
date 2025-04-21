import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getUserPackages } from "../../../api/packages";

export default function MyPackages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await getUserPackages();
        setPackages(response);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-white p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-cyan-400">My Packages</h1>
        <div className="mt-1 w-24 h-1 bg-cyan-500 rounded-full"></div>
      </div>

      {/* Package Table */}
      <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl shadow-lg overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-cyan-600/30 text-cyan-200 text-sm">
              <th className="p-4 text-left">TXID | Time</th>
              <th className="p-4 text-left">Package</th>
              <th className="p-4 text-left">Total Profit</th>
              <th className="p-4 text-left">Contract Term</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Next Pay</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, index) => (
              <tr
                key={index}
                className="hover:bg-[#29294b]/60 transition border-b border-gray-700 text-sm"
              >
                <td className="p-4">
                  <div className="font-medium text-cyan-300">{pkg.txId}</div>
                  <div className="text-gray-400 text-xs">{pkg.purchaseTime}</div>
                </td>
                <td className="p-4">{pkg.packageName}</td>
                <td className="p-4 text-green-400">USD {pkg.totalProfit}</td>
                <td className="p-4">{pkg.contactTerm} Days</td>
                <td className="p-4 text-cyan-200">USD {pkg.amount}</td>
                <td className="p-4 text-yellow-300">{pkg.nextPay}</td>
              </tr>
            ))}
            {packages.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-400">
                  No packages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
