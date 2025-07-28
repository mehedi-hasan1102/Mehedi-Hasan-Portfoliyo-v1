import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "corporate");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "corporate" ? "dracula" : "corporate"));
  };

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
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

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Blog", route: "/blogs" },
    { label: "Contact", id: "contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-base-100/90 backdrop-blur-md border-b border-base-300/10 shadow-sm" : "bg-base-100/80 backdrop-blur-sm"}`}>
        <div className="max-w-7xl mx-auto  px-6 py-1 flex justify-between items-center">
          {/* Logo with animation */}
          <motion.a 
            href="#home" 
            onClick={(e) => scrollTo(e, "home")}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="group">
              <div className="transition duration-300 group-hover:translate-y-[-2px] group-hover:scale-105">
                <span className="block text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Mehedi Hasan
                </span>
                <span className="block text-sm text-base-content/60 font-medium tracking-wider">
                  Full Stack Developer
                </span>
              </div>
              <div className="mt-1 h-[1px] w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out group-hover:w-full"></div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) =>
              link.route ? (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.route}
                    className="text-sm font-medium tracking-wider flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    {link.label}
                    {link.route && <FiExternalLink className="text-xs" />}
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollTo(e, link.id)}
                    className="text-sm font-medium tracking-wider hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.div>
              )
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <motion.button 
              onClick={toggleTheme} 
              className="text-lg p-2 rounded-full hover:bg-base-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "nord" ? <FaMoon /> : <FaSun />}
            </motion.button>
            <motion.button 
              onClick={() => setMenuOpen(true)} 
              className="text-xl md:hidden p-2 rounded-full hover:bg-base-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open menu"
            >
              <FaBars />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu with animations */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-base-100/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center space-y-8 px-6 sm:px-12"
            role="dialog"
            aria-modal="true"
          >
            <motion.button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-3xl p-2 rounded-full hover:bg-base-200 transition-colors"
              aria-label="Close menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>

            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center space-y-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.label} variants={itemVariants}>
                  {link.route ? (
                    <Link
                      to={link.route}
                      onClick={() => setMenuOpen(false)}
                      className="text-3xl font-bold hover:text-primary transition-colors flex items-center gap-2"
                    >
                      {link.label}
                      {link.route && <FiExternalLink className="text-sm" />}
                    </Link>
                  ) : (
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => scrollTo(e, link.id)}
                      className="text-3xl font-bold hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;