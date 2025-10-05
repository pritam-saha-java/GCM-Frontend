import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import { motion } from "framer-motion";
import styles from "../style";
import { 
  FaTrophy, FaUsers, FaCalendarAlt, FaChartLine, FaMapMarkerAlt, 
  FaStar, FaAward, FaShieldAlt, FaHandshake, FaLightbulb,
  FaCog, FaUserTie, FaClipboardList, FaMoneyBillWave,
  FaBuilding, FaSwimmer, FaRunning, FaBasketballBall,
  FaVolleyballBall, FaTableTennis, FaChess, FaDumbbell,
  FaUtensils, FaParking, FaWifi, FaFirstAid, FaClock,
  FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram,
  FaLinkedin, FaYoutube, FaArrowRight, FaCheckCircle
} from "react-icons/fa";

const About = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const loadProject = () => {
      const stored = localStorage.getItem("selectedProject");
      if (stored) {
        setSelectedProject(JSON.parse(stored));
      } else {
        setSelectedProject({
          id: 1,
          projectName: "Red Riders Sports Club",
        });
      }
    };

    loadProject();
    window.addEventListener("projectChanged", loadProject);
    return () => {
      window.removeEventListener("projectChanged", loadProject);
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const getProjectContent = () => {
    if (!selectedProject) return null;
    
    switch (selectedProject.projectName) {
      case "Red Riders Sports Club":
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Hero Section */}
            <motion.div variants={fadeIn} className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-full">
                  <div className="bg-gray-900 rounded-full p-4">
                    <FaTrophy className="text-4xl text-yellow-400" />
                  </div>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Welcome to Red Riders Sports Club
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Established in 2010, Red Riders Sports Club has grown from a local community initiative to Kolkata's premier sports organization, uniting over 5,000 athletes and sports enthusiasts in our vibrant sporting family.
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              {[
                { icon: FaUsers, number: "5,000+", label: "Active Members" },
                { icon: FaTrophy, number: "150+", label: "Tournaments" },
                { icon: FaCalendarAlt, number: "12", label: "Years of Excellence" },
                { icon: FaAward, number: "50+", label: "Championship Titles" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 hover:border-yellow-500 transition-all duration-300">
                  <stat.icon className="text-3xl text-yellow-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Mission & Vision */}
            <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <FaStar className="text-yellow-400 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  To foster a vibrant sports community that promotes physical fitness, mental well-being, and social connections through inclusive, well-organized sporting events and tournaments.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Promote sports at grassroots level</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Develop future sporting champions</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Create inclusive sporting environment</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <FaLightbulb className="text-orange-400 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  To become Eastern India's most respected sports club, recognized for excellence in sports management, athlete development, and community engagement by 2025.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><FaArrowRight className="text-blue-400 mr-2" /> Expand to 10,000+ members</li>
                  <li className="flex items-center"><FaArrowRight className="text-blue-400 mr-2" /> Establish national-level tournaments</li>
                  <li className="flex items-center"><FaArrowRight className="text-blue-400 mr-2" /> Develop professional sports infrastructure</li>
                </ul>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div variants={fadeIn} className="space-y-6">
              <h3 className="text-2xl font-bold text-yellow-400 text-center">Our Core Values</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: FaShieldAlt, title: "Integrity", desc: "Maintaining highest ethical standards in all our operations" },
                  { icon: FaUsers, title: "Community", desc: "Building strong relationships and supporting each other" },
                  { icon: FaTrophy, title: "Excellence", desc: "Striving for the highest standards in everything we do" },
                  { icon: FaHandshake, title: "Teamwork", desc: "Collaborating to achieve common goals and success" },
                  { icon: FaChartLine, title: "Innovation", desc: "Embracing new ideas and technologies in sports" },
                  { icon: FaAward, title: "Passion", desc: "Fueling our journey with relentless enthusiasm for sports" }
                ].map((value, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300">
                    <value.icon className="text-3xl text-yellow-400 mx-auto mb-4" />
                    <h4 className="font-bold text-white mb-2">{value.title}</h4>
                    <p className="text-gray-300 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Premier Tournaments - Enhanced */}
            <motion.div variants={fadeIn} className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-yellow-400">Premier Tournaments & Leagues</h3>
                <p className="text-gray-400 mt-2">Professional tournaments that define sporting excellence</p>
              </div>
              
              <div className="space-y-8">
                {/* RRIPL */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                      <FaTrophy className="text-2xl text-gray-900" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">🏆 Red Riders Indoor Premiere League (RRIPL)</h4>
                      <p className="text-yellow-400">India's Premier Indoor Cricket Championship</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        The Red Riders Indoor Premiere League stands as the crown jewel of our sporting calendar. 
                        With 10 successful seasons completed, RRIPL has revolutionized indoor cricket in Eastern India 
                        through its professional organization, thrilling matches, and unparalleled player experience.
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <h5 className="font-semibold text-white text-lg">Key Features:</h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Professional live scoring system</li>
                          <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> HD streaming and commentary</li>
                          <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Cash prizes worth ₹5,00,000</li>
                          <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Professional umpiring panel</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-gray-900 p-6 rounded-xl mb-4">
                        <h5 className="font-semibold text-white mb-3">Season 11 Highlights</h5>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-yellow-400">16</div>
                            <div className="text-gray-400 text-sm">Teams</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-yellow-400">45</div>
                            <div className="text-gray-400 text-sm">Matches</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-yellow-400">240</div>
                            <div className="text-gray-400 text-sm">Players</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-yellow-400">₹5L</div>
                            <div className="text-gray-400 text-sm">Prize Pool</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-6">
                    {["10 Seasons Completed", "Live Streaming", "Professional Umpires", "Player Awards", "Sponsorship Partners", "Media Coverage"].map((tag, index) => (
                      <span key={index} className="bg-yellow-500 px-4 py-2 rounded-full text-sm font-medium text-gray-900 flex items-center">
                        <FaStar className="mr-2" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional tournaments would follow similar enhanced structure */}
              </div>
            </motion.div>

            {/* Sports Disciplines */}
            <motion.div variants={fadeIn} className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-yellow-400">Sports Disciplines</h3>
                <p className="text-gray-400">Comprehensive sporting opportunities for all enthusiasts</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { icon: FaTrophy, name: "Cricket", color: "text-yellow-400" },
                  { icon: FaRunning, name: "Athletics", color: "text-green-400" },
                  { icon: FaBasketballBall, name: "Basketball", color: "text-orange-400" },
                  { icon: FaVolleyballBall, name: "Volleyball", color: "text-blue-400" },
                  { icon: FaTableTennis, name: "Table Tennis", color: "text-red-400" },
                  { icon: FaChess, name: "Chess", color: "text-purple-400" },
                  { icon: FaSwimmer, name: "Swimming", color: "text-cyan-400" },
                  { icon: FaDumbbell, name: "Weightlifting", color: "text-gray-400" },
                  { icon: FaRunning, name: "Marathon", color: "text-pink-400" },
                  { icon: FaTrophy, name: "Badminton", color: "text-indigo-400" },
                  { icon: FaTrophy, name: "Football", color: "text-green-500" },
                  { icon: FaTrophy, name: "Hockey", color: "text-yellow-300" }
                ].map((sport, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-xl text-center hover:transform hover:scale-110 transition-all duration-300 group">
                    <sport.icon className={`text-3xl ${sport.color} mx-auto mb-3 group-hover:text-white transition-colors`} />
                    <h4 className="font-semibold text-white text-sm">{sport.name}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );

      case "Red Riders Management":
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Enhanced Management content with similar structure */}
            <motion.div variants={fadeIn} className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-1 rounded-full">
                  <div className="bg-gray-900 rounded-full p-4">
                    <FaUserTie className="text-4xl text-blue-400" />
                  </div>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Red Riders Sports Management
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Professional sports management solutions that transform organizations through strategic planning, operational excellence, and data-driven performance optimization.
              </p>
            </motion.div>

            {/* Add extensive management content here following similar patterns */}
            <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              {[
                { icon: FaClipboardList, number: "500+", label: "Events Managed" },
                { icon: FaUsers, number: "10K+", label: "Athletes Managed" },
                { icon: FaMoneyBillWave, number: "₹50Cr+", label: "Revenue Generated" },
                { icon: FaAward, number: "95%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <stat.icon className="text-3xl text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Continue with comprehensive management sections... */}
          </motion.div>
        );

      case "Red Riders Sports Complex":
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Enhanced Complex content with similar structure */}
            <motion.div variants={fadeIn} className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-green-400 to-teal-500 p-1 rounded-full">
                  <div className="bg-gray-900 rounded-full p-4">
                    <FaBuilding className="text-4xl text-green-400" />
                  </div>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
                Red Riders Sports Complex
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                State-of-the-art sports facility featuring world-class amenities, professional training infrastructure, and comprehensive support services for athletes of all levels.
              </p>
            </motion.div>

            {/* Add extensive complex content here following similar patterns */}
            <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              {[
                { icon: FaMapMarkerAlt, number: "25+", label: "Sports Facilities" },
                { icon: FaUsers, number: "15K+", label: "Annual Visitors" },
                { icon: FaClock, number: "24/7", label: "Operations" },
                { icon: FaAward, number: "5★", label: "Rated Facility" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 hover:border-green-500 transition-all duration-300">
                  <stat.icon className="text-3xl text-green-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Continue with comprehensive complex sections... */}
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6 text-center"
          >
            <FaTrophy className="text-6xl text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white">About Red Riders</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Discover the Red Riders legacy of sportsmanship, excellence, and community development. 
              Our organization is committed to transforming the sports landscape through innovative approaches, 
              professional management, and world-class facilities that inspire athletes and enthusiasts alike.
            </p>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-white bg-gradient-to-b from-gray-900 to-black">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-12"
          >
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                About {selectedProject?.projectName || "Red Riders"}
              </h1>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Excellence in Sports • Community Development • Professional Management
              </p>
            </div>

            <div className="text-lg text-gray-300 leading-relaxed">
              {getProjectContent()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="container mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default About;