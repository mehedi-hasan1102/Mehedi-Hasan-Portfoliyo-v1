
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "nord");

  // Apply theme on load and when changed
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "nord" ? "abyss" : "nord"));
  };

  return (
    <>
      <header className=" z-10 top-0 left-0 right-0 fixed flex justify-between items-center pl-0 pb-4 max-w-[1800px] mx-auto">
        {/* <div className="bg-base-200 p-6   text-xl font-bold text-base-content">Mehedi</div> */}

        <Link to="/">
  <div className="bg-base-200 p-6 text-xl font-bold text-base-content">
    Mehedi
  </div>
</Link>

        <div className=" bg-base-200 p-6  flex items-center gap-4">
          {/* DaisyUI theme toggle (manual version with icons) */}
          <button onClick={toggleTheme} className="text-xl text-base-content transition">
            {theme === "nord" ? "🌙" : "☀️"}
          </button>

          {/* Hamburger menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl text-base-content"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Overlay Menu */}
      {menuOpen && (
       
      
      <div
  className="fixed inset-0 bg-base-900 bg-opacity-95 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-12 text-base-content px-6 sm:px-12"
  role="dialog"
  aria-modal="true"
  aria-label="Mobile menu"
>
  <button
    onClick={() => setMenuOpen(false)}
    className="absolute top-6 right-6 text-4xl text-base-content hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
    aria-label="Close menu"
  >
    <FaTimes />
  </button>
  <a
    href="/"
    onClick={() => setMenuOpen(false)}
    className="block font-extrabold text-4xl hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary px-3 py-2 rounded"
  >
    Home
  </a>
  <a
    href="/about"
    onClick={() => setMenuOpen(false)}
    className="block font-extrabold text-4xl hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary px-3 py-2 rounded"
  >
    About
  </a>
  <a
    href="/projects"
    onClick={() => setMenuOpen(false)}
    className="block font-extrabold text-4xl hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary px-3 py-2 rounded"
  >
    Projects
  </a>
  <a
    href="/contact"
    onClick={() => setMenuOpen(false)}
    className="block font-extrabold text-4xl hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary px-3 py-2 rounded"
  >
    Contact
  </a>
</div>

      )}
    </>
  );
};

export default Navbar;
