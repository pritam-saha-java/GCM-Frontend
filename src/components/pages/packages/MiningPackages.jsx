import React, { useState } from 'react';

const MiningPackageDetail = ({ isOpen, onClose, selectedPackage }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  
  if (!isOpen || !selectedPackage) return null;

  const handleBuyNow = () => {
    setShowCheckout(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl overflow-hidden w-full max-w-3xl border border-gray-800">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image section */}
          <div className="w-full md:w-2/5 bg-cyan-800 p-6 relative">
            <div className="absolute top-6 left-6 bg-cyan-400 text-cyan-900 font-bold text-xl px-4 py-1 rounded-lg">
              ${selectedPackage.contractPrice.toFixed(2)}
            </div>
            <div className="mt-16">
              <h2 className="text-white text-2xl font-bold">Brand new</h2>
              <p className="text-white">{selectedPackage.subtitle}</p>
              {selectedPackage.tagline && (
                <div className="mt-4 bg-cyan-400 text-cyan-900 rounded-xl px-3 py-1 text-center text-sm inline-block">
                  {selectedPackage.tagline}
                </div>
              )}
              <div className="mt-8 flex justify-center">
                <img src="/api/placeholder/160/160" alt="Mining machine" />
              </div>
            </div>
          </div>

          {/* Right side - Package details */}
          <div className="w-full md:w-3/5 p-6 bg-gray-900">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-cyan-400">(Daily Sign-in Rewards) {selectedPackage.number}</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-4">
              <div className="text-2xl font-bold text-cyan-400">
                ${selectedPackage.contractPrice.toFixed(2)} <span className="text-gray-400 text-lg">/{selectedPackage.contractTerm}</span>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-gray-300">
              <div className="flex items-center">
                <div className="text-cyan-400 mr-3">✓</div>
                <div>
                  <span className="font-medium">Contract Term:</span> {selectedPackage.contractTerm}
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-cyan-400 mr-3">✓</div>
                <div>
                  <span className="font-medium">Contract Price:</span> ${selectedPackage.contractPrice.toFixed(2)}
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-cyan-400 mr-3">✓</div>
                <div>
                  <span className="font-medium">Daily Income:</span> ${selectedPackage.dailyProfit.toFixed(2)}
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-cyan-400 mr-3">✓</div>
                <div>
                  <span className="font-medium">Fixed Income:</span> ${selectedPackage.contractPrice.toFixed(2)} + ${selectedPackage.totalProfit.toFixed(2)}
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-cyan-400 mr-3">✓</div>
                <div>
                  <span className="font-medium">Settle Interests:</span> Every 24 Hours
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button 
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal 
          isOpen={showCheckout} 
          onClose={handleCloseCheckout} 
          packagePrice={selectedPackage.contractPrice} 
        />
      )}
    </div>
  );
};

const CheckoutModal = ({ isOpen, onClose, packagePrice }) => {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(packagePrice);
  const [password, setPassword] = useState('');
  
  if (!isOpen) return null;
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setAmount(packagePrice * newQuantity);
    }
  };
  
  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setAmount(packagePrice * newQuantity);
  };
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10) || 1;
    setQuantity(value);
    setAmount(packagePrice * value);
  };
  
  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value) || packagePrice);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleSubmit = () => {
    // Handle payment processing logic here
    console.log('Processing payment:', { quantity, amount, password });
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Checkout</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Quantity */}
          <div>
            <label className="block text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center">
              <button 
                className="bg-cyan-500 text-white w-12 h-12 flex items-center justify-center rounded-l"
                onClick={decreaseQuantity}
              >
                −
              </button>
              <input 
                type="text"
                className="w-full text-center border-t border-b h-12"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button 
                className="bg-cyan-500 text-white w-12 h-12 flex items-center justify-center rounded-r"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Amount */}
          <div>
            <label className="block text-gray-700 mb-2">Amount</label>
            <input 
              type="text"
              className="w-full border rounded p-3"
              value={amount.toFixed(2)}
              onChange={handleAmountChange}
            />
          </div>
          
          {/* Payment Password */}
          <div>
            <label className="block text-gray-700 mb-2">Payment Password</label>
            <input 
              type="password"
              className="w-full border rounded p-3"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your payment password"
            />
          </div>
          
          {/* Pay Button */}
          <button 
            className="w-full bg-cyan-500 text-white font-bold py-3 rounded mt-4"
            onClick={handleSubmit}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

