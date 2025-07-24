import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "nord");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "nord" ? "abyss" : "nord"));
  };

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Adjust timeout as needed
    } else {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
    handleScroll(id);
  };

  return (
    <>
      <header className="z-10 top-0 left-0 right-0 fixed flex justify-between items-center pl-0 pb-4 max-w-[1800px] mx-auto">
        <a href="#home" onClick={(e) => scrollTo(e, "home")}>
          <div className="bg-base-200 px-4 border-b border-r group inline-block p-2 text-base-content no-underline">
            <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:scale-[1.02]">
              <span className="block text-2xl font-bold leading-tight tracking-tight">
                Mehedi
              </span>
              <span className="block text-xl font-medium leading-tight text-base-content/70">
                Hasan
              </span>
            </div>
            <div className="mt-1 h-[2px] w-0 origin-center bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
        </a>

        <div className="border-b border-l bg-base-200 p-6 flex items-center gap-4">
          <button onClick={toggleTheme} className="text-xl text-base-content transition">
            {theme === "nord" ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl text-base-content"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-base-900 bg-opacity-95 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-12 text-base-content px-6 sm:px-12"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-4xl text-base-content hover:text-primary"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <a
            href="#home"
            onClick={(e) => scrollTo(e, "home")}
            className="block font-extrabold text-4xl hover:text-primary transition"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => scrollTo(e, "about")}
            className="block font-extrabold text-4xl hover:text-primary transition"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollTo(e, "projects")}
            className="block font-extrabold text-4xl hover:text-primary transition"
          >
            Projects
          </a>
          <Link
            to="/blogs"
            onClick={() => setMenuOpen(false)}
            className="block font-extrabold text-4xl hover:text-primary transition"
          >
            Blogs
          </Link>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="block font-extrabold text-4xl hover:text-primary transition"
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
