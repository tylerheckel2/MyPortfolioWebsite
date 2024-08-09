import React from "react";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

export default function HomePage() {
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
      <div>
          <p></p>
          <img src="IMG_2099.jpg" width = "20%" alt="Photo of Tyler Heckel"/>
          <p></p>
        </div>
      <section id="about">
        <h2>About Me</h2>
        <div class ="typing-area">
        <p class ="typing-area">Hello, I am Tyler Heckel and I am from Port Chester, New York. I am a Junior attending Villanova University on track to graduate with my Bachelor of Science degree
            in May 2026. I am majoring in Computer Science and minoring in Cybersecurity and Engineering Entrepreneurship. I aspire to be a successful Software Engineer
            and I am actively searching for internship opportunities in various industries to expand my knowledge and gain more professional experience. I have developed this website myself to showcase
            my talent, professional experience, and project portfolio.
        </p>
        </div>
        <h2>Connect With Me</h2>
        <div class ="typing-area">
        <p class ="typing-area">
            Email: <a href="mailto:tylerheckel2@gmail.com">tylerheckel2@gmail.com</a><br></br>Cellphone Number: 914-758-2243<br></br><a href="https://github.com/tylerheckel2">GitHub</a> | <a href="https://villanova.joinhandshake.com/stu/users/40794812">Handshake</a> | <a href="https://www.linkedin.com/in/tyler-heckel-1434b52b4/">LinkedIn</a> | <a href="https://tylerheckel2.itch.io/">Itch.io</a>
        </p>
        </div>
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
        {/* <p>&copy; 2024 Tyler Heckel</p> */}
        <p>2024 Tyler Heckel</p>
      </footer>
    </div>
    );
}