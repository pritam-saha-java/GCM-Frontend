import { Link } from "react-router-dom";
import styles from "../style";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Brand Section */}
        <div className="flex flex-col">
          <div className="flex flex-col mb-6">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl bg-gradient-to-r from-red-600 via-red-400 to-red-300 bg-clip-text text-transparent">
              Red Riders
            </h2>
            <p className="font-poppins font-semibold text-xl text-gray-300 mt-1">
              Sports Club
            </p>
          </div>
          <p className={`${styles.paragraph} text-gray-400 max-w-md`}>
            Kolkata's premier sports destination with state-of-the-art facilities, 
            expert coaching, and a vibrant community of passionate athletes.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col">
          <h4 className="font-poppins font-semibold text-xl text-white mb-6 pb-2 border-b border-red-500/30">
            Get in Touch
          </h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <FaMapMarkerAlt className="text-red-400 mt-1 flex-shrink-0 text-lg" />
              <div>
                <p className="font-poppins font-medium text-white text-sm">Address</p>
                <p className="font-poppins text-gray-400 text-sm mt-1">
                  Red Riders Sports Club, [Insert Address], Kolkata, India
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <FaPhone className="text-red-400 flex-shrink-0 text-lg" />
              <div>
                <p className="font-poppins font-medium text-white text-sm">Phone</p>
                <p className="font-poppins text-gray-400 text-sm mt-1">
                  +91-9874723221
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <FaEnvelope className="text-red-400 flex-shrink-0 text-lg" />
              <div>
                <p className="font-poppins font-medium text-white text-sm">Email</p>
                <p className="font-poppins text-gray-400 text-sm mt-1">
                  redriderssportsclub2023@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Quick Links */}
        <div className="flex flex-col">
          <h4 className="font-poppins font-semibold text-xl text-white mb-6 pb-2 border-b border-red-500/30">
            Connect With Us
          </h4>
          
          {/* Social Media */}
          <div className="mb-6">
            <p className="font-poppins text-gray-400 text-sm mb-4">
              Follow us for updates and highlights:
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://instagram.com/RedRidersSportsClub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-red-600/20 border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaInstagram className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-poppins font-medium text-white text-sm">Instagram</p>
                  <p className="font-poppins text-gray-400 text-xs">@RedRidersSportsClub</p>
                </div>
              </a>
              
              <a 
                href="https://facebook.com/RedRidersSportsClub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-blue-600/20 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaFacebook className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-poppins font-medium text-white text-sm">Facebook</p>
                  <p className="font-poppins text-gray-400 text-xs">Red Riders Sports Club</p>
                </div>
              </a>
              
              <a 
                href="https://youtube.com/RedRidersBoundaryBanter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-red-600/20 border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="p-2 bg-gradient-to-br from-red-600 to-red-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaYoutube className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-poppins font-medium text-white text-sm">YouTube</p>
                  <p className="font-poppins text-gray-400 text-xs">Red Riders Boundary Banter</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Row */}
      <div className="flex flex-wrap justify-center gap-6 py-6 border-t border-gray-700/50">
        <Link to="/about" className="font-poppins text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm">
          About
        </Link>
        <Link to="/event" className="font-poppins text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm">
          Events
        </Link>
        <Link to="/management" className="font-poppins text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm">
          Managements
        </Link>
        <Link to="/members" className="font-poppins text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm">
          Members
        </Link>
        <Link to="/contact" className="font-poppins text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm">
          Contact
        </Link>
      </div>

      {/* Copyright */}
      <div className="w-full flex justify-center items-center pt-6 border-t border-gray-700/50">
        <p className="font-poppins font-normal text-center text-gray-400 text-sm">
          Copyright Ⓒ 2025 Red Riders Sports Club. All Rights Reserved.
        </p>
      </div>
    </div>
  </section>
);

export default Footer;