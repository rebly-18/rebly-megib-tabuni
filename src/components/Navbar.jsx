import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Dark Mode toggle logic
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Proyek", path: "/projects" },
    { name: "Lab", path: "/lab" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#0F172A] border-b border-gray-200 dark:border-gray-800 transition-all">
      <nav className="container mx-auto flex justify-between items-center px-6 lg:px-16 sm:mb-4 md:mb-4 py-4">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
          Tabuni<span className="text-teal-500">.dev</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-gray-700 dark:text-gray-300 text-base font-light">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full ${
                  isActive ? "text-teal-500 font-medium" : "hover:text-teal-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right: Dark Mode + Burger */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode */}
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:scale-105 transition">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>

          {/* Burger Button */}
          <button className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8" onClick={() => setIsOpen(!isOpen)}>
            <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-transform duration-500 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-opacity duration-500 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-transform duration-500 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"></div>}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-[#0F172A] flex flex-col items-center justify-center space-y-8 text-lg font-medium text-gray-800 dark:text-gray-200 z-50 transform transition-all duration-500 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={({ isActive }) => `hover:text-teal-500 transition ${isActive ? "text-teal-500" : ""}`}>
            {link.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
