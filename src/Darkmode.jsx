import './App.css';

function Darkmode({ darkMode, setDarkMode }) {
  return (
    <button 
      onClick={() => {
        setDarkMode(!darkMode);
        console.log('Toggled dark mode:', !darkMode);
      }}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center hover:bg-[#a4a8b0]"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}

export default Darkmode;
