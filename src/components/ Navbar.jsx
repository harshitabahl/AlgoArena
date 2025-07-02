import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // the icons you just installed
import { Flame, List, Trophy, LogIn } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkBase = "block py-2 px-4 text-white hover:text-green-400 hover:underline transition";
  const activeLink = "text-green-400 underline";

  const navLinks = (
    <>
      <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? `${linkBase} ${activeLink}` : linkBase)}>Home</NavLink>
      <NavLink to="/problems" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? `${linkBase} ${activeLink}` : linkBase)}>Problems</NavLink>
      <NavLink to="/leaderboard" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? `${linkBase} ${activeLink}` : linkBase)}>Leaderboard</NavLink>
      <NavLink to="/login" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? `${linkBase} ${activeLink}` : linkBase)}>Login</NavLink>
    </>
  );

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-green-400">
          AlgoArena
        </NavLink>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          >
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
