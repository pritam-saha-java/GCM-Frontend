import { useState } from "react";
import { Menu, X, LayoutDashboard, Wallet, ArrowDown, Package, Repeat, Users, MessageSquare, Settings, LogOut } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Deposit";

const navItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={18} />, component: <Dashboard /> },
  { name: "Deposit", icon: <Wallet size={18} />, component: <Deposit /> },
  { name: "Withdraw", icon: <ArrowDown size={18} />, component: <Withdraw /> },
  { name: "Packages", icon: <Package size={18} />, component: <div>📦 Packages Page</div> },
  { name: "Transactions", icon: <Repeat size={18} />, component: <div>🔁 Transactions Page</div> },
  { name: "Affiliate", icon: <Users size={18} />, component: <div>👥 Affiliate Page</div> },
  { name: "Message", icon: <MessageSquare size={18} />, component: <div>💬 Messages Page</div> },
  { name: "Settings", icon: <Settings size={18} />, component: <div>⚙️ Settings Page</div> },
  { name: "Logout", icon: <LogOut size={18} />, component: <div>👋 Logged Out</div> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f0f1c] to-[#111122] text-white">
      {/* Mobile Hamburger */}
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
        <div className="p-6 text-2xl font-bold tracking-wide text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
          CryptoDash 🚀
        </div>
        <nav className="flex flex-col px-4 space-y-3 mt-4">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              className={`flex items-center gap-3 p-[19px] rounded-lg transition-all duration-200 font-medium text-sm group
                ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-cyan-500 to-blue-700 shadow-md text-white"
                    : "hover:bg-[#1e1e36] text-gray-300 hover:text-white"
                }`}
              onClick={() => {
                setActiveIndex(index);
                setIsOpen(false);
              }}
            >
              <span className="text-cyan-400">{item.icon}</span>
              {item.name}
              {activeIndex === index && (
                <span className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <main className="flex-1 p-6">
        {navItems[activeIndex]?.component || <div>Welcome!</div>}
      </main>
    </div>
  );
}
