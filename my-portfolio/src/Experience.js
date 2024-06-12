import React from "react";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

export default function ExperiencePage(){
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
      <h2>Professional Experience</h2>
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
            <th>Employer</th>
            <th>Role Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class ="td-typing-area">
            <td><img src="GamesForLove.png" width = "25%" alt="Games for Love Logo"/><br></br><a class="project-header">Games for Love</a></td>
            <td><a class="project-header">Game Developer Intern | June 2024 - Present</a><br></br></td>
          </tr>
          {/* <tr>
            <td>Data 1</td>
          </tr>
          <tr>
            <td>Data 1</td>
          </tr> */}
        </tbody>
      </table>
      <h2>Academic Coursework</h2>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Algorithms & Data Structures I</a></td>
            <td class = "academic">Object-oriented design: objects, classes, methods, encapsulation; programming fundamentals: data, variables, selection, loops, arrays, input/output; exceptions.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Algorithms & Data Structures II</a></td>
            <td class = "academic">Object-oriented design: inheritance, interfaces, polymorphism; problem analysis; recursion; abstract data types; dynamically linked structures; data structures: stacks, queues, lists, collections, trees, maps, priority queues, library collections framework.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Discrete Structures</a></td>
            <td class = "academic">Mathematical structures that support computer science: sets, matrices, trees, graphs, logic and proof, mathematical induction, relations, functions, sequences, summations, and elementary combinatorics.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Computer Systems I</a></td>
            <td class = "academic">Architecture of computer systems: representation of data; processor, memory and I/O organization. Assembly language programming. C programming language constructs and their relationship to the underlying architecture. Basics of operating systems: interrupts, concurrency, process scheduling, security, networking.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Computer Systems II</a></td>
            <td class = "academic">Processes, threads and concurrent programming. Scheduling and dispatching. Linking and relocation. Memory management. Virtual memory. System-level I/O Device management. File systems. Security and protection in depth. Real-time and embedded systems. System performance evaluation. Scripting.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Platform Based Computing</a></td>
            <td class = "academic">Python APIs, internet programming and security, mobile app programming, a team project.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Statistics for Computing</a></td>
            <td class = "academic">Probability, counting, discrete and continuous distributions, descriptive and inferential statistics, experimentation, reading of scientific papers -- all taught from the point of view of computer science.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Software Engineering</a></td>
            <td class = "academic">Management and production of software systems; the software life cycle; software design techniques and methodologies; participation in a team software development project.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Linear Algebra for Computing</a></td>
            <td class = "academic">Vectors, matrices, and matrix algebra; systems of linear equations; matrix inverses; least squares problems; eigenvalues and eigenvectors; using Python for computational linear algebra; applications from areas such as data science, computer graphics, graph algorithms, and web search.</td>
          </tr>
          {/* <tr>
            <td>Data 1</td>
          </tr>
          <tr>
            <td>Data 1</td>
          </tr> */}
        </tbody>
      </table>
      <img src="VillanovaV.png" width="18%" alt="Image 1"/>
      <footer>
        <p>&copy; 2024 Tyler Heckel</p>
      </footer>
    </div>
    );
}