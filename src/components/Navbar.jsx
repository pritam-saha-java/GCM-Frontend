import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { close, menu } from "../assets";
import toast from "react-hot-toast";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    id: "club01",
    name: "Red Riders Sports Club",
    short: "RR",
    type: "club",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
        localStorage.removeItem("user");
        toast("Session expired. Please log in again.", { icon: "⏰" });
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [location.pathname]);

  const handleNavClick = (id) => {
    const route = `/${id}?projectId=${selectedProject.id}`;
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
    setIsLoggedIn(false);
    navigate("/");
  };

  const projectOptions = [
    { id: "club01", name: "Red Riders Sports Club", short: "RR", type: "club" },
    { id: "mgmt01", name: "Red Riders Management", short: "RM", type: "management" },
    { id: "cmplx01", name: "Red Riders Sports Complex", short: "RC", type: "complex" },
  ];

  let navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "management", title: "Management" },
    { id: "members", title: "Members" },
    { id: "event", title: "Event" },
    { id: "contacts", title: "Contacts" },
  ];

  if (selectedProject.type === "club") {
    navLinks.push({ id: "livescoring", title: "Live Scoring" });
    navLinks.push({ id: "livestream", title: "Live Stream" });
  } else if (selectedProject.type === "management") {
    navLinks.push({ id: "ourclient", title: "Our Client" });
    navLinks.push({ id: "galary", title: "Gallery" });
  } else if (selectedProject.type === "complex") {
    navLinks.push({ id: "bookcourt", title: "Book Court" });
    navLinks.push({ id: "payment", title: "Payment" });
  }

  navLinks.push(isLoggedIn ? { id: "dashboard", title: "Dashboard" } : { id: "login", title: "Login" });
  navLinks.push({ id: "register", title: "Register" });

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative">
      
      {/* Project Dropdown */}
      <div className="relative">
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1 cursor-pointer bg-red-900/80 px-2 py-2 rounded-md border border-red-500 hover:bg-red-800/90 transition-all duration-300 shadow-md"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-black text-red-400 font-bold rounded-md border-2 border-red-500">
            {selectedProject.short}
          </div>
          <span className="text-white font-poppins text-[16px] font-semibold whitespace-nowrap">
            {selectedProject.name}
          </span>
          <ChevronDown size={20} className="text-red-400" />
        </div>

        {dropdownOpen && (
          <div className="absolute top-14 left-0 w-80 bg-red-950/95 border-2 border-red-500 rounded-md shadow-lg p-4 z-50 backdrop-blur-sm">
            {projectOptions.map((proj) => (
              <div
                key={proj.id}
                onClick={() => {
                  setSelectedProject(proj);
                  setDropdownOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-3 rounded-md cursor-pointer hover:bg-red-800/50 transition-all duration-200 ${
                  proj.id === selectedProject.id ? "bg-red-900/70 border-l-4 border-red-400" : ""
                }`}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-black text-red-400 font-bold rounded-md border-2 border-red-500">
                  {proj.short}
                </div>
                <span className="text-white font-poppins text-[15px] font-medium">{proj.name}</span>
              </div>
            ))}
            <div className="text-sm text-red-200 px-3 pt-3 border-t-2 border-red-500/50 mt-3">
              {projectOptions.length} projects total<br />
              Active: {selectedProject.name}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            onClick={() => handleNavClick(nav.id)}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-red-400 transition-all duration-200 ${
              index === navLinks.length - 1 ? "mr-6" : "mr-10"
            }`}
          >
            {nav.title}
          </li>
        ))}
        {isLoggedIn && (
          <li
            onClick={handleLogout}
            className="font-poppins font-normal cursor-pointer text-[16px] text-red-400 hover:text-red-300 transition-all duration-200"
          >
            Logout
          </li>
        )}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-red-950/95 absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-md sidebar z-50 border-2 border-red-500 backdrop-blur-sm`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                onClick={() => {
                  handleNavClick(nav.id);
                  setToggle(false);
                }}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-red-400 transition-all duration-200 ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                {nav.title}
              </li>
            ))}
            {isLoggedIn && (
              <li
                onClick={() => {
                  handleLogout();
                  setToggle(false);
                }}
                className="font-poppins font-normal cursor-pointer text-[16px] text-red-400 hover:text-red-300 transition-all duration-200"
              >
                Logout
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;