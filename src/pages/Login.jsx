// src/pages/Login.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  if (user) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="bg-gray-900 p-8 rounded-xl shadow-2xl text-center border border-gray-800">
          <h2 className="text-2xl font-bold text-green-400 mb-4">You're already logged in!</h2>
          <button
            onClick={handleLogout}
            className="bg-red-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-red-300 transition"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800">
        <h2 className="text-3xl font-bold text-green-400 text-center mb-6">Login to AlgoArena</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 text-gray-900 font-bold py-2 rounded hover:bg-green-300 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
