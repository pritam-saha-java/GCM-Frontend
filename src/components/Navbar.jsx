import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

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
            className={`
              font-poppins font-normal cursor-pointer text-[16px] text-white 
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            `}
          >
            {nav.title}
          </li>
        ))}
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
          className={`
            ${toggle ? "flex" : "hidden"}
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 
            min-w-[140px] rounded-xl sidebar z-50
          `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                onClick={() => {
                  handleNavClick(nav.id);
                  setToggle(false); // Close menu on click
                }}
                className={`
                  font-poppins font-normal cursor-pointer text-[16px] text-white 
                  ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}
                `}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
