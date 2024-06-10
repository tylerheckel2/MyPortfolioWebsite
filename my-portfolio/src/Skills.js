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
      <h2>General and Technical Skills</h2>
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
      <table class="styled-table">
        <thead>
          <tr>
            <th>Programming Languages</th>
            <th>Software and Data Formats</th>
            <th>Other</th>
          </tr>
        </thead>
        <tbody>
          <tr class ="td-typing-area">
            <td>Java, Javascript, C, C#, Python, HTML, CSS, Dart.</td>
            <td>Git, GitHub, Eclipse, Visual Studio Code, Unity Game Engine, React, React Native, Unix, Firebase, Expo, JSON, JUnit, Bootstrap, Flutter, Android Studio, LucidChart, Trello, Anchorpoint, Excel, PowerPoint, Word.</td>
            <td>Bilingual with Seal of Biliteracy and Proficiency in English and Spanish.</td>
          </tr>
          {/* <tr>
            <td>Data 1</td>
          </tr>
          <tr>
            <td>Data 1</td>
          </tr> */}
        </tbody>
      </table>
      <div class="image-gallery">
        <div class="image-row">
            <img src="Java.png" alt="Image 1"/>
            <img src="Javascript.png" alt="Image 2"/>
            <img src="C.png" alt="Image 3"/>
          </div>
        <div class="image-row">
            <img src="Csharp.png" alt="Image 4"/>
            <img src="Python.png" alt="Image 5"/>
            <img src="HTML.png" alt="Image 6"/>
        </div>
        <div class="image-row">
            <img src="CSS.png" alt="Image 7"/>
            <img src="Dart.png" alt="Image 8"/>
            <img src="GitHub.png" alt="Image 9"/>
        </div>
    </div>
      <footer>
        <p>&copy; 2024 Tyler Heckel</p>
      </footer>
    </div>
    );
}