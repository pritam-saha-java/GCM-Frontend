import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import aboutImg from "../assets/aboutImg.png";
import { FaGlobe, FaShieldAlt, FaHeadset, FaBitcoin } from "react-icons/fa";
import { motion } from "framer-motion";

// Your project options
const projectOptions = [
  { id: "club01", name: "Red Riders Sports Club", short: "RR", type: "club" },
  { id: "mgmt01", name: "Red Riders Management", short: "RM", type: "management" },
  { id: "cmplx01", name: "Red Riders Sports Complex", short: "RC", type: "complex" },
];

const About = () => {
  const location = useLocation();

  // ---- get ?projectId=... from the URL ----
  const params = new URLSearchParams(location.search);
  const projectId = params.get("projectId") || "club01"; // default fallback

  // Find the matching project or default to the first
  const project = projectOptions.find((p) => p.id === projectId) 
                  || projectOptions[0];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex flex-col text-white bg-gradient-to-b from-gray-900 to-black">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:w-1/2"
          >
            <img
              src={aboutImg}
              alt={`About ${project.name}`}
              className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:w-1/2 space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              About {project.name}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {/* Show content based on project.type or project.id */}
              {project.id === "club01" && (
                <>GoCloudMining info for the Sports Club…</>
              )}
              {project.id === "mgmt01" && (
                <>Custom text for the Management branch…</>
              )}
              {project.id === "cmplx01" && (
                <>Details about the Sports Complex…</>
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* …rest of your sections can also check project.id as needed */}

      <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default About;
