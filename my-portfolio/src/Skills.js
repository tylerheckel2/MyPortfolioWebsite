import React from "react";
import App from "./App";
import ProjectsPage from "./Projects";
import ContactPage from "./Contact";
import { Routes, Route, useNavigate} from "react-router-dom";

function SkillsPage(){
    const navigate = useNavigate();

    return(
        <div className="App">
      <header className="App-header">
        <h1>Tyler Heckel</h1>
        <nav>
          <button class ="button" onClick={() => navigate('/')}>Home</button>
          <button class ="button" onClick={() => navigate('/Skills')}>Skills</button>
          <button class ="button" onClick={() => navigate('/Projects')}>Projects</button>
          <button class ="button" onClick={() => navigate('/Contact')}>Contact</button>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Skills" element={<SkillsPage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </main>
      <div>
          <p></p>
          <img src="IMG_2099.jpg" width = "35%" alt="Photo of Tyler Heckel"/>
          <p></p>
        </div>
      <section id="about">
        <h2>About Me</h2>
        <p>Introduction about myself.</p>
      </section>
      {/* <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project Title</h3>
          <p>Project description.</p>
          <a href="link-to-project">View Project</a>
        </div>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Programming Language 1</li>
          <li>Programming Language 2</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
      </section> */}
      <footer>
        <p>&copy; 2024 Tyler Heckel</p>
      </footer>
    </div>
    );
}

export default SkillsPage;