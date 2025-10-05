import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import { motion } from "framer-motion";
import styles from "../style";
import {
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaExpand,
} from "react-icons/fa";
import { getEventsByProject } from "../api/eventsService";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [projectName, setProjectName] = useState("");

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

  // Fetch project name & events
  useEffect(() => {
    const fetchData = async () => {
      try {
        const project = localStorage.getItem("selectedProject");
        if (!project) {
          setError("No project selected");
          setLoading(false);
          return;
        }

        const projectData = JSON.parse(project);
        setProjectName(projectData.name || projectData.projectName || "Our Project");

        const projectId = projectData.id;
        const eventsData = await getEventsByProject(projectId);

        // Convert byte[] image data (Base64) to proper image src
        const formattedEvents = eventsData.map((ev) => ({
          ...ev,
          image: ev.image
            ? `data:image/jpeg;base64,${ev.image}`
            : "https://via.placeholder.com/400x250?text=No+Image",
          time:
            ev.startTime && ev.endTime
              ? `${ev.startTime} - ${ev.endTime}`
              : ev.startTime || ev.endTime || "—",
        }));

        setEvents(formattedEvents);
      } catch (err) {
        setError(err.message || "Failed to fetch events");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Skeleton Loader
  const EventSkeletonLoader = () => (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden border border-gray-700/50"
          >
            <div className="h-48 bg-gradient-to-r from-gray-700 to-gray-600 animate-pulse"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-700 rounded-lg mb-3 animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded-lg mb-2 animate-pulse w-1/2"></div>
              <div className="flex gap-4 mt-4">
                <div className="h-4 bg-gray-700 rounded-lg animate-pulse w-1/3"></div>
                <div className="h-4 bg-gray-700 rounded-lg animate-pulse w-1/3"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-6 py-3 rounded-2xl border border-purple-500/30 mb-4">
            <FaCalendar className="text-purple-400 text-xl" />
            <span className="text-purple-300 font-medium text-lg">
              {projectName || "Our Events"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mt-4">
            Upcoming Events
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Discover our latest events, conferences, and gatherings. Join us in
            shaping the future together.
          </p>
        </motion.div>

        {/* Events Grid */}
        {loading ? (
          <EventSkeletonLoader />
        ) : error ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
              <div className="text-red-400 text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-semibold text-red-300 mb-2">
                Error Loading Events
              </h3>
              <p className="text-red-200">{error}</p>
            </div>
          </motion.div>
        ) : events.length === 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-12">
              <FaCalendar className="text-gray-500 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                No Events Scheduled
              </h3>
              <p className="text-gray-400">
                Check back later for upcoming events and activities.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                        {event.category || "General"}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 rounded-full p-2 backdrop-blur-sm">
                        <FaExpand className="text-white text-sm" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                      {event.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {event.description || "No description provided."}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-gray-300">
                        <FaCalendar className="text-purple-400 flex-shrink-0" />
                        <span>{formatDate(event.date)}</span>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-gray-300">
                        <FaClock className="text-blue-400 flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-gray-300">
                        <FaMapMarkerAlt className="text-green-400 flex-shrink-0" />
                        <span className="line-clamp-1">
                          {event.location || "—"}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm"
              >
                ✕
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedEvent.category || "General"}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedEvent.title}
              </h2>

              <p className="text-gray-300 text-lg mb-6">
                {selectedEvent.description || "No description available."}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <FaCalendar className="text-purple-400 text-xl" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p>{formatDate(selectedEvent.date)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FaClock className="text-blue-400 text-xl" />
                  <div>
                    <p className="font-semibold">Time</p>
                    <p>{selectedEvent.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FaMapMarkerAlt className="text-green-400 text-xl" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>{selectedEvent.location || "—"}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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

export default Events;
