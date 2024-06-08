import React from "react";
import App from "./App";
import SkillsPage from "./Skills";
import ProjectsPage from "./Projects";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import HomePage from "./Home";

export default function ContactPage(){
  const navigate = useNavigate(); 
  const homeRouteChange = () =>{ 
      let path = `/home`; 
      navigate(path);
  }

  const skillsRouteChange = () =>{ 
      let path = `/skills`; 
      navigate(path);
  }

  const projectsRouteChange = () =>{ 
      let path = `/projects`; 
      navigate(path);
  }

  const contactRouteChange = () =>{ 
      let path = `/contact`; 
      navigate(path);
  }

    return(
        <div className="App">
      <header className="App-header">
        <h1>Tyler Heckel</h1>
        <nav>
          <button class ="button" onClick={homeRouteChange}>Home</button>
          <button class ="button" onClick={skillsRouteChange}>Skills</button>
          <button class ="button" onClick={projectsRouteChange}>Projects</button>
          <button class ="button" onClick={contactRouteChange}>Contact</button>
        </nav>
      </header>
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