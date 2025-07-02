import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Flame, LogIn, LogOut, Trophy, List } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated auth state
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsOpen(false);
    navigate("/"); // Redirect to home on logout
  };

  const linkBase = "block py-2 px-4 text-white hover:text-green-400 hover:underline transition";
  const activeLink = "text-green-400 underline";

  const navLinks = (
    <>
      <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? `${linkBase} ${activeLink}` : linkBase)}>
        Home
      </NavLink>
      <NavLink to="/problems" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? `${linkBase} ${activeLink}` : linkBase)}>
        Problems
      </NavLink>
      <NavLink to="/leaderboard" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? `${linkBase} ${activeLink}` : linkBase)}>
        Leaderboard
      </NavLink>

      {!isLoggedIn ? (
        <NavLink to="/login" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? `${linkBase} ${activeLink}` : linkBase)}>
          <LogIn className="inline-block mr-1" size={18} />
          Login
        </NavLink>
      ) : (
        <button onClick={handleLogout} className={`${linkBase} flex items-center`}>
          <LogOut className="mr-1" size={18} />
          Logout
        </button>
      )}
    </>
  );

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-green-400 flex items-center gap-2">
          <Flame className="text-green-400" size={28} />
          AlgoArena
        </NavLink>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">{navLinks}</div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col bg-gray-800 transition-all duration-300">
          {navLinks}
        </div>
      )}
    </nav>
  );
}
