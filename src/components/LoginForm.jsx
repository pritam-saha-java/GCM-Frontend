import { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, Eye, EyeOff } from "lucide-react";

import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import styles from "../style";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginUser } from "../api/authentication";

export default function LoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loadingToast = toast.loading("Logging you in...");
  
    const result = await loginUser(form);
    toast.dismiss(loadingToast);
  
    if (result.success) {
      toast.success(result.message);
  
      const { id, username, email, roles, tokenType, accessToken } = result.user;
  
      const userData = {
        id,
        username,
        email,
        roles,
        tokenType,
        accessToken,
        loginTime: Date.now(),
      };
  
      const expirationTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("user", JSON.stringify({ ...userData, expiresAt: expirationTime }));
      localStorage.setItem("loginTime", Date.now());

      // Auto logout after 24 hours
      setTimeout(() => {
        localStorage.removeItem("user");
        toast("Session expired. Please log in again.");
        navigate("/login");
      }, 24 * 60 * 60 * 1000); // 24 hours
  
      setForm({
        username: "",
        password: "",
        remember: false,
      });
  
      navigate("/dashboard");
    } else {
      toast.error(result.message);
    }
  };
  

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const inputClass =
    "w-full bg-[#1c1c2f] text-sm text-white pl-10 pr-4 py-3 rounded-lg border border-[#2c2c40] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition";

  const inputWrapClass = "relative w-full";

  return (
    <div className="bg-gradient-to-br from-[#0f0f1c] to-[#111122] overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className="w-full flex items-center justify-center px-4 py-10 mb-10 mt-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="w-full max-w-md bg-[#1b1b2e]/70 backdrop-blur-md border border-[#2e2e40] rounded-2xl shadow-2xl p-8 md:p-10 space-y-6 text-white"
        >
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-cyan-400 text-center"
          >
            Welcome Back
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-sm text-gray-400 text-center"
          >
            Log in to continue
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <motion.div variants={fadeUp} custom={3} className={inputWrapClass}>
              <User size={18} className="absolute left-3 top-3.5 text-cyan-400" />
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                required
                className={inputClass}
              />
            </motion.div>

            {/* Password */}
            <motion.div variants={fadeUp} custom={4} className="relative">
              <Lock size={18} className="absolute left-3 top-3.5 text-cyan-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className={`${inputClass} pr-10`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </motion.div>

            {/* Remember Me */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="flex items-center justify-between text-sm text-gray-400"
            >
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="accent-cyan-500"
                />
                Remember Me
              </label>
              <a href="/forgot-password" className="text-cyan-400 hover:underline">
                Forgot Password?
              </a>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={fadeUp}
              custom={6}
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 hover:opacity-90 transition text-white font-semibold text-lg"
            >
              🔐 Log In
            </motion.button>
          </form>

          <motion.div
            variants={fadeUp}
            custom={7}
            className="text-sm text-center text-gray-400"
          >
            Don’t have an account?{" "}
            <a href="/register" className="text-cyan-400 hover:underline">
              Sign Up
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
