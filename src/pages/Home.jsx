// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Gamify Your <span className="text-green-400">DSA</span> Journey
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Solve problems. Earn points. Climb the leaderboard.
        </p>
        <Link
          to="/problems"
          className="inline-block px-8 py-4 bg-green-400 text-gray-900 font-semibold rounded-xl text-lg hover:bg-green-300 transition duration-300"
        >
          Start Solving →
        </Link>
      </div>
    </div>
  );
}
