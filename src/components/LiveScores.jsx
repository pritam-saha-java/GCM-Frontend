import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../style";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import {
  FaVolleyballBall,
  FaFutbol,
  FaBasketballBall,
  FaHockeyPuck,
  FaSync,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdOutlineSportsCricket, MdSportsTennis } from "react-icons/md";

const LiveScores = () => {
  const [activeSport, setActiveSport] = useState("all");
  const [refreshing, setRefreshing] = useState(false);

  const sports = [
    { id: "cricket", name: "Cricket", icon: MdOutlineSportsCricket, color: "from-red-600 to-red-800" },
    { id: "football", name: "Football", icon: FaFutbol, color: "from-green-600 to-green-800" },
    { id: "basketball", name: "Basketball", icon: FaBasketballBall, color: "from-orange-600 to-orange-800" },
    { id: "tennis", name: "Tennis", icon: MdSportsTennis, color: "from-blue-600 to-blue-800" },
    { id: "hockey", name: "Hockey", icon: FaHockeyPuck, color: "from-yellow-600 to-yellow-800" },
    { id: "volleyball", name: "Volleyball", icon: FaVolleyballBall, color: "from-purple-600 to-purple-800" },
  ];

  const liveMatches = [
    {
      id: 1,
      sport: "cricket",
      league: "Premier League",
      teamA: { name: "Red Riders", score: "187/4", overs: "18.3" },
      teamB: { name: "Kolkata Knights", score: "145/6", overs: "15.2" },
      status: "LIVE",
      time: "38th Over",
      venue: "National Stadium",
      update: "Just now"
    },
    {
      id: 2,
      sport: "football",
      league: "Champions League",
      teamA: { name: "United FC", score: "2" },
      teamB: { name: "City Rangers", score: "1" },
      status: "LIVE",
      time: "72'",
      venue: "Grand Arena",
      update: "2 mins ago"
    },
    {
      id: 3,
      sport: "basketball",
      league: "NBA Finals",
      teamA: { name: "Lakers", score: "98" },
      teamB: { name: "Bulls", score: "95" },
      status: "LIVE",
      time: "Q4 - 03:45",
      venue: "Staples Center",
      update: "Just now"
    },
    {
      id: 4,
      sport: "cricket",
      league: "T20 Blast",
      teamA: { name: "Mumbai Stars", score: "165/8", overs: "20.0" },
      teamB: { name: "Delhi Giants", score: "89/3", overs: "10.2" },
      status: "LIVE",
      time: "11th Over",
      venue: "Wankhede Stadium",
      update: "5 mins ago"
    },
    {
      id: 5,
      sport: "tennis",
      league: "Wimbledon",
      teamA: { name: "Nadal", score: "6-4, 3-2" },
      teamB: { name: "Federer", score: "4-6, 2-3" },
      status: "LIVE",
      time: "2nd Set",
      venue: "Centre Court",
      update: "Just now"
    }
  ];

  const completedMatches = [
    {
      id: 6,
      sport: "football",
      league: "Premier League",
      teamA: { name: "Arsenal", score: "3" },
      teamB: { name: "Chelsea", score: "1" },
      status: "COMPLETED",
      venue: "Emirates Stadium",
      update: "Final"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const refreshScores = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const filteredMatches = activeSport === "all" 
    ? [...liveMatches, ...completedMatches]
    : [...liveMatches, ...completedMatches].filter(match => match.sport === activeSport);

  const getSportIcon = (sportId) => {
    const sport = sports.find(s => s.id === sportId);
    return sport ? sport.icon : MdOutlineSportsCricket;
  };

  const getSportColor = (sportId) => {
    const sport = sports.find(s => s.id === sportId);
    return sport ? sport.color : "from-gray-600 to-gray-800";
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
                <span className="text-red-300 font-medium text-lg">LIVE UPDATES</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mt-4">
              Live Scores
            </h1>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              Real-time scores and updates from all ongoing matches across different sports
            </p>
          </motion.div>

          {/* Sports Filter */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <button
              onClick={() => setActiveSport("all")}
              className={`px-6 py-3 rounded-xl border backdrop-blur-sm transition-all ${
                activeSport === "all"
                  ? "bg-gradient-to-r from-red-600/20 to-red-800/20 border-red-500/30 text-white"
                  : "bg-gray-800/50 border-gray-700/50 text-gray-400 hover:text-white"
              }`}
            >
              All Sports
            </button>
            {sports.map((sport) => {
              const Icon = sport.icon;
              return (
                <button
                  key={sport.id}
                  onClick={() => setActiveSport(sport.id)}
                  className={`px-6 py-3 rounded-xl border backdrop-blur-sm transition-all flex items-center gap-3 ${
                    activeSport === sport.id
                      ? `bg-gradient-to-r ${sport.color}/20 border-${sport.color.split('-')[1]}-500/30 text-white`
                      : "bg-gray-800/50 border-gray-700/50 text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon className="text-lg" />
                  {sport.name}
                </button>
              );
            })}
          </motion.div>

          {/* Refresh Button */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex justify-end mb-6"
          >
            <button
              onClick={refreshScores}
              disabled={refreshing}
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 rounded-xl border border-red-500/30 backdrop-blur-sm hover:from-red-700 hover:to-red-900 transition-all flex items-center gap-3 disabled:opacity-50"
            >
              <FaSync className={`text-lg ${refreshing ? "animate-spin" : ""}`} />
              {refreshing ? "Refreshing..." : "Refresh Scores"}
            </button>
          </motion.div>

          {/* Live Scores Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filteredMatches.map((match) => {
              const SportIcon = getSportIcon(match.sport);
              const sportColor = getSportColor(match.sport);
              const isLive = match.status === "LIVE";
              const isCompleted = match.status === "COMPLETED";

              return (
                <motion.div
                  key={match.id}
                  variants={fadeIn}
                  className="bg-gray-800/50 rounded-2xl p-6 shadow-xl border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/70 transition-all"
                >
                  {/* Match Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-gradient-to-r ${sportColor} rounded-lg`}>
                        <SportIcon className="text-white text-sm" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{match.league}</h3>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <FaMapMarkerAlt />
                          <span>{match.venue}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isLive 
                        ? "bg-red-600/20 text-red-300 border border-red-500/30" 
                        : "bg-green-600/20 text-green-300 border border-green-500/30"
                    }`}>
                      {isLive && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse inline-block mr-1"></span>}
                      {match.status}
                    </div>
                  </div>

                  {/* Teams and Scores */}
                  <div className="space-y-4">
                    {/* Team A */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
                          {match.teamA.name.split(' ').map(w => w[0]).join('')}
                        </div>
                        <span className="font-medium">{match.teamA.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{match.teamA.score}</div>
                        {match.teamA.overs && (
                          <div className="text-xs text-gray-400">{match.teamA.overs} overs</div>
                        )}
                      </div>
                    </div>

                    {/* Team B */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
                          {match.teamB.name.split(' ').map(w => w[0]).join('')}
                        </div>
                        <span className="font-medium">{match.teamB.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{match.teamB.score}</div>
                        {match.teamB.overs && (
                          <div className="text-xs text-gray-400">{match.teamB.overs} overs</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Match Footer */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700/50">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <FaClock />
                      <span>{match.time}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Updated: {match.update}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* No Matches Message */}
          {filteredMatches.length === 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center py-16"
            >
              <div className="text-gray-500 text-lg">
                No matches found for {activeSport === "all" ? "any sport" : sports.find(s => s.id === activeSport)?.name}
              </div>
              <p className="text-gray-600 mt-2">
                Check back later for live matches
              </p>
            </motion.div>
          )}
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

export default LiveScores;