import './App.css';
import React from "react";
import {useNavigate} from "react-router-dom";


function App() {

  // let navigate = useNavigate(); 
  //   const routeChange = () =>{ 
  //       let path = `/App`; 
  //       navigate(path);
  //   }

  return (

    

    <div className="App">
      <header className="App-header">
        <h1>Tyler Heckel</h1>
        <nav>
          <button class ="button">Home</button>
          <button class ="button">Skills</button>
          <button class ="button">Projects</button>
          <button class ="button">Contact</button>
        </nav>
      </header>
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

export default App;
