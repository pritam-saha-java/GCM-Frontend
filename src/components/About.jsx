import React from "react";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import aboutImg from "../assets/aboutImg.png";
import { FaGlobe, FaShieldAlt, FaHeadset, FaBitcoin } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations

const About = () => {
  // Animation variants for fade-in effect
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
              alt="About GoCloudMining"
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
              About GoCloudMining
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Founded in August 2016, GoCloudMining is a global leader in cryptocurrency cloud mining, equipment distribution, and innovative mining solutions. Headquartered in Newport, UK, we empower users worldwide to mine digital assets effortlessly using clean energy and cutting-edge technology.
            </p>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="container mx-auto space-y-16">
          {[
            {
              title: "Who We Are",
              description:
                "GoCloudMining pioneers cloud mining with state-of-the-art facilities powered by sustainable energy. Our platform simplifies cryptocurrency mining, making it accessible for beginners and experts alike, while delivering exceptional performance and reliability.",
            },
            {
              title: "Our Global Reach",
              description:
                "With over 60 mining farms across Eastern Europe, North America, Asia, and beyond, we serve 5 million users in 180+ countries. Our global network ensures efficiency, scalability, and trust, redefining crypto mining for a worldwide audience.",
            },
            {
              title: "Our Expert Team",
              description:
                "Our team of blockchain, finance, and cybersecurity experts brings unparalleled expertise to every project. Collaborating across disciplines, we ensure security, transparency, and profitability for our global community of miners.",
            },
            {
              title: "Our Vision",
              description:
                "We aim to revolutionize cloud mining with smarter, greener, and user-centric solutions. By leveraging advanced technology and fostering long-term partnerships, we’re setting the global standard for digital currency mining.",
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="md:w-1/3">
                <h3 className="text-3xl font-bold text-yellow-400">
                  {section.title}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-300 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trusted Platform */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
        >
          Why Choose GoCloudMining?
        </motion.h2>
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaGlobe className="text-5xl text-yellow-500" />,
              text: "Global data centers ensure secure, uninterrupted mining with maximum efficiency.",
            },
            {
              icon: <FaBitcoin className="text-5xl text-yellow-500" />,
              text: "Fast, automated payouts let you start earning from day one with minimal delays.",
            },
            {
              icon: <FaShieldAlt className="text-5xl text-yellow-500" />,
              text: "Top-tier security measures protect your assets and data 24/7.",
            },
            {
              icon: <FaHeadset className="text-5xl text-yellow-500" />,
              text: "24/7 dedicated support to assist with your questions and needs.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-6 bg-gray-800/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default About;