import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/ Navbar"; // ✅ Add this line
import Login from "./pages/Login";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import ProblemDetail from "./pages/ProblemDetail";
import Problems from "./pages/Problems";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* ✅ Add this here to make it visible on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<ProblemDetail />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/problems" element={<Problems />} />
      </Routes>
    </BrowserRouter>
  );
}
