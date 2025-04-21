import React, { useState, useEffect } from 'react';
import { getAllMiningPackages, purchasePackage} from '../../../api/packages';
import { toast } from 'react-hot-toast';

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
            <div className="mt-16">
              {selectedPackage.tagline && (
                <div className="mt-4 bg-cyan-400 text-cyan-900 rounded-xl px-3 py-1 text-center text-sm inline-block">
                  {selectedPackage.tagline}
                </div>
              )}
              <div className="mt-8 flex justify-center">
                <img
                      src={`data:image/png;base64,${selectedPackage.imageBase64}`}
                      alt="Mining machine"
                    />
              </div>
            </div>
          </div>

          {/* Right side - Package details */}
          <div className="w-full md:w-3/5 p-6 bg-gray-900">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-cyan-400">{selectedPackage.packageName}</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-4 text-gray-300">
              <div className="flex items-center">
                <div className="text-cyan-400 mr-3">✓</div>
                <div>
                  <span className="font-medium">Contract Term:</span> {selectedPackage.contactTerm} Days
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-cyan-400 mr-3">✓</div>
                <div>
                  <span className="font-medium">Contract Price:</span> ${selectedPackage.contactPrice}
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-cyan-400 mr-3">✓</div>
                <div>
                  <span className="font-medium">Daily Income:</span> ${selectedPackage.dailyProfit}
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-cyan-400 mr-3">✓</div>
                <div>
                  <span className="font-medium">Fixed Income:</span> ${selectedPackage.dailyProfit} + ${selectedPackage.totalProfit}
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
          packagePrice={selectedPackage.contactPrice}
          packageId={selectedPackage.id}
        />
      )}
    </div>
  );
};

const CheckoutModal = ({ isOpen, onClose, packagePrice, packageId }) => {
  const [quantity, setQuantity] = useState(1);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const amount = packagePrice * quantity;

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    // Only allow numeric values
    if (/^\d*$/.test(value)) {
      const numericValue = parseInt(value, 10);
      setQuantity(numericValue >= 1 ? numericValue : 1);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      toast.loading("Processing your purchase...", { id: "purchase" });
  
      await purchasePackage({
        packageId,
        quantity,
        paymentPassword: password,
      });
  
      toast.success("Package purchased successfully!", { id: "purchase" });
      onClose();
    } catch (error) {
      toast.error(error.message || "Purchase failed", { id: "purchase" });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white text-black font-bold rounded-lg w-full max-w-md p-6">
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
              className="w-full border rounded p-3 bg-gray-100 cursor-not-allowed"
              value={`$${amount.toFixed(2)}`}
              readOnly
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
            Pay ${amount.toFixed(2)}
            {isLoading ? "Processing..." : `Pay $${amount.toFixed(2)}`}
          </button>
        </div>
      </div>
    </div>
  );
};


const MiningPackagesHorizontal = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [miningPackages, setMiningPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleStart = (packageId) => {
    const pkg = miningPackages.find(p => p.id === packageId);
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
    <div className="max-w-7xl mx-auto p-4 bg-gray-950 min-h-screen">

      <h1 className="text-3xl font-bold text-center mb-8 text-white">Mining Packages</h1>
      <div className="space-y-6">
        {miningPackages.map(pkg => (
          <div key={pkg.id} className="relative rounded-xl overflow-hidden shadow-xl border border-gray-800">
            <div className="flex flex-col md:flex-row">
              {/* Left section with image and tagline */}
              <div className="w-full md:w-1/4 lg:w-1/5 bg-gradient-to-br from-gray-900 to-gray-800 p-4 relative">
                <div className="mt-12 flex flex-col items-center">
                  <div className="mt-6">
                    <img
                      src={`data:image/png;base64,${pkg.imageBase64}`}
                      alt="Mining machine"
                      className="mx-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
              {/* Right section with contract details */}
              <div className="w-full md:w-3/4 lg:w-4/5 bg-gray-900 p-4 text-white">
                <div className="mb-2">
                  <h3 className="text-md font-medium text-gray-300">{pkg.packageName}</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="text-gray-400 text-sm">Contract Price</h4>
                    <p className="text-md font-bold text-white">${pkg.contactPrice}</p>
                    <div className="mt-2">
                      <h4 className="text-gray-400 text-sm">Fixed Income</h4>
                      <p className="text-sm text-cyan-400">${pkg.dailyProfit} + ${pkg.totalProfit}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Contract Term</h4>
                    <p className="text-md font-bold text-white">{pkg.contactTerm} days</p>
                    <div className="mt-2">
                      <h4 className="text-gray-400 text-sm">Settle Interests</h4>
                      <p className="text-sm text-gray-300">{pkg.settleInterestTime} Hours</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Daily Profit</h4>
                    <p className="text-md font-bold text-white">${pkg.dailyProfit}</p>
                    <div className="mt-2">
                      <h4 className="text-gray-400 text-sm">Miner</h4>
                      <p className="text-sm text-gray-300"></p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Total Profit</h4>
                    <p className="text-md font-bold text-white">${pkg.totalProfit}</p>
                    <div className="mt-2">
                      <h4 className="text-gray-400 text-sm">Hash Power</h4>
                      <p className="text-sm text-gray-300">0</p>
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
                        <span className="text-xs font-bold text-cyan-400">{pkg.level1Bonus}%</span>
                      </div>
                      <p className="text-xs mt-1 text-gray-400">Level 1</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                        <span className="text-xs font-bold text-cyan-400">{pkg.level2Bonus}%</span>
                      </div>
                      <p className="text-xs mt-1 text-gray-400">Level 2</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                        <span className="text-xs font-bold text-cyan-400">{pkg.level3Bonus}%</span>
                      </div>
                      <p className="text-xs mt-1 text-gray-400">Level 3</p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 relative h-2 bg-gray-800 rounded-full">
                  <div
                    className="absolute left-0 top-0 h-full bg-cyan-500 rounded-full"
                    style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                  ></div>
                  {pkg.id % 5 === 0 && (
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