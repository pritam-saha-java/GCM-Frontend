import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Cloud Mining?",
      answer:
        "Cloud mining is a mechanism that uses rented cloud computing power to mine cryptocurrencies such as Bitcoin without directly installing and running the hardware and software. GoCloudMining is a leading global cloud computing platform that provides users with a range of cloud mining solutions. The free tier allows users to enjoy the service with just one click.",
    },
    {
      question: "What is GoCloudMining?",
      answer:
        "GoCloudMining is a cloud mining platform by GoCloudMining, a globally recognized leader in cryptocurrency mining. Founded in 2016 and headquartered in Newport, UK, we provide accessible, secure, and efficient mining solutions to over 5 million users across 180+ countries.",
    },
    {
      question: "Is it legal?",
      answer:
        "Yes, cloud mining with GoCloudMining is legal in most jurisdictions. However, regulations around cryptocurrency mining vary by country, so we recommend checking local laws to ensure compliance.",
    },
    {
      question: "How does the GoCloudMining work?",
      answer:
        "GoCloudMining operates by leveraging our global network of over 60 mining farms powered by clean energy. Users sign up, choose a mining plan, and our platform handles the mining process, delivering profits directly to your account with minimal effort.",
    },
    {
      question: "What are the advantages of GoCloudMining?",
      answer:
        "GoCloudMining offers several benefits: no need for personal hardware, low operational costs due to clean energy usage, 24/7 support, industry-leading security, automated payouts, and accessibility for beginners and experts alike.",
    },
    {
      question: "How to earn passive income through GoCloudMining?",
      answer:
        "To earn passive income, sign up for a GoCloudMining account, select a mining plan that suits your budget, and let our platform mine cryptocurrencies for you. Profits are automatically deposited into your account, which you can withdraw or reinvest.",
    },
    {
      question: "How to convert money into USDT?",
      answer:
        "GoCloudMining allows you to withdraw your earnings in various cryptocurrencies, including Bitcoin. To convert your earnings to USDT, withdraw your funds to a supported cryptocurrency exchange (like Binance or Coinbase), and trade your mined coins for USDT on the exchange.",
    },
    {
      question: "How to earn income without investing?",
      answer:
        "GoCloudMining offers a free tier that allows users to start mining with minimal setup. Additionally, you can participate in our referral program to earn bonuses by inviting friends to join the platform.",
    },
    {
      question: "Is there any investment guarantee or are there certain risks I should be aware of?",
      answer:
        "While GoCloudMining uses advanced technology and security measures to maximize profitability, cryptocurrency mining carries inherent risks, such as market volatility and regulatory changes. We do not guarantee profits, but we strive to provide a stable and secure platform for our users.",
    },
    {
      question: "What payment system can I use to pay?",
      answer:
        "GoCloudMining supports payments via major cryptocurrencies like Bitcoin, Ethereum, and USDT. We also accept payments through secure third-party payment processors for fiat currency in select regions.",
    },
    {
      question: "What are the minimum deposit and withdrawal amounts?",
      answer:
        "The minimum deposit on GoCloudMining is $10 (or equivalent in cryptocurrency), and the minimum withdrawal amount is $50 (or equivalent). These amounts may vary based on the cryptocurrency used and market conditions.",
    },
    {
      question: "How to withdraw the profit earned?",
      answer:
        "To withdraw profits, log into your GoCloudMining account, navigate to the withdrawal section, select your preferred cryptocurrency or payment method, and enter the amount. Withdrawals are processed within 24-48 hours, depending on the blockchain network.",
    },
    {
      question: "How many cryptocurrencies can I buy?",
      answer:
        "GoCloudMining focuses on mining popular cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), and Bitcoin Cash (BCH). The number of coins you can 'buy' depends on your mining plan and market availability when withdrawing profits.",
    },
    {
      question: "When will my daily mining income be settled?",
      answer:
        "Daily mining income on GoCloudMining is settled automatically at 00:00 UTC each day. You can view your earnings in your account dashboard and withdraw them once the minimum threshold is met.",
    },
    {
      question: "What are the withdrawal fees?",
      answer:
        "Withdrawal fees on GoCloudMining vary depending on the cryptocurrency and network used. For example, Bitcoin withdrawals typically incur a small network fee (e.g., 0.0005 BTC). Exact fees are displayed during the withdrawal process.",
    },
    {
      question: "How to download GoCloudMining app?",
      answer:
        "GoCloudMining offers a mobile app for iOS and Android. Visit our official website, navigate to the 'Download' section, and follow the links to the App Store or Google Play Store to download the app securely.",
    },
    {
      question: "Can I have more than one account?",
      answer:
        "No, GoCloudMining allows only one account per user to ensure fair usage and prevent abuse. Multiple accounts may result in suspension or termination of your account.",
    },
    {
      question: "What do I do if I forget my GoCloudMining password?",
      answer:
        "If you forget your password, click the 'Forgot Password' link on the login page. Enter your registered email address, and we’ll send you a link to reset your password securely.",
    },
    {
      question: "Regarding the issue of GoCloudMining withdrawal costs?",
      answer:
        "Withdrawal costs on GoCloudMining include network fees charged by the blockchain, which vary based on the cryptocurrency and network congestion. We strive to keep our platform fees minimal, and all costs are transparently displayed during withdrawal.",
    },
    {
      question: "Mining pool payment fees and rules?",
      answer:
        "GoCloudMining operates its own mining pools with a PPS (Pay Per Share) payment model. We charge a small pool fee (typically 2-4%) to cover operational costs. Detailed rules are available in the 'Mining Pool' section of your account dashboard.",
    },
    {
      question: "What is the minimum mining contract duration?",
      answer:
        "The minimum mining contract duration on GoCloudMining is 1 day for the free tier, while paid plans start at 30 days. You can choose a contract duration that best suits your needs.",
    },
    {
      question: "How does GoCloudMining ensure security?",
      answer:
        "GoCloudMining employs industry-leading security measures, including cold storage for funds, two-factor authentication (2FA), encrypted data transmission, and regular security audits to protect your assets and personal information.",
    },
    {
      question: "Can I upgrade my mining plan later?",
      answer:
        "Yes, you can upgrade your mining plan at any time through your account dashboard. Simply select a higher-tier plan, pay the difference, and your mining power will be upgraded instantly.",
    },
    {
      question: "If you have other questions, how do you contact the GoCloudMining customer service support?",
      answer:
        "You can reach GoCloudMining’s customer support team 24/7 via email at support@gocloudmining.com, through the live chat feature on our website, or by submitting a ticket in your account dashboard.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col text-white bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Frequently Asked Questions
          </h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-lg sm:text-xl font-semibold text-gray-100 hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl">
                    {openIndex === index ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-5 text-gray-300 text-base leading-relaxed"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="container mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default FAQ;