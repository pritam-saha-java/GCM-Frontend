import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { close, menu } from "../assets";
import { ChevronDown } from "lucide-react";
import toast from "react-hot-toast";
import { getAllProjects } from "../api/projectService";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // 🔹 Fetch all projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getAllProjects();
        if (data && data.length > 0) {
          setProjects(data);

          // Load selected project from localStorage or default to first project
          const stored = localStorage.getItem("selectedProject");
          if (stored) {
            setSelectedProject(JSON.parse(stored));
          } else {
            localStorage.setItem("selectedProject", JSON.stringify(data[0]));
            setSelectedProject(data[0]);
          }
        } else {
          toast.error("No projects found.");
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load projects.");
      }
    };

    fetchProjects();
  }, []);

  const handleNavClick = (id) => {
    navigate(`/${id}`);
  };

  const handleProjectSelect = (proj) => {
  setSelectedProject(proj);
  localStorage.setItem("selectedProject", JSON.stringify(proj));
  setDropdownOpen(false);
  toast.success(`Switched to ${proj.projectName}`);

  // 🔹 Force full reload to apply project-wide changes
  setTimeout(() => {
    window.location.reload();
  }, 500);
};


  // 🔹 Basic navigation based on project type
  let navLinks = [
    { id: "", title: "Home" },
    { id: "about", title: "About" },
    { id: "management", title: "Management" },
    { id: "members", title: "Members" },
    { id: "event", title: "Event" },
    { id: "contacts", title: "Contacts" },
  ];

  if (selectedProject?.projectName === "Red Riders Sports Club") {
    navLinks.push({ id: "live-stream", title: "Live Stream" });
    navLinks.push({ id: "live-scoring", title: "Live Scoring" });
  } else if (selectedProject?.projectName === "Red Riders Management") {
    navLinks.push({ id: "our-clients", title: "Our Client" });
    navLinks.push({ id: "gallery", title: "Gallery" });
  } else if (selectedProject?.type === "complex") {
    navLinks.push({ id: "bookcourt", title: "Book Court" });
    navLinks.push({ id: "payment", title: "Payment" });
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative">
      
      {/* Project Dropdown */}
      <div className="relative">
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-red-900 via-red-800 to-red-900 px-3 py-2 rounded-xl border border-red-500 hover:from-red-800 hover:to-red-950 transition-all duration-300 shadow-md"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-black text-red-400 font-bold rounded-md border-2 border-red-500">
            {selectedProject?.shortName || "?"}
          </div>
          <span className="text-white font-poppins text-[16px] font-semibold whitespace-nowrap">
            {selectedProject?.projectName || "Loading..."}
          </span>
          <ChevronDown size={20} className={`text-red-400 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
        </div>

        {dropdownOpen && (
          <div className="absolute top-14 left-0 w-80 bg-black/80 border border-red-600 rounded-xl shadow-lg z-50 backdrop-blur-sm overflow-hidden animate-fadeIn">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => handleProjectSelect(proj)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-200 ${
                  proj.id === selectedProject?.id
                    ? "bg-red-900/60 border-l-4 border-red-500"
                    : "hover:bg-red-800/40"
                }`}
              >
                <div className="w-9 h-9 flex items-center justify-center bg-black text-red-400 font-bold rounded-md border border-red-500">
                  {proj.shortName || proj.projectName?.slice(0, 2)?.toUpperCase()}
                </div>
                <span className="text-white font-poppins text-[15px] font-medium truncate">
                  {proj.projectName}
                </span>
              </div>
            ))}

            <div className="text-xs text-red-300 px-4 py-2 bg-red-950/50 border-t border-red-700">
              {projects.length} projects available<br />
              Active: {selectedProject?.projectName || "None"}
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
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black/90 absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-lg border border-red-600 z-50 backdrop-blur-md shadow-xl`}
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
