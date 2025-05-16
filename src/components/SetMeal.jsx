import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import styles from "../style";
import { getAllMiningPackages } from "../api/publicService";
import { useNavigate } from "react-router-dom";

const SetMeal = () => {
  const navigate = useNavigate();
  const [miningPackages, setMiningPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleStart = (packageId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await getAllMiningPackages();
        setMiningPackages(data);
      } catch (err) {
        console.error("Error loading packages:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0f0f1c] to-[#111122] min-h-screen flex flex-col">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Hash Power Marketplace
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {miningPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="bg-gray-800 p-4 flex justify-center items-center">
                <img
                  src={`data:image/png;base64,${pkg.imageBase64}`}
                  alt="Mining machine"
                  className="h-32 w-auto object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-4 flex flex-col justify-between flex-grow text-white space-y-3">
                <h2 className="text-xl font-semibold text-cyan-400">
                  {pkg.packageName}
                </h2>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Contract Price</p>
                    <p className="font-bold">${pkg.contactPrice}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Contract Term</p>
                    <p className="font-bold">{pkg.contactTerm} days</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Daily Profit</p>
                    <p className="font-bold">${pkg.dailyProfit}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Total Profit</p>
                    <p className="font-bold">${pkg.totalProfit}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Settle Interests</p>
                    <p>{pkg.settleInterestTime} Hours</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Hash Power</p>
                    <p>0</p>
                  </div>
                </div>

                {/* Affiliate Bonus */}
                <div className="mt-4">
                  <p className="text-sm text-gray-400 mb-1">Affiliate Bonus</p>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((level) => (
                      <div key={level} className="text-center">
                        <div className="w-8 h-8 rounded-full border-2 bg-gradient-to-r from-yellow-400 to-orange-500 border-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                          {pkg[`level${level}Bonus`]}%
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          Level {level}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress */}
                <div className="relative h-2 bg-gray-800 rounded-full mt-4">
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                    style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                  ></div>
                </div>

                {/* Button */}
                <div className="text-right mt-4">
                  <button
                    onClick={() => handleStart(pkg.id)}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-full transition duration-200"
                  >
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SetMeal;
