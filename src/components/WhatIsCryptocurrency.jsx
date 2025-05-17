import React from "react";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import { motion } from "framer-motion";

const WhatIsCryptocurrency = () => {
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

      {/* What is Cryptocurrency Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            What is Cryptocurrency
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-8 text-gray-300 text-lg leading-relaxed"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">What are Cryptocurrencies?</h2>
              <p>
                Cryptocurrency is a digital currency that exists on a decentralized system called blockchain. Cryptocurrency is a general term for all digital currencies. These currencies can be obtained by using a crypto wallet.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">What is the Relationship Between Cryptocurrency and Blockchain?</h2>
              <p>
                In 2016, Fabricio Santos described the concept of blockchain as a bank vault filled with rows of glass safes, where everyone can see the contents of the safes but cannot access them. He continued with this metaphor to explain that when a person opens a new safe, they receive a key that is unique to that safe, but duplicating the key does not duplicate the contents of the safe; it only provides access.
              </p>
              <p>
                What is unique about blockchain technology is that all transactions are permanently engraved in the blockchain and can be viewed by anyone at any time - blockchain records can only be added, and the recorded history cannot be modified. Cryptocurrencies rely on the blockchain's decentralized network of computers to verify and confirm their ownership.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">Advantages of Cryptocurrency</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">Secure and Instant Transactions</h3>
                <p>
                  Cryptocurrency is rooted in privacy. This means that you do not need to provide your personal information to every entity you transact with. Using cryptocurrency protects your financial and personal data because it is not shared with other parties who may want to access your information (think: advertisers and other entities you are not interacting with). Cryptocurrency also allows for near-instant transactions. Since users can instantly access the contents of their crypto wallets, it reduces the time people usually have to wait 3-4 days to transfer money from traditional banks.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">Choose to Self-Custody Your Cryptocurrency</h3>
                <p>
                  The traditional banking system requires you to trust an entity that holds your funds. Whether it's a bank or another payment service, these centralized entities hold and protect your money, but they may also use it in other ways. They may also close, change rules, or change policies that affect your ability to use or access your funds.
                </p>
                <p>
                  One benefit of cryptocurrency is that it enables you to eliminate the middleman by using decentralized finance. In decentralized finance, transactions are “trustless” because they do not require you to trust someone to conduct a transaction. Likewise, because transactions are conducted by a network of computers, they are “permissionless” because they do not require permission from a third party.
                </p>
                <p>
                  Non-custodial wallets give users self-custody of their cryptocurrencies and gave rise to DeFi, which requires wallet owners to protect their funds but also allows them to access their funds at any time.
                </p>
                <p>
                  But cryptocurrencies are not completely free of intermediaries. Cryptocurrencies purchased and stored on centralized exchanges like Coinbase and Binance are subject to a system more akin to traditional centralized banks. These organizations act as middlemen while providing additional convenience to customers who may not want the responsibility of a non-custodial wallet.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">Anonymity and Privacy</h3>
                <p>
                  Privacy is often touted as one of the most important features of cryptocurrency. Transactions made with cryptocurrency are considered “anonymous.” They are not completely anonymous, but they do not require the use of a person’s government name or other identifying information. Instead, all transactions are immutably tied to your wallet address. Having confidential and private access to your crypto wallet is a useful tool, especially for those who belong to historically marginalized groups.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">Things to be Aware of When Using Cryptocurrency</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">New and Evolving</h3>
                <p>
                  While blockchain technology was developed in the 90s, Bitcoin (the first cryptocurrency) wasn’t first launched until 2009. The technology is still in its infancy, which means everyone is learning how to use it at the same time (which can make all the difference), but it also means everyone is going through growing pains at the same time.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">It is Decentralized</h3>
                <p>
                  Due to the decentralized nature of blockchain technology, there is no central bank that can solve any problems that may arise. This is especially true if you choose a non-custodial wallet over a custodial wallet. To recap, there are two types of crypto wallets: custodial (“custodial”) and non-custodial. Custodial wallets are managed by a third-party company, while non-custodial wallets are not. Non-custodial wallets give you complete control and full responsibility, which is why it is even more important to protect your access keys.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">How are People Using Cryptocurrency Now?</h2>
              <p>
                The breadth and usage of cryptocurrencies has grown significantly since Bitcoin was introduced in 2009. Cryptocurrencies can now be used to purchase everything from NFTs (non-fungible tokens) on OpenSea to physical goods or real-world services (McDonalds now accepts Bitcoin in certain regions, and Google Cloud also accepts Bitcoin and Ethereum as payment for its cloud infrastructure).
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">How Will People Use Cryptocurrency in the Future?</h2>
              <p>
                More and more merchants (and industries) seem ready to start accepting cryptocurrencies as a form of payment for any purchase. Blockchain technology as a whole is also being adopted by other industries, with future applications potentially ranging from medical records to mortgages.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">Types of Cryptocurrencies</h2>
              <p>
                Coins and tokens are two types of cryptocurrencies with some key differences between the two.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">Coins</h3>
                <p>
                  Coins are tied to a specific blockchain and operate solely outside of that blockchain’s decentralized system and can be more volatile in nature. (This is different from stablecoins, which are pegged to a more fixed entity, more on this below.)
                </p>
                <p>Here are some of the most widely used coins:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Bitcoin (BTC)</strong> — The first cryptocurrency and the largest cryptocurrency by market capitalization today. Used to purchase items at certain retail stores, car dealerships, or through PayPal.
                  </li>
                  <li>
                    <strong>Ethereum (ETH)</strong> – The decentralized, open-source blockchain is best known for its smart contract capabilities, which ultimately led to its popularity due to NFTs.
                  </li>
                  <li>
                    <strong>Polygon (MATIC)</strong> – As an EVM-compatible Ethereum sidechain, Polygon enables developers to build scalable dApps with low transaction fees.
                  </li>
                  <li>
                    <strong>Solana (SOL)</strong> — Solana has low gas fees and fast transaction speeds, and also allows developers to build dApps. Solana uses the Proof of History method.
                  </li>
                  <li>
                    <strong>Avalanche (AVAX)</strong> – An eco-friendly cryptocurrency focused on smart contracts.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">Tokens</h3>
                <p>
                  Tokens are built on top of blockchains. Stablecoins are a popular type of token that, unlike regular currencies, are pegged to an external reference to reduce the volatility of cryptocurrencies.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Tether (USDT)</strong> – The third largest cryptocurrency and the largest stablecoin, pegged to the US dollar.
                  </li>
                  <li>
                    <strong>USD Coin (USDC)</strong> — USDC is a digital dollar native to the network and is available on multiple blockchains. USDC can be exchanged for USD at a 1:1 exchange rate.
                  </li>
                  <li>
                    <strong>Dai (DAI)</strong> – A stablecoin that runs on the Ethereum blockchain, similar to USDC, DAI can be easily converted into USD.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">What are the Benefits of Decentralization?</h2>
              <p>
                Blockchain technology is not controlled by a single entity, such as a central bank; instead, it is supported by numerous computer systems (“nodes”) that support the blockchain (which gives it its “decentralized” nature). Therefore, the responsibility for ensuring the security of the blockchain falls on those who validate or mine the blockchain itself through a so-called “consensus mechanism,” where nodes in the blockchain must agree that a transaction is valid before it is written to the blockchain. (This is usually a proof-of-work or proof-of-stake system.)
              </p>
              <p>
                Although cryptocurrency is generally considered secure, it is still important to employ best practices to keep it safe. Never share your wallet’s seed phrase, exercise caution when taking actions with your wallet, and make sure to thoroughly evaluate NFTs before purchasing. If something looks too good to be true, it probably is.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">How Do I Access My Cryptocurrency?</h2>
              <p>
                You can access your cryptocurrency using a crypto wallet. Here’s an important thing to remember: your cryptocurrency doesn’t exist in your wallet (just like your cash exists in your wallet); instead, your wallet is the key that unlocks your cryptocurrency stored on the blockchain (just like you use a debit card to withdraw cash from an ATM).
              </p>
              <p>
                When it comes to provisioning your crypto wallet with cryptocurrency, you can purchase cryptocurrency using exchanges like Binance or Coinbase, but many NFT-compatible wallets support adding cryptocurrency directly with your wallet through services like Moonpay or Wyre. These services are integrated into the wallet and allow you to purchase cryptocurrency using a credit or debit card without using a cryptocurrency exchange. During this process, you may be prompted to verify your identity.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">What is the Relationship Between Cryptocurrency and NFT?</h2>
              <p>
                Both cryptocurrencies and NFTs rely on blockchain technology. The key difference is that cryptocurrencies are "fungible" (interchangeable with each other) tokens, while NFTs are "non-fungible" (unique and non-interchangeable) tokens. For example, one Bitcoin is exactly the same as another Bitcoin, but each NFT is unique by definition.
              </p>
              <p>
                To buy NFTs, you need cryptocurrency and a crypto wallet. Your crypto wallet allows you to access your cryptocurrency and NFTs, which is why it's important to make sure your wallet is compatible with both. NFT transactions are made using cryptocurrency, although many NFTs on OpenSea can be purchased using a credit or debit card. You can read more about how to buy NFTs here.
              </p>
            </div>
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

export default WhatIsCryptocurrency;