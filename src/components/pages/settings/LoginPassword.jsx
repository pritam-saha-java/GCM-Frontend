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
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <header className="bg-gray-800 p-4 flex justify-between items-center shadow-md border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">Login Password</h1>
      </header>
      
      {/* Main content area */}
      <div className="container mx-auto p-6 flex items-center justify-center min-h-[80vh]">
        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 w-full max-w-4xl overflow-hidden">
          {/* Two column layout */}
          <div className="flex flex-col md:flex-row">
            {/* Left column - Icon and title */}
            <div className="bg-gray-900 p-8 flex flex-col items-center justify-center md:w-1/3">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <CreditCard className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white text-center">Update Login Password</h2>
              <p className="text-gray-400 mt-4 text-center">Secure your payment information with a strong password</p>
            </div>
            
            {/* Right column - Form */}
            <div className="p-8 md:w-2/3">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-200 mb-2 font-medium" htmlFor="current-password">
                    Current Password
                  </label>
                  <input 
                    type="password" 
                    id="current-password"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    placeholder="Enter current password"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-200 mb-2 font-medium" htmlFor="new-password">
                      New Password
                    </label>
                    <input 
                      type="password" 
                      id="new-password"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                      placeholder="Enter new password"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-200 mb-2 font-medium" htmlFor="confirm-password">
                      Confirm New Password
                    </label>
                    <input 
                      type="password" 
                      id="confirm-password"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-cyan-500  hover:bg-black text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 shadow-md"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}