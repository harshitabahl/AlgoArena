import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const linkBase =
    "block py-2 px-4 text-white hover:text-green-400 hover:underline transition";
  const activeLink = "text-green-400 underline";

  const NavLinks = () => (
    <>
      <NavLink
        to="/"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive ? `${linkBase} ${activeLink}` : linkBase
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/problems"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive ? `${linkBase} ${activeLink}` : linkBase
        }
      >
        Problems
      </NavLink>
      <NavLink
        to="/leaderboard"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive ? `${linkBase} ${activeLink}` : linkBase
        }
      >
        Leaderboard
      </NavLink>

      {/* 🔐 Show only after loading is complete */}
      {!loading && !user && (
        <>
          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${linkBase} ${activeLink}` : linkBase
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${linkBase} ${activeLink}` : linkBase
            }
          >
            Signup
          </NavLink>
        </>
      )}

      {!loading && user && (
        <button
          onClick={handleLogout}
          className="text-white hover:text-red-400 transition flex items-center gap-1"
        >
          <LogOut size={18} /> Logout
        </button>
      )}
    </>
  );

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-green-400">
          AlgoArena
        </NavLink>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          {!loading && <NavLinks />}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col bg-gray-800 transition-all duration-300">
          {!loading && <NavLinks />}
        </div>
      )}
    </nav>
  );
}
