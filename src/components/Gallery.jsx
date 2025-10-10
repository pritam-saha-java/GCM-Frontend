import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import { motion } from "framer-motion";
import styles from "../style";
import {
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaImage,
} from "react-icons/fa";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  // Hardcoded gallery data
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Team Collaboration",
      category: "team",
      description: "Our team working together on innovative solutions",
      date: "2024-01-15"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Project Launch",
      category: "events",
      description: "Successful launch of our flagship project",
      date: "2024-02-20"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Data Analytics",
      category: "work",
      description: "Advanced data analytics and insights dashboard",
      date: "2024-01-30"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Office Environment",
      category: "office",
      description: "Our modern and collaborative workspace",
      date: "2024-03-10"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Client Meeting",
      category: "clients",
      description: "Strategic discussion with our valued partners",
      date: "2024-02-05"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Tech Conference",
      category: "events",
      description: "Representing at the annual technology summit",
      date: "2024-03-18"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Team Building",
      category: "team",
      description: "Quarterly team building activities",
      date: "2024-01-25"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1565688534245-05d6dafa6f6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Product Development",
      category: "work",
      description: "Behind the scenes of our development process",
      date: "2024-02-28"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Innovation Lab",
      category: "office",
      description: "Our state-of-the-art innovation laboratory",
      date: "2024-03-05"
    }
  ];

  const categories = [
    { id: "all", name: "All Photos", count: galleryItems.length },
    { id: "team", name: "Team", count: galleryItems.filter(item => item.category === "team").length },
    { id: "events", name: "Events", count: galleryItems.filter(item => item.category === "events").length },
    { id: "work", name: "Work", count: galleryItems.filter(item => item.category === "work").length },
    { id: "office", name: "Office", count: galleryItems.filter(item => item.category === "office").length },
    { id: "clients", name: "Clients", count: galleryItems.filter(item => item.category === "clients").length },
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  const openImage = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Skeleton Loader
  const GallerySkeletonLoader = () => (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[...Array(9)].map((_, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden border border-gray-700/50 aspect-square"
          >
            <div className="h-full bg-gradient-to-r from-gray-700 to-gray-600 animate-pulse"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600/20 to-cyan-600/20 px-6 py-3 rounded-2xl border border-green-500/30 mb-4">
            <FaImage className="text-green-400 text-xl" />
            <span className="text-green-300 font-medium text-lg">
              Visual Journey
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mt-4">
            Red Riders Gallery
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Explore our journey through moments of innovation, collaboration, and success. 
            Each image tells a story of our growth and achievements.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === category.id
                    ? "bg-green-600/20 text-green-300 border-green-500/50 shadow-lg shadow-green-500/10"
                    : "bg-gray-800/50 text-gray-400 border-gray-600/50 hover:border-green-500/30 hover:text-green-200"
                }`}
              >
                <FaFilter className="text-xs" />
                {category.name}
                <span className="bg-gray-700/50 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 cursor-pointer aspect-square"
                onClick={() => openImage(item, index)}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 rounded-full p-2 backdrop-blur-sm">
                      <FaExpand className="text-white text-sm" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-1 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      {formatDate(item.date)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center mt-12"
          >
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-12">
              <FaImage className="text-gray-500 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                No Images Found
              </h3>
              <p className="text-gray-400">
                No gallery items match the selected filter. Try choosing a different category.
              </p>
            </div>
          </motion.div>
        )}
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-10 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm lg:left-8"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-10 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm lg:right-8"
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm lg:top-8 lg:right-8"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Image and Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-0">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {formatDate(selectedImage.date)}
                  </p>
                </div>

                <p className="text-gray-300 text-lg mb-6">
                  {selectedImage.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>
                    Image {currentIndex + 1} of {filteredItems.length}
                  </span>
                  <button
                    onClick={() => window.open(selectedImage.image, '_blank')}
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                  >
                    <FaExpand className="text-sm" />
                    View Full Size
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

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

export default Gallery;