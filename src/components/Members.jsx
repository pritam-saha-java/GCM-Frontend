import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import { motion } from "framer-motion";
import styles from "../style";
import { FaUser, FaUsers, FaIdBadge, FaCheckCircle } from "react-icons/fa";
import { getMembers } from "../api/memberService";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projectName, setProjectName] = useState("");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const project = localStorage.getItem("selectedProject");
        if (project) {
          const projectData = JSON.parse(project);
          setProjectName(projectData.name || projectData.projectName || "Current Project");
        }

        const data = await getMembers();
        setMembers(data);
      } catch (err) {
        setError(err.message || "Failed to fetch members");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const SkeletonLoader = () => (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-8 border border-gray-700/50"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 mb-6 flex items-center justify-center animate-pulse" />
            <div className="w-3/4 h-6 bg-gray-700 rounded-lg mb-3 animate-pulse"></div>
            <div className="w-1/2 h-4 bg-gray-700 rounded-lg mb-2 animate-pulse"></div>
            <div className="w-2/3 h-4 bg-gray-700 rounded-lg animate-pulse"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col text-white bg-gradient-to-br from-black via-gray-900 to-black">
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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-6 py-3 rounded-2xl border border-purple-500/30 mb-4">
            <FaUsers className="text-pink-400 text-xl" />
            <span className="text-purple-300 font-medium text-lg">
              {projectName || "Our Team"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mt-4">
            TEAM MEMBERS
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Meet the dedicated members who make our project successful
          </p>
        </motion.div>

        {/* Members Grid */}
        {loading ? (
          <SkeletonLoader />
        ) : error ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
              <div className="text-red-400 text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-semibold text-red-300 mb-2">Error Loading Data</h3>
              <p className="text-red-200">{error}</p>
            </div>
          </motion.div>
        ) : members.length === 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-12">
              <FaUser className="text-gray-500 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">No Members Found</h3>
              <p className="text-gray-400">There are no members to display for this project.</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {members.map((m, index) => (
                <motion.div
                  key={m.id}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center p-8 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 mb-6">
                    {m.memberImage ? (
                      <img
                        src={`data:image/png;base64,${m.memberImage}`}
                        alt={m.memberName}
                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-700/50 group-hover:border-pink-500/50 transition-all duration-300 shadow-2xl"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center border-4 border-gray-700/50 group-hover:border-pink-500/50 transition-all duration-300">
                        <FaIdBadge className="text-gray-400 text-5xl" />
                      </div>
                    )}
                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5 border-4 border-gray-900">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                  </div>

                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
                      {m.memberName}
                    </h3>
                    {m.role && <p className="text-pink-400 font-medium mb-3">{m.role}</p>}
                    {m.department && (
                      <p className="text-gray-400 text-sm mb-4">{m.department}</p>
                    )}
                    <div className="flex justify-center gap-4 text-xs text-gray-500">
                      {m.experience && <span>{m.experience} yrs exp</span>}
                      {m.memberId && <span>ID: {m.memberId}</span>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
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

export default Members;
