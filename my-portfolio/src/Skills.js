import React from "react";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

export default function SkillsPage(){
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

  const experienceRouteChange = () =>{ 
      let path = `/experience`; 
      navigate(path);
  }

    return(
        <div className="App">
      <header className="App-header">
        <h1>Tyler Heckel</h1>
        <nav>
        <button class ="flat-btn" onClick={homeRouteChange}>Home</button>
          <button class ="flat-btn" onClick={skillsRouteChange}>Skills</button>
          <button class ="flat-btn" onClick={projectsRouteChange}>Projects</button>
          <button class ="flat-btn" onClick={experienceRouteChange}>Experience</button>
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