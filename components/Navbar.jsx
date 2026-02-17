"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Theme Toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const links = [
    { id: 1, link: "about" },
    { id: 2, link: "skills" },
    { id: 3, link: "projects" },
    { id: 4, link: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full h-20 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg shadow-sm dark:shadow-none"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivamhp20@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold tracking-tight cursor-pointer text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300">
            Shivam Sharma<span className="text-blue-600 dark:text-blue-500">.</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="capitalize font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200 cursor-pointer text-sm tracking-wide"
              >
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Resume Button */}
          <a
            href="/Shivam_Sharma_Resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-all duration-300 group"
          >
            Resume
            <MdOutlineFileDownload className="group-hover:translate-y-0.5 transition-transform duration-300" size={18} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-all"
          >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer z-10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {nav && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-slate-950 flex flex-col justify-center items-center transition-colors duration-300">
            <ul className="flex flex-col gap-8 text-center">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="capitalize text-3xl font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <a onClick={() => setNav(false)} href={`#${link}`}>
                    {link}
                  </a>
                </li>
              ))}
              <li>
                 <a
                  href="/Shivam_Sharma_Resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-8 py-3 mt-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
                >
                  Download Resume
                  <MdOutlineFileDownload size={20} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
