import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Problems from "./pages/Problems";
import Leaderboard from "./pages/Leaderboard";
import ProblemDetail from "./pages/ProblemDetail"; // If you have it

// Components
import Navbar from "./components/Navbar";

function AppContent() {
  const location = useLocation();

  // ❌ Hide Navbar on these routes (auth pages)
  const hideNavbar = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/:id" element={<ProblemDetail />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        {/* Add 404 route if needed */}
        <Route path="*" element={<div className="text-white text-center p-8">404: Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
