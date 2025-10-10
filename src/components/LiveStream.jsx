import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../style";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaWifi,
  FaCalendar,
  FaClock,
} from "react-icons/fa";

const LiveStream = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const playerRef = useRef(null);
  const iframeContainerRef = useRef(null);

  const streamData = {
    title: "Red Riders vs Kolkata Knights - Live Match",
    description: "Premier League Cricket Match - Semi Finals",
    streamUrl: "https://www.youtube.com/embed/jfKfPfyJRdk?enablejsapi=1",
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Load YouTube API script
  useEffect(() => {
    const existingScript = document.getElementById("youtube-api");
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.id = "youtube-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    // YouTube API Ready callback
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        events: {
          onReady: () => {
            playerRef.current.playVideo();
          },
        },
      });
    };
  }, []);

  const handlePlayPause = () => {
    if (!playerRef.current) return;
    if (isPlaying) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();
    setIsPlaying(!isPlaying);
  };

  const handleVolumeToggle = () => {
    if (!playerRef.current) return;
    if (isMuted) playerRef.current.unMute();
    else playerRef.current.mute();
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    const iframe = document.getElementById("yt-player");
    if (iframe.requestFullscreen) iframe.requestFullscreen();
    else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
    else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <section className="py-16 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-red-800/20 px-6 py-3 rounded-2xl border border-red-500/30 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-300 font-medium text-lg">LIVE NOW</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mt-4">
              Live Stream
            </h1>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              Watch live matches, training sessions, and exclusive club events in real-time
            </p>
          </motion.div>

          {/* Layout */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          >
            {/* Player */}
            <div className="lg:col-span-3">
              <div className="relative bg-gray-800/50 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
                <div className="p-6 border-b border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">{streamData.title}</h2>
                    <p className="text-gray-400">{streamData.description}</p>
                  </div>
                  <div className="flex items-center gap-3 bg-red-600/20 px-3 py-2 rounded-lg border border-red-500/30">
                    <FaWifi className="text-red-400" />
                    <span className="text-red-300 font-medium">LIVE</span>
                  </div>
                </div>

                {/* Video */}
                <div className="relative aspect-video bg-black" ref={iframeContainerRef}>
                  <iframe
                    id="yt-player"
                    src={streamData.streamUrl}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="Red Riders Live Stream"
                  ></iframe>

                  {/* Controls */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={handlePlayPause}
                        className="p-3 bg-gray-800/70 hover:bg-red-700/70 rounded-full transition-all backdrop-blur-md"
                      >
                        {isPlaying ? (
                          <FaPause className="text-white text-lg" />
                        ) : (
                          <FaPlay className="text-white text-lg" />
                        )}
                      </button>

                      <button
                        onClick={handleVolumeToggle}
                        className="p-3 bg-gray-800/70 hover:bg-red-700/70 rounded-full transition-all backdrop-blur-md"
                      >
                        {isMuted ? (
                          <FaVolumeMute className="text-white text-lg" />
                        ) : (
                          <FaVolumeUp className="text-white text-lg" />
                        )}
                      </button>
                    </div>

                    <button
                      onClick={handleFullscreen}
                      className="p-3 bg-gray-800/70 hover:bg-red-700/70 rounded-full transition-all backdrop-blur-md"
                    >
                      <FaExpand className="text-white text-lg" />
                    </button>
                  </div>
                </div>

                {/* Match Details */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Match Details</h3>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center gap-3">
                        <FaCalendar className="text-red-400" /> March 15, 2024
                      </div>
                      <div className="flex items-center gap-3">
                        <FaClock className="text-red-400" /> 2:30 PM – 6:30 PM IST
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Teams</h3>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center font-bold">
                          RR
                        </div>
                        <p className="text-sm mt-1">Red Riders</p>
                      </div>
                      <div className="text-gray-400 text-lg font-bold">VS</div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center font-bold">
                          KK
                        </div>
                        <p className="text-sm mt-1">Kolkata Knights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                variants={fadeIn}
                className="bg-gray-800/50 rounded-2xl p-6 shadow-xl border border-gray-700/50 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold mb-4">Upcoming Streams</h3>
                {[
                  { title: "Training Session", date: "Tomorrow, 6 AM", type: "Training" },
                  { title: "Junior League Finals", date: "Mar 18, 3 PM", type: "Tournament" },
                  { title: "Coaching Workshop", date: "Mar 20, 10 AM", type: "Workshop" },
                ].map((stream, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-red-500/30 transition-all cursor-pointer mb-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-600/20 rounded-lg border border-red-500/30">
                        <FaCalendar className="text-red-400 text-sm" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{stream.title}</h4>
                        <p className="text-gray-400 text-xs">{stream.date}</p>
                        <span className="inline-block mt-1 px-2 py-1 bg-gray-600/50 rounded text-xs text-gray-300">
                          {stream.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mt-10">
        <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <Footer />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LiveStream;