const MiningPackagesHorizontal = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data for mining packages with different values (expanded to 10)
  const miningPackages = [
    {
      id: 1,
      title: "Basic Miner",
      subtitle: "user experience mining machine",
      number: "No.192",
      contractPrice: 10.00,
      contractTerm: "1 Day",
      dailyProfit: 0.60,
      totalProfit: 0.60,
      hashPower: 0,
      tagline: "Check in once daily",
      topTag: "$10"
    },
    {
      id: 2,
      title: "Standard Miner",
      subtitle: "cloud computing power",
      number: "No.1580",
      contractPrice: 100.00,
      contractTerm: "2 Days",
      dailyProfit: 4.00,
      totalProfit: 8.00,
      hashPower: 0,
      tagline: "Limit one purchase",
      topTag: "$100"
    },
    {
      id: 3,
      title: "Advanced Miner",
      subtitle: "cloud computing power",
      number: "No.1181",
      contractPrice: 1500.00,
      contractTerm: "15 Days",
      dailyProfit: 23.25,
      totalProfit: 348.75,
      hashPower: 0,
      tagline: "High yield",
      topTag: "$1500"
    },
    {
      id: 4,
      title: "Pro Miner",
      subtitle: "enhanced computing power",
      number: "No.293",
      contractPrice: 300.00,
      contractTerm: "7 Days",
      dailyProfit: 6.50,
      totalProfit: 45.50,
      hashPower: 0,
      tagline: "Weekly profit",
      topTag: "$300"
    },
    {
      id: 5,
      title: "Silver Miner",
      subtitle: "balanced computing solution",
      number: "No.475",
      contractPrice: 50.00,
      contractTerm: "3 Days",
      dailyProfit: 2.10,
      totalProfit: 6.30,
      hashPower: 0,
      tagline: "Beginner friendly",
      topTag: "$50"
    },
    {
      id: 6,
      title: "Gold Miner",
      subtitle: "premium computing power",
      number: "No.687",
      contractPrice: 500.00,
      contractTerm: "10 Days",
      dailyProfit: 8.75,
      totalProfit: 87.50,
      hashPower: 0,
      tagline: "Premium returns",
      topTag: "$500"
    },
    {
      id: 7,
      title: "Platinum Miner",
      subtitle: "enterprise computing power",
      number: "No.882",
      contractPrice: 750.00,
      contractTerm: "12 Days",
      dailyProfit: 13.20,
      totalProfit: 158.40,
      hashPower: 0,
      tagline: "Business grade",
      topTag: "$750"
    },
    {
      id: 8,
      title: "Diamond Miner",
      subtitle: "ultra computing power",
      number: "No.994",
      contractPrice: 1000.00,
      contractTerm: "14 Days",
      dailyProfit: 17.50,
      totalProfit: 245.00,
      hashPower: 0,
      tagline: "Elite performance",
      topTag: "$1000"
    },
    {
      id: 9,
      title: "Weekend Miner",
      subtitle: "weekend computing power",
      number: "No.358",
      contractPrice: 70.00,
      contractTerm: "2 Days",
      dailyProfit: 4.90,
      totalProfit: 9.80,
      hashPower: 0,
      tagline: "Weekend special",
      topTag: "$70"
    },
    {
      id: 10,
      title: "Monthly Miner",
      subtitle: "long-term computing power",
      number: "No.1257",
      contractPrice: 2500.00,
      contractTerm: "30 Days",
      dailyProfit: 32.50,
      totalProfit: 975.00,
      hashPower: 0,
      tagline: "Long term investment",
      topTag: "$2500"
    }
  ];

  const handleStart = (packageId) => {
    const pkg = miningPackages.find(p => p.id === packageId);
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-950 min-h-screen">
      <div className="mb-8 rounded-xl bg-gray-900 p-4 text-white shadow-lg border border-gray-800">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400">Available Balance</p>
            <p className="text-cyan-400 text-3xl font-bold">$1250.00</p>
          </div>
          <div className="text-cyan-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8 text-white">Mining Packages</h1>
      <div className="space-y-6">
        {miningPackages.map(pkg => (
          <div key={pkg.id} className="relative rounded-xl overflow-hidden shadow-xl border border-gray-800">
            <div className="flex flex-col md:flex-row">
              {/* Left section with image and tagline */}
              <div className="w-full md:w-1/4 lg:w-1/5 bg-gradient-to-br from-gray-900 to-gray-800 p-4 relative">
                {pkg.topTag && (
                  <div className="absolute top-4 left-4 bg-cyan-400 text-gray-900 font-bold text-xl px-4 py-1 rounded-lg">
                    {pkg.topTag}
                  </div>
                )}
                <div className="mt-12 flex flex-col items-center">
                  <h2 className="text-xl font-bold text-white">{pkg.title}</h2>
                  <p className="text-gray-300 text-center text-sm">{pkg.subtitle}</p>
                  {pkg.tagline && (
                    <div className="mt-2 bg-cyan-400 text-gray-900 rounded-xl px-3 py-1 text-center text-sm">
                      {pkg.tagline}
                    </div>
                  )}
                  <div className="mt-6">
                    <img src="/api/placeholder/120/120" alt="Mining machine" className="mx-auto" />
                  </div>
                </div>
              </div>
              {/* Right section with contract details */}
              <div className="w-full md:w-3/4 lg:w-4/5 bg-gray-900 p-4 text-white">
                <div className="mb-2">
                  <h3 className="text-md font-medium text-gray-300">(Daily Sign-in Rewards) {pkg.number}</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="text-gray-400 text-sm">Contract Price</h4>
                    <p className="text-md font-bold text-white">${pkg.contractPrice.toFixed(2)}</p>
                    <div className="mt-2">
                      <h4 className="text-gray-400 text-sm">Fixed Income</h4>
                      <p className="text-sm text-cyan-400">${pkg.contractPrice.toFixed(2)} + ${pkg.totalProfit.toFixed(2)}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Contract Term</h4>
                    <p className="text-md font-bold text-white">{pkg.contractTerm}</p>
                    <div className="mt-2">
                      <h4 className="text-gray-400 text-sm">Settle Interests</h4>
                      <p className="text-sm text-gray-300">Every 24 Hours</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Daily Profit</h4>
                    <p className="text-md font-bold text-white">${pkg.dailyProfit.toFixed(2)}</p>
                    <div className="mt-2">
                      <h4 className="text-gray-400 text-sm">Miner</h4>
                      <p className="text-sm text-gray-300">Miner</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Total Profit</h4>
                    <p className="text-md font-bold text-white">${pkg.totalProfit.toFixed(2)}</p>
                    <div className="mt-2">
                      <h4 className="text-gray-400 text-sm">Hash Power</h4>
                      <p className="text-sm text-gray-300">{pkg.hashPower}</p>
                    </div>
                  </div>
                </div>
                {/* Affiliate Bonus */}
                <div className="flex justify-end items-center mt-4">
                  <div className="text-right mr-2">
                    <p className="text-sm text-gray-400">Affiliate Bonus</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                        <span className="text-xs font-bold text-cyan-400">5%</span>
                      </div>
                      <p className="text-xs mt-1 text-gray-400">Level 1</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                        <span className="text-xs font-bold text-cyan-400">5%</span>
                      </div>
                      <p className="text-xs mt-1 text-gray-400">Level 2</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                        <span className="text-xs font-bold text-cyan-400">5%</span>
                      </div>
                      <p className="text-xs mt-1 text-gray-400">Level 3</p>
                    </div>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="mt-4 relative h-2 bg-gray-800 rounded-full">
                  <div 
                    className="absolute left-0 top-0 h-full bg-cyan-500 rounded-full" 
                    style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}>
                  </div>
                  {pkg.id % 3 === 0 && (
                    <div className="absolute top-0 right-0 -mt-1 -mr-2 bg-gray-900 border border-cyan-500 rounded-full w-4 h-4"></div>
                  )}
                </div>
                {/* Start Button */}
                <div className="mt-4 text-right">
                  <button 
                    onClick={() => handleStart(pkg.id)}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full"
                  >
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for package details */}
      <MiningPackageDetail 
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedPackage={selectedPackage}
      />
    </div>
  );
};

export default MiningPackagesHorizontal;