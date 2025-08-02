import React from 'react';
import Darkmode from './Darkmode.jsx';
import './App.css';
import logo from './assets/logo.png';

function Header({ darkMode, setDarkMode }) {
  return (
   <header
      className={`fixed flex justify-between items-center p-3 top-0 left-0 w-full z-10 transition-all duration-300  shadow-[0_0_20px_5px_rgba(83, 85, 89)] dark:shadow-[0_0_20px_5px_rgba(59,130,246,0.6)] 
        ${!darkMode 
          ? "bg-[url('/src/assets/background-header.jpg')]" 
          : "bg-[url('/src/assets/background-header_copy.jpg')]"
        } bg-cover bg-center`}
      >   
      <img src={logo} className="h-12 " alt="logo" />
      <nav className="hidden sm:block">
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
    </header>
  );
}

export default Header;
