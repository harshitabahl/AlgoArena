import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-gradient-to-br from-green-400/10 to-gray-800">
      <Flame className="h-12 w-12 sm:h-14 sm:w-14 text-green-400 mb-4 animate-pulse" />
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">Master DSA Through Battle!</h1>
      <p className="text-base sm:text-lg mb-8 max-w-md sm:max-w-xl">
        Join gamified contests, climb the leaderboard, and crush coding challenges.
      </p>
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
    <Link
      to="/problems"
      className="bg-green-500 text-white px-6 py-3 rounded-full text-center hover:bg-green-600 transition"
    >
      Start Solving
    </Link>
    <Link
      to="/login"
      className="bg-white text-gray-900 px-6 py-3 rounded-full text-center hover:bg-gray-100 transition"
    >
      Join Contest
    </Link>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>
        <div className="grid md:grid-cols-4 gap-8 px-8">
          {[
            "Track Progress",
            "Climb Leaderboard",
            "Solve Real DSA Problems",
            "Secure Login & Profiles",
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-gray-700 rounded-xl p-6 hover:scale-105 transform transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Flame className="h-10 w-10 text-green-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 text-center bg-gray-900">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 px-8">
          {["Create Account", "Join Contests", "Solve Problems", "Earn Badges"].map((step, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-xl p-6 hover:ring-2 hover:ring-green-400 transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.4 }}
            >
              <div className="text-green-300 text-5xl font-bold mb-2">{i + 1}</div>
              <p className="text-lg font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6 text-sm text-gray-400">
        <p>Made with ❤️ by Harshita Bahl • © 2025 AlgoArena</p>
        <div className="mt-2 space-x-4">
          <a
            href="https://github.com/harshitabahl/AlgoArena"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link to="/login" className="hover:text-white">
            Login
          </Link>
        </div>
      </footer>
    </div>
  );
}
