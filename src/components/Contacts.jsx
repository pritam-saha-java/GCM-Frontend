import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import { motion } from "framer-motion";
import styles from "../style";
import { 
  FaUsers, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaFacebook, 
  FaYoutube,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaTag,
  FaComment
} from "react-icons/fa";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 5000);
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/RedRidersSportsClub",
      color: "from-purple-500 to-pink-500",
      handle: "@RedRidersSportsClub"
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://facebook.com/RedRidersSportsClub",
      color: "from-blue-600 to-blue-800",
      handle: "Red Riders Sports Club"
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/@RedRidersBoundaryBanter",
      color: "from-red-600 to-red-800",
      handle: "Red Riders Boundary Banter"
    }
  ];

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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Connect with the Red Riders community. We're here to help you become part of our vibrant sports family.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              {/* Community Directory Card */}

              {/* Contact Information Card */}
              <motion.div
                variants={cardVariants}
                className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm p-8 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-600/20 rounded-xl border border-red-500/30">
                      <FaEnvelope className="text-red-400 text-2xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    We'd love to hear from you! Whether you have questions about membership, upcoming events, or want to collaborate with Red Riders Sports Club, our team is here to help.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-red-500/30 transition-all duration-300">
                      <div className="p-2 bg-red-600/20 rounded-lg border border-red-500/30">
                        <FaMapMarkerAlt className="text-red-400 text-lg" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Address</p>
                        <p className="text-white font-medium">Red Riders Sports Club, [Insert Address], Kolkata, India</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-green-500/30 transition-all duration-300">
                      <div className="p-2 bg-green-600/20 rounded-lg border border-green-500/30">
                        <FaPhone className="text-green-400 text-lg" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <p className="text-white font-medium">+91-9874723221</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-blue-500/30 transition-all duration-300">
                      <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-500/30">
                        <FaEnvelope className="text-blue-400 text-lg" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-white font-medium">redriderssportsclub2023@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Media Card */}
              <motion.div
                variants={cardVariants}
                className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl shadow-2xl overflow-hidden border border-purple-500/30 backdrop-blur-sm p-8 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <FaUsers className="text-purple-400" />
                    Connect Online
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Follow us on social media for updates, event announcements, and highlights:
                  </p>

                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={cardVariants}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${social.color} shadow-lg`}>
                          <social.icon className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold">{social.name}</p>
                          <p className="text-gray-400 text-sm">{social.handle}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              variants={cardVariants}
              className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm p-8 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-600/20 rounded-xl border border-green-500/30">
                    <FaPaperPlane className="text-green-400 text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-green-600/20 rounded-full border border-green-500/30">
                        <FaCheckCircle className="text-green-400 text-4xl" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      {/* Name Field */}
                      <div>
                        <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2">
                          <FaUser className="text-blue-400" />
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:bg-gray-700/70 transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2">
                          <FaEnvelope className="text-blue-400" />
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:bg-gray-700/70 transition-all duration-300"
                          placeholder="Enter your email address"
                        />
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2">
                          <FaTag className="text-blue-400" />
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:bg-gray-700/70 transition-all duration-300"
                          placeholder="What is this regarding?"
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2">
                          <FaComment className="text-blue-400" />
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows="6"
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:bg-gray-700/70 transition-all duration-300 resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/25 disabled:shadow-none flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-lg" />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-gray-400 text-sm text-center mt-6">
                      We aim to respond to all inquiries promptly and ensure you have the information you need to enjoy the best of Red Riders Sports Club.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer with proper spacing */}
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

export default Contacts;