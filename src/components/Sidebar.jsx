import { useState } from "react";
import {
  Menu, X, LayoutDashboard, Wallet, ArrowDown, Package, Repeat,
  Users, MessageSquare, Settings, LogOut, ChevronDown, ChevronUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transaction from "./pages/Transaction";
import Affiliate from "./pages/Affiliate";
import Message from "./pages/Message";
import WalletAddress from "./pages/settings/WalletAddress";
import LoginPassword from "./pages/settings/LoginPassword";
import PaymentPassword from "./pages/settings/PaymentPassword";
import MiningPackages from "./pages/packages/MiningPackages";
import MyPackages from "./pages/packages/MyPackages";

const navItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={18} />, component: <Dashboard /> },
  { name: "Deposit", icon: <Wallet size={18} />, component: <Deposit /> },
  { name: "Withdraw", icon: <ArrowDown size={18} />, component: <Withdraw /> },
  // Packages moved to its own section with submenu
  { name: "Transactions", icon: <Repeat size={18} />, component: <Transaction /> },
  { name: "Affiliate", icon: <Users size={18} />, component: <Affiliate /> },
  { name: "Message", icon: <MessageSquare size={18} />, component: <Message /> },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(<Dashboard />);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleNavClick = (component) => {
    setActiveComponent(component);
    setIsOpen(false);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const loginTime = localStorage.getItem("loginTime");
    if (loginTime && Date.now() - loginTime > 24 * 60 * 60 * 1000) {
      localStorage.clear();
      navigate("/");
    }
  }, []);  

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f0f1c] to-[#111122] text-white">
      {/* Hamburger */}
      <button className="md:hidden p-4 z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#111122]/70 backdrop-blur-xl border-r border-[#1f1f3a] shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0`}
      >
        <Link
          to="/"
          className="block p-6 text-2xl font-bold tracking-wide text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text transition hover:opacity-80"
        >
          GoCloudMining 🚀
        </Link>

        <nav className="flex flex-col px-4 space-y-3 mt-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center gap-3 p-[19px] rounded-lg transition-all duration-200 font-medium text-sm group
              ${
                activeComponent.type === item.component.type
                  ? "bg-gradient-to-r from-cyan-500 to-blue-700 shadow-md text-white"
                  : "hover:bg-[#1e1e36] text-gray-300 hover:text-white"
              }`}
              onClick={() => handleNavClick(item.component)}
            >
              <span className="text-cyan-400">{item.icon}</span>
              {item.name}
            </button>
          ))}

          {/* Packages Dropdown */}
          <div className="space-y-1">
            <button
              className={`flex items-center gap-3 w-full p-[19px] rounded-lg transition-all duration-200 font-medium text-sm
              ${isPackagesOpen ? "bg-gradient-to-r from-cyan-500 to-blue-700 shadow-md" : "hover:bg-[#1e1e36] text-gray-300 hover:text-white"}`}
              onClick={() => setIsPackagesOpen(!isPackagesOpen)}
            >
              <span className="text-cyan-400"><Package size={18} /></span>
              Packages
              {isPackagesOpen ? <ChevronUp className="ml-auto" size={18} /> : <ChevronDown className="ml-auto" size={18} />}
            </button>

            {isPackagesOpen && (
              <div className="mt-2 space-y-1 pl-4 pr-2 transition-all duration-300">
                <button
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-300 hover:bg-[#1e1e36] hover:text-white transition"
                  onClick={() => handleNavClick(<MiningPackages />)}
                >
                  <span className="text-cyan-400">▸</span> Mining Packages
                </button>
                <button
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-300 hover:bg-[#1e1e36] hover:text-white transition"
                  onClick={() => handleNavClick(<MyPackages />)}
                >
                  <span className="text-cyan-400">▸</span> My Packages
                </button>
              </div>
            )}
          </div>

          {/* Settings Dropdown */}
          <div className="space-y-1">
            <button
              className={`flex items-center gap-3 w-full p-[19px] rounded-lg transition-all duration-200 font-medium text-sm
              ${isSettingsOpen ? "bg-gradient-to-r from-cyan-500 to-blue-700 shadow-md" : "hover:bg-[#1e1e36] text-gray-300 hover:text-white"}`}
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            >
              <span className="text-cyan-400"><Settings size={18} /></span>
              Settings
              {isSettingsOpen ? <ChevronUp className="ml-auto" size={18} /> : <ChevronDown className="ml-auto" size={18} />}
            </button>

            {isSettingsOpen && (
              <div className="mt-2 space-y-1 pl-4 pr-2 transition-all duration-300">
                <button
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-300 hover:bg-[#1e1e36] hover:text-white transition"
                  onClick={() => handleNavClick(<WalletAddress />)}
                >
                  <span className="text-cyan-400">▸</span> Wallet Address
                </button>
                <button
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-300 hover:bg-[#1e1e36] hover:text-white transition"
                  onClick={() => handleNavClick(<LoginPassword />)}
                >
                  <span className="text-cyan-400">▸</span> Login Password
                </button>
                <button
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-300 hover:bg-[#1e1e36] hover:text-white transition"
                  onClick={() => handleNavClick(<PaymentPassword />)}
                >
                  <span className="text-cyan-400">▸</span> Payment Password
                </button>
              </div>
            )}
          </div>

          {/* Logout */}
          <button
            className="flex items-center gap-3 p-[19px] rounded-lg text-gray-300 hover:text-white hover:bg-[#1e1e36] transition-all text-sm"
            onClick={() => setShowLogoutConfirm(true)}
          >
            <span className="text-cyan-400"><LogOut size={18} /></span>
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeComponent}
      </main>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-[#1c1c2e] p-6 rounded-xl text-center shadow-2xl border border-[#2c2c40] w-[90%] max-w-sm">
            <h2 className="text-xl font-semibold text-white mb-2">Confirm Logout</h2>
            <p className="text-gray-400 mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition"
                onClick={() => {
                  setShowLogoutConfirm(false);
                  setActiveComponent(<div>👋 Logged Out</div>);
                }}
              >
                Yes, Logout
              </button>
              <button
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}