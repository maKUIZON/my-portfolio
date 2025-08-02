import { useEffect, useState } from 'react';
import Header from './Header.jsx';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
 <div className="relative bg-[url('/src/assets/backgroud.png')] bg-cover bg-center transition-colors duration-1000">
  <div className="absolute inset-0 bg-black opacity-40 dark:opacity-60 pointer-events-none z-0"></div>

  <div className="relative z-10 w-full max-w-[1200px] mx-auto py-18 bg-white dark:bg-[#151b26] transition-colors duration-1000">
    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className={`flex justify-around items-center w-full h-auto flex-wrap
          ${!darkMode 
            ? "bg-[url('/src/assets/day.png')]" 
            : "bg-[url('/src/assets/night.png')]"
          } bg-cover bg-center`
          }>
          <div className="">
            <p className='text-black dark:text-white'>Hello, I am</p>
            <b className='text-black dark:text-white'>Mark Angelo Kuizon</b>
            <h2 className="text-black dark:text-white" id="skills">Frontend Developer</h2>
            <div className='text-black dark:text-white '>
              <button><i className="px-3 fab fa-linkedin"></i></button>
              <button><i className="px-3 fab fa-facebook"></i></button>
              <button><i className="px-3 fab fa-instagram"></i></button>
              <button><i className="px-3 fab fa-x-twitter"></i></button>
            </div>
          </div>

          <div className="flex h-100">
            <img className="transition-all filter drop-shadow-lg dark:hover:drop-shadow-[0_0_10px_#22d3ee] dark:drop-shadow-[0_0_3px_#67e8f9] duration-500" src="src/assets/profile-picture.png" alt="Profile" />
          </div>
        </div>

        <br />

        <div className="introduction-content">
          <div className="introduction">
            <p>
              I'm a programmer who picks things up quickly and loves figuring out how things work.
              Whether it's building websites, fixing systems, or exploring new tech, I enjoy doing anything related to computers.
              I'm confident in my ability to learn and deliver.
            </p>
            <button>Download CV</button>
          </div>
        </div>

        <div className="experience-content">
          <h2>Experience</h2>
          <div className="experience">
            <h3>Freelancer</h3>
          </div>
          <div className="experience">
            <h3>Intern in DepEd - Cavite City</h3>
          </div>
        </div>

        <div className="skills-content">
          <h2>Skills</h2>
          <ul>
            <li>C#</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>React</li>
            <li>Vite</li>
            <li>MySQL</li>
            <li>Oracle</li>
            <li>Unity 2D</li>
            <li>Unity 3D</li>
          </ul>
        </div>

        <div className="contact-form">
          <p>For more questions</p>
          <form action="">
            <input type="text" className="name" placeholder="Name" />
            <input type="number" className="number" placeholder="Number" />
            <input type="email" className="email" placeholder="Email" />
            <input type="text" className="description" placeholder="Description" />
          </form>
        </div>

        <footer>
          {/* You can add footer content here */}
        </footer>
      </div>
    </div>
    
  );
}

export default App;
