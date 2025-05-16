import React from "react";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import { motion } from "framer-motion";
import { FaUserPlus, FaShareAlt, FaDollarSign } from "react-icons/fa";
import Button from "./Button";

const Affiliate = () => {
  // Animation variants for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex flex-col text-white bg-gradient-to-br from-[#0f0f1c] to-[#111122]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#0f0f1c]/90 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      {/* Affiliate Program Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
          >
            GoCloudMining Affiliate Program
          </motion.h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              1. Provide attractive incentives with the opportunity to make money at zero cost. By inviting new users to join GoCloudMining, you can become an affiliate partner and enjoy a rewarding plan without making a deposit. As long as the user you invite purchases the platform contract, you will receive a generous referral reward of up to 3%. The commission is automatically settled by the system to your platform account, and you will benefit forever after one invitation!
            </p>
            <p>
              2. You can apply for a professional alliance partnership and receive additional promotional income every month!
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                Invite 10 new users to register and invest to the VIP1 and above, and you can get a monthly salary of 300 US dollars.
              </li>
              <li>
                Invite 30 new users to register and invest to the VIP1 and above, and you can get a monthly salary of 1,000 US dollars.
              </li>
              <li>
                Invite 50 new users to register and invest to the VIP1 and above, and you can get a monthly salary of 3,000 US dollars.
              </li>
              <li>
                Invite 100 new users to register and invest to the VIP1 and above, and you can get a monthly salary of 7,000 US dollars.
              </li>
              <li>
                Invite 200 new users to register and invest to the VIP1 and above, and you can get a monthly salary of 15,000 US dollars.
              </li>
            </ul>
            <p>
              <strong>Statement:</strong> Combine the online customer service on the 28th of each month to apply, and a fixed reward will be issued on the 3rd of the next month. The more you invite, the more you get!
            </p>
          </motion.div>
        </div>
      </section>

      {/* How Does It Work Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-orange-400"
          >
            How Does It Work?
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUserPlus className="text-5xl text-cyan-400" />,
                title: "Sign Up",
                description: "Sign up and get a referral link.",
              },
              {
                icon: <FaShareAlt className="text-5xl text-cyan-400" />,
                title: "Invite New Users",
                description: "Invite your friends via referral link.",
              },
              {
                icon: <FaDollarSign className="text-5xl text-cyan-400" />,
                title: "Earn Commissions",
                description: "New user signs up and purchases. You get 3% off their purchase order.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center p-6 bg-gray-800/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join With Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
          >
            Join With Us
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Achieve financial freedom easily. Benefit forever with one invitation! GoCloudMining referral rewards are divided into three levels: first-level referral 3%, second-level referral rewards 1.5%, third-level referral rewards 0.5%. Become an alliance partner and you are the boss. You need to have your own deposit to enjoy the benefits of the alliance program!
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>First Level:</strong> Register for investment (A) invites (B) to register for investment, (A) can get 3% (300 US dollars) commission.
              </li>
              <li>
                <strong>Second Level:</strong> (B) invites (C) to register for investment, (A) can get 1.5% (150 US dollars) commission.
              </li>
              <li>
                <strong>Third Level:</strong> (C) invites (D) to register for investment, (A) can get 0.5% (50 US dollars) commission.
              </li>
            </ul>
            <p>
              For example: If (A) invites (B) and (B) invests and subscribes to $10,000, (A) can get 3% (300 US dollars) commission.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-10"
          >
            <Button />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f1c] py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="container mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Affiliate;