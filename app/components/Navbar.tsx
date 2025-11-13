// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar({ onBook }: { onBook?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center text-white font-bold shadow-md">
            EC
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-semibold text-gray-900">
            Smart Eye Clinic Hospital
            </h1>
            <p className="text-xs text-gray-500 -mt-1">Care with clarity</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-6">
          <Link href="/" className="px-10 py-2 rounded-md hover:bg-slate-100 transition">
            Home
          </Link>
          <Link href="/services" className="px-10 py-2 rounded-md hover:bg-slate-100 transition">
            Services
          </Link>
          <Link href="/doctors" className="px-10 py-2 rounded-md hover:bg-slate-100 transition">
            Doctors
          </Link>
          <Link href="/treatments" className="px-10 py-2 rounded-md hover:bg-slate-100 transition">
           Treatments 
          </Link>
          <Link href="/contact-us" className="px-10 py-2 rounded-md hover:bg-slate-100 transition">
           Contact Us 
          </Link>
         <Link href="/appointments" className="px-10 py-2 rounded-md hover:bg-slate-100 transition">
         Appointments
         </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">&times;</span>
          ) : (
            <span className="text-2xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-red-600 backdrop-blur-md border-t py-3 space-y-2 text-center shadow-sm">
          <Link href="/" className="block w-full text-white px-4 py-2 hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/services" className="block text-white w-full px-4 py-2 hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/doctors" className="block text-white w-full px-4 py-2 hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
            Doctors
          </Link>
          <Link href="/appointments" className="px-10 py-2 text-white rounded-md hover:bg-slate-100 transition">
            Appointments
          </Link>
        </div>
      )}
    </header>
  );
}
