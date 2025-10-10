import React from "react";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import { motion } from "framer-motion";
import styles from "../style";
import {
  FaBuilding,
  FaGlobe,
  FaIndustry,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const OurClients = () => {
  // Hardcoded clients data
  const clients = [
    {
      id: 1,
      name: "TechNova Solutions",
      logo: "https://via.placeholder.com/150x80/4F46E5/FFFFFF?text=TechNova",
      industry: "Technology & IT",
      website: "www.technova.com",
      description: "Leading provider of innovative software solutions and digital transformation services.",
      testimonial: "Their expertise in modern web technologies helped us scale our platform to serve millions of users.",
      rating: 5,
      projects: 12,
      since: "2018"
    },
    {
      id: 2,
      name: "Global Finance Corp",
      logo: "https://via.placeholder.com/150x80/059669/FFFFFF?text=GFC",
      industry: "Financial Services",
      website: "www.globalfinance.com",
      description: "International banking and financial services corporation serving clients worldwide.",
      testimonial: "The solutions provided have significantly improved our operational efficiency and customer satisfaction.",
      rating: 5,
      projects: 8,
      since: "2019"
    },
    {
      id: 3,
      name: "MediCare Plus",
      logo: "https://via.placeholder.com/150x80/DC2626/FFFFFF?text=MediCare+",
      industry: "Healthcare",
      website: "www.medicareplus.com",
      description: "Healthcare provider offering comprehensive medical services and patient care solutions.",
      testimonial: "Their attention to detail and understanding of healthcare compliance made them the perfect partner.",
      rating: 4,
      projects: 6,
      since: "2020"
    },
    {
      id: 4,
      name: "EduFuture Learning",
      logo: "https://via.placeholder.com/150x80/7C3AED/FFFFFF?text=EduFuture",
      industry: "Education Technology",
      website: "www.edufuture.com",
      description: "Pioneering ed-tech company revolutionizing online learning experiences.",
      testimonial: "The platform they built has transformed how we deliver educational content to students globally.",
      rating: 5,
      projects: 10,
      since: "2017"
    },
    {
      id: 5,
      name: "GreenEnergy Works",
      logo: "https://via.placeholder.com/150x80/059669/FFFFFF?text=GreenEnergy",
      industry: "Renewable Energy",
      website: "www.greenenergyworks.com",
      description: "Sustainable energy solutions provider committed to a greener future.",
      testimonial: "Their innovative approach helped us optimize our energy management systems beautifully.",
      rating: 4,
      projects: 7,
      since: "2021"
    },
    {
      id: 6,
      name: "Retail Dynamics",
      logo: "https://via.placeholder.com/150x80/EA580C/FFFFFF?text=Retail+D",
      industry: "E-commerce & Retail",
      website: "www.retaildynamics.com",
      description: "Omni-channel retail solutions transforming customer shopping experiences.",
      testimonial: "The e-commerce platform they developed increased our sales by 300% in the first year.",
      rating: 5,
      projects: 15,
      since: "2016"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`text-sm ${
          index < rating ? "text-yellow-400" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col text-white bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <section className="flex-1 py-16 px-4 sm:px-6 lg:px-8 mt-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 px-6 py-3 rounded-2xl border border-blue-500/30 mb-4">
            <FaBuilding className="text-red-400 text-xl" />
            <span className="text-red-300 font-medium text-lg">
              Red Riders Management
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mt-4">
            Our Valued Clients
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            We're proud to collaborate with industry leaders and innovative 
            companies worldwide, delivering exceptional solutions and building lasting relationships.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-6">
                  {/* Client Logo & Basic Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-16 h-16 object-contain rounded-lg bg-white/5 p-2 border border-gray-600/50"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 truncate">
                        {client.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <FaIndustry className="text-blue-400 text-xs" />
                        <span className="text-gray-400 text-sm truncate">
                          {client.industry}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {client.description}
                  </p>

                  {/* Client Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <FaGlobe className="text-green-400 flex-shrink-0" />
                      <span className="truncate">{client.website}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-blue-400 font-semibold">
                          {client.projects}
                        </span>
                        <span>projects</span>
                      </div>
                      <div className="text-gray-400">
                        Since {client.since}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {renderStars(client.rating)}
                    </div>
                    <span className="text-gray-400 text-sm">
                      {client.rating}/5
                    </span>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                    <FaQuoteLeft className="text-blue-400/50 text-lg mb-2" />
                    <p className="text-gray-300 text-sm italic line-clamp-3">
                      "{client.testimonial}"
                    </p>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400 text-sm">Clients Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">150+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="mt-16">
        <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <Footer />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OurClients;