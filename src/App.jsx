import { useEffect, useState } from 'react';
import Header from './Header.jsx';
import SlidingImages  from './Sliding.jsx';
import './App.css';
import photoko from './assets/profile-picture.png';
import 'cally';
import lost from './assets/lostforwords.png';
import pos from './assets/pos.png';
import deped from './assets/deped.jpg';

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

  <div className="relative z-10 w-full  text-black dark:text-white max-w-[1200px] mx-auto bg-white dark:bg-[#151b26] transition-colors duration-1000">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />  

        <div className={`flex justify-around items-center w-full h-auto flex-wrap py-19
          ${!darkMode 
            ? "bg-[url('/src/assets/day.png')]" 
            : "bg-[url('/src/assets/night.png')]"
          } bg-cover bg-center text-2xl`
          }>
          <div className="my-5">
            <p className='text-black dark:text-white'>Hello, I am</p>
            <p className='text-black dark:text-cyan-200 text-4xl'>Mark Angelo Kuizon</p>
            <h2 className="text-black dark:text-white" id="skills">Frontend Developer</h2>
            
            <div className="text-black dark:text-white flex">
              <a
                href="https://www.linkedin.com/in/mark-angelo-kuizon-9b4b2a372/"
                target="_blank"
                rel="noopener noreferrer"
                data-tip="LinkedIn"
                className="w-10 h-10 border-2 tooltip rounded-full flex items-center justify-center mr-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a
                href="http://facebook.com/mark.angelo.kuizon.2024/"
                target="_blank"
                rel="noopener noreferrer"
                data-tip="Facebook"
                className="w-10 h-10 border-2 rounded-full tooltip flex items-center justify-center mr-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/mrkhobi_/"
                target="_blank"
                rel="noopener noreferrer"
                data-tip="Instagram"
                className="w-10 h-10 border-2 tooltip rounded-full flex items-center justify-center mr-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://github.com/maKUIZON"
                target="_blank"
                rel="noopener noreferrer"
                data-tip="Github"
                className="w-10 h-10 border-2 tooltip rounded-full flex items-center justify-center mr-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
            <button onClick={handleDownload}
                    className="btn dark:btn-outline btn-info my-2 tooltip" data-tip="Here's my resume, sweetie">Download CV</button>

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
         </div>
           
        </div>
        <br></br>
        <div className="">
          <h1 className="flex items-center text-5xl mr-6 justify-center mb-5 sm:mb-4">Projects</h1>
          <div className="flex justify-around flex-wrap mx-4">
            <div className="card bg-dark:base-100 w-96 shadow-[0px_0px_14px_1px_rgba(36,36,54,0.61)] sm:shadow-lg my-2 mx-0.5">
            <figure>
              <img className='min-h-4'
                src={pos}
                alt="Shoes" />
            </figure>
            <div className="card-body bg-[#f6f6f2] dark:bg-[#2b2539]">
              <h2 className="card-title">Point-of-Sale</h2>
              <p className="text-justify">A POS (Point of Sale) is the place or system where a sales transaction occurs — where a customer pays for goods or services. It's commonly used in retail stores, restaurants, and service businesses.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary "  onClick={() => {
                        window.open("https://youtu.be/5QrTurah4YY", "_blank");}}
                  > Watch
                  </button>
              </div>
            </div>
          </div>
           <div className="card bg-base-100 w-96 shadow-[0px_0px_14px_1px_rgba(36,36,54,0.61)] sm:shadow-lg my-2 mx-0.5">
            <figure>
              <img
                src={lost}
                alt="Shoes" />
            </figure>
            <div className="card-body bg-[#f6f6f2] dark:bg-[#2b2539]">
              <h2 className="card-title">Lost for Words</h2>
              <p className="text-justify">Lost for Words is a narrative-driven typing game where progressing through the story involves entering specific words or phrases. It blends storytelling with interactive text mechanics, letting the player’s input directly influence the flow of events.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">Download</button>
              </div>
            </div>
          </div>
           <div className="card bg-base-100 w-96 shadow-[0px_0px_14px_1px_rgba(36,36,54,0.61)] sm:shadow-lg my-2 mx-0.5">
            <figure>
              <img
                src={deped}
                alt="Shoes" />
            </figure>
            <div className="card-body bg-[#f6f6f2] dark:bg-[#2b2539]">
              <h2 className="card-title">DepEd - Encoding System</h2>
              <p className="text-justify">An encoding system is a easy-to-show graphical representation of data in excel. This can navigate every changes that is happening within the excel file.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary tooltip" data-tip="Just kidding, it's private😜">Download</button>
              </div>
            </div>
          </div>
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
         <div className="toast tooltip animate-bounce" data-tip="Please!!!">
              <button
            onClick={() => {
            window.location.href = "mailto:makuizon15@gmail.com?subject=Job Offer:&body=";}}
            className="btn btn-primary"
             >
            Contact me!
          </button>
        </div>
      
        <footer>
          {/* You can add footer content here */}
        </footer>
      </div>
    </div>
    
  );
}

export default App;
