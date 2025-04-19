import React, { useState } from 'react';
import { User, Wallet, Lock, LogOut } from 'lucide-react';

export default function WalletAddressPage() {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USDT-TRC20');
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleCurrencyDropdown = () => {
    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsCurrencyDropdownOpen(false);
  };

  const currencies = [
    { symbol: 'USDT-TRC20', icon: 'T', color: 'bg-green-500' },
    { symbol: 'USDT-ERC20', icon: 'T', color: 'bg-green-500' },
    { symbol: 'USDC', icon: 'C', color: 'bg-blue-500' },
    { symbol: 'BTC', icon: 'B', color: 'bg-orange-500' },
    { symbol: 'ETH', icon: 'E', color: 'bg-blue-400' },
    { symbol: 'LTC', icon: 'L', color: 'bg-gray-400' },
    { symbol: 'XRP', icon: 'X', color: 'bg-gray-500' },
    { symbol: 'SOL', icon: 'S', color: 'bg-purple-500' },
    { symbol: 'DOGE', icon: 'D', color: 'bg-yellow-500' },
    { symbol: 'BCH', icon: 'B', color: 'bg-green-400' }
  ];

  // Menu items with their IDs
  const menuItems = [
    { id: 'wallet', label: 'Wallet Address', icon: <Wallet size={18} /> },
    { id: 'login', label: 'Login Password', icon: <Lock size={18} /> },
    { id: 'payment', label: 'Payment Password', icon: <Lock size={18} /> },
    { id: 'logout', label: 'Logout', icon: <LogOut size={18} />, special: true }
  ];

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-white">Wallet Address</h1>
        <div className="relative">
          <button 
            className="p-2 text-white hover:bg-gray-700 rounded-full"
            onClick={toggleUserDropdown}
          >
            <User size={24} />
          </button>
          
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                {menuItems.map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    className={`
                      flex items-center px-4 py-3 transition-colors duration-150
                      ${item.special ? 'bg-cyan-500 text-white hover:bg-cyan-600' : 'text-gray-800 hover:bg-black hover:text-white border-b'}
                      ${hoveredItem === item.id ? (item.special ? 'bg-cyan-600 text-white' : 'bg-black text-white') : ''}
                    `}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto my-8 bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Currency</h2>
          <div className="relative">
            <div 
              className="border rounded-md p-3 flex items-center justify-between cursor-pointer"
              onClick={toggleCurrencyDropdown}
            >
              <div className="flex items-center">
                <div className={`${currencies.find(c => c.symbol === selectedCurrency).color} text-white rounded-full p-1 w-6 h-6 mr-2 flex items-center justify-center`}>
                  <span className="text-xs">{currencies.find(c => c.symbol === selectedCurrency).icon}</span>
                </div>
                <span>{selectedCurrency}</span>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

            {isCurrencyDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-gray-800 border rounded-md shadow-lg max-h-60 overflow-auto">
                {currencies.map((currency) => (
                  <div 
                    key={currency.symbol} 
                    className="p-3 hover:bg-black cursor-pointer flex items-center border-b"
                    onClick={() => selectCurrency(currency.symbol)}
                  >
                    <div className={`${currency.color} text-white rounded-full p-1 w-6 h-6 mr-2 flex items-center justify-center`}>
                      <span className="text-xs">{currency.icon}</span>
                    </div>
                    <span>{currency.symbol}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Wallet Address</h2>
          <input 
            type="text" 
            placeholder="Please enter your wallet address" 
            className="w-full border rounded-md p-3"
          />
        </div>
        
        <button className="w-full bg-cyan-500  hover:bg-black text-white font-medium py-3 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}