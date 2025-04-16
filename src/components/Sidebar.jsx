import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <div className="flex">
      {/* Hamburger Button (Mobile Only) */}
      <button
        className="md:hidden p-4 focus:outline-none z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0`}
      >
        <div className="p-6 font-bold text-xl border-b border-gray-700">
          MyApp
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:bg-gray-700 p-2 rounded transition"
              onClick={() => setIsOpen(false)} // close on click (mobile)
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 ml-0 md:ml-64 transition-all">
        <h1 className="text-2xl font-semibold">Welcome to MyApp</h1>
        <p className="mt-4 text-gray-600">This is your dashboard content.</p>
      </main>
    </div>
  );
}
