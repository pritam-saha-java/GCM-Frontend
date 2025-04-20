import { useState } from "react";
import { Shield } from "lucide-react";
import { changeLoginPassword } from "../../../api/userService";

export default function LoginPassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const response = await changeLoginPassword(currentPassword, newPassword);
      setMessage(response.message || "Password updated successfully.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-8 text-white">
      <div className="w-full max-w-3xl bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl shadow-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-cyan-500/20 p-3 rounded-full">
            <Shield size={28} className="text-cyan-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Update Login Password</h2>
            <p className="text-sm text-gray-400">Keep your account secure with a new password.</p>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="current-password" className="block mb-1 text-sm font-medium text-cyan-300">
              Current Password
            </label>
            <input
              type="password"
              id="current-password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#22223a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 transition"
              placeholder="Enter current password"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="new-password" className="block mb-1 text-sm font-medium text-cyan-300">
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#22223a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 transition"
                placeholder="Enter new password"
                required
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block mb-1 text-sm font-medium text-cyan-300">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#22223a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 transition"
                placeholder="Confirm new password"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-400 text-sm">{message}</p>}

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-cyan-700" : "bg-cyan-500 hover:bg-cyan-600"
              } text-white font-semibold py-3 px-4 rounded-lg shadow-md transition`}
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
