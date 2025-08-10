import React, { useEffect, useState } from 'react';
import Darkmode from './Darkmode.jsx';
import './App.css';
import logo from './assets/logo.png';

function Header({ darkMode, setDarkMode }) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundImage = darkMode
    ? "url('/src/assets/background-header_copy.jpg')"
    : "url('/src/assets/background-header.jpg')";

  const bgOpacityClass = isTop ? 'opacity-100' : 'opacity-50';

  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${bgOpacityClass}`}
        style={{ backgroundImage }}
      ></div>

      <div className="relative flex justify-between items-center p-3 shadow-[0px_5px_70px_1px_rgba(68,222,192,0.75)]">
        <img src={logo} className="h-12" alt="logo" />

        <nav className="hidden sm:flex">
          <a
            className="mx-4 text-black dark:text-white transition-all filter drop-shadow-lg hover:drop-shadow-[0_0_10px_#22d3ee] dark:hover:drop-shadow-[0_0_12px_#67e8f9] duration-500"
            href="#"
          >
            Introduction
          </a>
          <a
            className="mx-4 text-black dark:text-white transition-all filter drop-shadow-lg hover:drop-shadow-[0_0_10px_#22d3ee] dark:hover:drop-shadow-[0_0_12px_#67e8f9] duration-500"
            href="#"
          >
            Experience
          </a>
          <a
            className="mx-4 text-black dark:text-white transition-all filter drop-shadow-lg hover:drop-shadow-[0_0_10px_#22d3ee] dark:hover:drop-shadow-[0_0_12px_#67e8f9] duration-500"
            href="#"
          >
            Skills
          </a>
        </nav>

        <Darkmode darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="sm:hidden dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn border-none btn-ghost hover:bg-white dark:hover:bg-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a href="#">Introduction</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Skills</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
