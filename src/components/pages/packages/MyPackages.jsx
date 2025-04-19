import { useState } from 'react';
import { Bell, User, ChevronLeft, ChevronRight, Wallet, LogOut, Lock } from 'lucide-react';

export default function MyPackages() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [packages] = useState([
    {
      txId: 'B20250419052135',
      extraId: '453490359',
      dateTime: '2025-04-19 08:52:13',
      package: '(Daily Sign-in Rewards) No.192',
      return: 'USD 0.6000',
      totalProfit: 'USD 0.6000',
      contractTerm: '1 Days',
      amount: '10.00',
      nextPay: '17:27:11'
    }
  ]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      {/* Notification bar */}
      <div className="bg-gray-800 text-amber-400 text-sm p-2 text-right">
        You have new news, click here to view
      </div>
      
      {/* Header */}
      <header className="bg-gray-800 p-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-white">My Packages</h1>
        <div className="relative">
          <button 
            className="p-2 text-white hover:bg-gray-700 rounded-full"
            onClick={toggleDropdown}
          >
            <User size={24} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <a href="#wallet" className="flex items-center px-4 py-3 hover:bg-black text-gray-800 hover:text-white border-b">
                  <Wallet className="mr-2" size={18} />
                  <span>Wallet Address</span>
                </a>
                <a href="#login" className="flex items-center px-4 py-3 hover:bg-black text-gray-800 hover:text-white border-b">
                  <Lock className="mr-2" size={18} />
                  <span>Login Password</span>
                </a>
                <a href="#payment" className="flex items-center px-4 py-3 hover:bg-black text-gray-800 hover:text-white border-b">
                  <Lock className="mr-2" size={18} />
                  <span>Payment Password</span>
                </a>
                <a href="#logout" className="flex items-center px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white">
                  <LogOut className="mr-2" size={18} />
                  <span>Logout</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow p-4">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {/* Table header */}
            <thead>
              <tr className="bg-cyan-500 text-white">
                <th className="p-3 text-left">TXID | Time</th>
                <th className="p-3 text-left">Package</th>
                <th className="p-3 text-left">Return</th>
                <th className="p-3 text-left">Total Profit</th>
                <th className="p-3 text-left">Contract Term</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">View Detail</th>
                <th className="p-3 text-left">Next pay</th>
              </tr>
            </thead>
            
            {/* Table body */}
            <tbody>
              {packages.map((pkg, index) => (
                <tr key={index} className="bg-black border-b text-white">
                  <td className="p-3">
                    <div className="font-medium">{pkg.txId}</div>
                    <div className="text-sm">{pkg.extraId}</div>
                    <div className="text-sm">{pkg.dateTime}</div>
                  </td>
                  <td className="p-3">{pkg.package}</td>
                  <td className="p-3">{pkg.return}</td>
                  <td className="p-3">{pkg.totalProfit}</td>
                  <td className="p-3">{pkg.contractTerm}</td>
                  <td className="p-3">{pkg.amount}</td>
                  <td className="p-3">
                    <button className="text-blue-400 hover:underline">
                      View All
                    </button>
                  </td>
                  <td className="p-3">{pkg.nextPay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <nav className="flex items-center space-x-1">
            <button className="p-2 rounded-md text-white hover:bg-black">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 h-8 w-8 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md flex items-center justify-center">
              1
            </button>
            <button className="p-2 rounded-md text-white hover:bg-black">
              <ChevronRight size={20} />
            </button>
          </nav>
        </div>
      </main>
    </div>
  );
}