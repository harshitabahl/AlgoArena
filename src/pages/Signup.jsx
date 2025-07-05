import React, { useState, useEffect } from "react";
import { sendMagicLink } from "../firebase/authFunctions";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅

export default function Signup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth(); // ✅

  useEffect(() => {
    if (user) {
      navigate("/"); // ✅ Redirect if already logged in
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMagicLink(email);
      setMessage("📧 Sign-in link sent! Check your inbox.");
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-400">Sign Up for AlgoArena</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            Send Sign-In Link
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-gray-300">{message}</p>}
      </div>
    </div>
  );
}
