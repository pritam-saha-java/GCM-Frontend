import { useState } from 'react';
import { User, CreditCard, Settings, LogOut, Bell, Shield } from 'lucide-react';

export default function PaymentPassword() {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: <User size={16} />, special: false },
    { id: 'payment-password', label: 'Update Payment Password', icon: <CreditCard size={16} />, special: true },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={16} />, special: false },
    { id: 'security', label: 'Security Settings', icon: <Shield size={16} />, special: false },
    { id: 'settings', label: 'Settings', icon: <Settings size={16} />, special: false },
    { id: 'logout', label: 'Logout', icon: <LogOut size={16} />, special: false }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-800 text-white">
      <header className="bg-gray-800 p-4 flex justify-between items-center shadow-sm border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">Wallet Address</h1>
        <div className="relative">
          <button 
            className="p-2 text-white hover:bg-gray-700 rounded-full"
            onClick={toggleUserDropdown}
          >
            <User size={24} />
          </button>
          
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10 border border-gray-700">
              <div className="py-1">
                {menuItems.map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    className={`
                      flex items-center px-4 py-3 transition-colors duration-150
                      ${item.special ? 'bg-blue-600 text-white hover:bg-blue-700' : 'text-gray-200 hover:bg-gray-700 hover:text-white border-b border-gray-700'}
                      ${hoveredItem === item.id ? (item.special ? 'bg-blue-700 text-white' : 'bg-gray-700 text-white') : ''}
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
      
      {/* Main content area */}
      <div className="container mx-auto p-6">
        <div className="bg-gray-800 rounded-lg shadow-md p-8 max-w-md mx-auto mt-10 border border-gray-700">
          <div className="flex items-center justify-center text-2xl font-bold mb-6 text-white">
            <CreditCard className="mr-2 text-blue-500" size={28} />
            <h2>Update Payment Password</h2>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="current-password">
                Current Password
              </label>
              <input 
                type="password" 
                id="current-password"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Enter current password"
              />
            </div>
            
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="new-password">
                New Password
              </label>
              <input 
                type="password" 
                id="new-password"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Enter new password"
              />
            </div>
            
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="confirm-password">
                Confirm New Password
              </label>
              <input 
                type="password" 
                id="confirm-password"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Confirm new password"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}