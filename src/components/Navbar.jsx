import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { close, logo, menu } from "../assets";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  const staticRoutes = ["dashboard", "login", "register", "setmeal", "about", "faq", "affiliate"];
  const lowerId = id.toLowerCase();

  if (staticRoutes.includes(lowerId)) {
    return navigate(`/${lowerId}`);
  }

  if (location.pathname === "/") {
    const section = document.getElementById(lowerId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    navigate(`/#${lowerId}`);
  }
};


  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
    setIsLoggedIn(false);
    navigate("/");
  };

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "setmeal", title: "Set Meal" },
    { id: "about", title: "About" },
    { id: "faq", title: "FAQ" },
    { id: "affiliate", title: "Affiliate" },
    isLoggedIn
      ? { id: "Dashboard", title: "Dashboard" }
      : { id: "Login", title: "Login" },
    { id: "Register", title: "Register" },
  ];

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="w-[260px] h-[35px]">
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            onClick={() => handleNavClick(nav.id)}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-6" : "mr-10"
            }`}
          >
            {nav.title}
          </li>
        ))}
        {isLoggedIn && (
          <li
            onClick={handleLogout}
            className="font-poppins font-normal cursor-pointer text-[16px] text-red-400 hover:text-red-300 transition"
          >
            Logout
          </li>
        )}
      </ul>

      {/* Mobile Menu */}
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
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                onClick={() => {
                  handleNavClick(nav.id);
                  setToggle(false);
                }}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
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
                className="font-poppins font-normal cursor-pointer text-[16px] text-red-400 hover:text-red-300 transition"
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
