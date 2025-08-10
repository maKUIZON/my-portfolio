import { useEffect, useState } from 'react';
import Header from './Header.jsx';
import SlidingImages  from './Sliding.jsx';
import './App.css';
import photoko from './assets/profile-picture.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Resume_Kuizon.pdf';
    link.download = 'Resume_Kuizon.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  return (
  <div className="relative bg-[url('/src/assets/backgroud.png')] bg-cover bg-center transition-colors duration-1000">
  <div className="absolute inset-0 bg-black opacity-40 dark:opacity-60 pointer-events-none z-0"></div>

  <div className="relative z-10 w-full  text-black dark:text-white max-w-[1200px] mx-auto py-18 bg-white dark:bg-[#151b26] transition-colors duration-1000">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />  

        <div className={`flex justify-around items-center w-full h-auto flex-wrap py-19
          ${!darkMode 
            ? "bg-[url('/src/assets/day.png')]" 
            : "bg-[url('/src/assets/night.png')]"
          } bg-cover bg-center text-2xl`
          }>
          <div className="">
            <p className='text-black dark:text-white'>Hello, I am</p>
            <p className='text-black dark:text-cyan-200 text-4xl'>Mark Angelo Kuizon</p>
            <h2 className="text-black dark:text-white" id="skills">Frontend Developer</h2>
            
            <div className="text-black dark:text-white flex">
              <a
                href="https://www.linkedin.com/in/mark-angelo-kuizon-9b4b2a372/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 rounded-full flex items-center justify-center mr-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a
                href="http://facebook.com/mark.angelo.kuizon.2024/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 rounded-full flex items-center justify-center mr-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/mrkhobi_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 rounded-full flex items-center justify-center mr-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://github.com/maKUIZON"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 rounded-full flex items-center justify-center mr-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>


          </div>
          
          <div className="flex h-100">
             <img className="transition-all filter drop-shadow-lg dark:hover:drop-shadow-[0_0_10px_#22d3ee] dark:drop-shadow-[0_0_3px_#67e8f9] duration-500 " src={photoko} alt="Profile" />
          </div> 
        </div>
       <SlidingImages />
        <br />

        <div className="flex  p-5  flex-col sm:flex-row justify-center items-center">
            <h1 className="flexitems-center text-5xl mr-6 justify-center mb-5 sm:mb-0">About <span className="text-red-600">Me!</span></h1>
            <div className=''> 
              <p className='text-justify'> 
              I'm a programmer who picks things up quickly and loves figuring out how things work.
              Whether it's building websites, fixing systems, or exploring new tech, I enjoy doing anything related to computers.
              I'm confident in my ability to learn and deliver.
            </p>
            <button onClick={handleDownload}
 className="btn btn-outline btn-info">Download CV</button></div>
           
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
