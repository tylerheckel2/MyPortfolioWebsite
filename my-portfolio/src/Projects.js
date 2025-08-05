import React from "react";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

export default function ProjectsPage(){
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
      <h2>Project Work</h2>
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
            <th>Academic Projects</th>
            <th>Personal and Professional Projects</th>
          </tr>
        </thead>
        <tbody>
          <tr class ="td-typing-area">
            <td class="academic"><a class="project-header">OpenCourt App | Full-Stack Developer | January 2024 - May 2024</a><br></br>-Collaborated with a team to develop a pickup basketball app compatible with Android and Web
          devices, utilizing the capabilities of Flutter and Dart to enable users to efficiently organize pickup
          basketball games.<br></br>-Utilized HTML and CSS styling to create an engaging and interactive user interface for efficient
          navigation between pages and access to various app features.<br></br>-Integrated Google Maps API functionality to display an interactive satellite map of Villanova
          University’s campus with user location and basketball court locations marked, enabling users to view
          nearby courts.<br></br>-Implemented user check-in pages, enabling users to access buttons and counters to indicate when
          they are using a court and view the current population of users on a court.<br></br>-Utilized Firebase to develop a secure user authentication system, enabling users to sign up, log in,
          and store credentials.
            </td>
            <td class="academic"><a class="project-header">Culinary Caverns | Lead Programmer/Level Designer | Games For Love | June 2024 - September 2024</a><br></br>-Collaborated with a team of interns to develop a multi-level 2D mining game utilizing Unity Game Engine and C# scripting.<br></br>-Programmed various game features including player movement and animation, terrain seed generation, abilities for the player to break and collect blocks, and a dynamic inventory UI system to store and show collected items.<br></br>-Implemented background music, sound effects, and level completion cues to enhance the user experience.<br></br>-Contributed to game and level design by coordinating and facilitating collaboration between team members through the use of GitHub and Trello, and organizing Discord meetings.<br></br>-Created for submission to Games for Love's Cause Jam to be featured in a charity bundle sold to raise funds to support children in hospitals.
            </td>
          </tr>

          <tr>
            <td class ="academic"><a class="project-header">College Football Ranking System | Programmer/Data Analyst | May 2024</a><br></br>-Designed algorithms using Python to rank college football teams in the Big 12 conference based on game outcomes and data from the 2016-17 season.<br></br>-Implemented Colley’s and Massey’s methods to evaluate teams based on various determining factors.<br></br>-Utilized linear algebra concepts such as systems of linear equations, matrix operations, and eigenvalues to analyze data and enhance accuracy of rankings.<br></br>-Processed datasets to extract insights and draw conclusions, showcasing experience in data analysis, Python programming, and mathematical modeling.
            </td>
            <td class="academic"><a class="project-header">Multi-level 2D Platformer Game | Lead Game Developer | Personal Project | August 2023</a><br></br>-Developed a dynamic and engaging multi-level 2D platformer game using Unity Game Engine and C#
          scripting.<br></br>-Implemented player movement mechanics and animations, incorporating player death logic and
          responsive level restart mechanics upon collision with traps.<br></br>-Designed challenging levels and integrated 2D enemy AI to enhance gameplay excitement.<br></br>-Integrated a real-time item collection system with a visible counter, background music, and sound
          effects for jumping, item collection, player demise, and level completion cues.
            </td>
          </tr>

          <tr>
          <td class ="academic"><a class="project-header">NBA Statistics Tracker Website | Full-Stack Developer | December 2023</a><br></br>-Developed an NBA Statistics Tracker website in collaboration with a team using React.<br></br>-Utilized the capabilities of React.js, HTML, and CSS to build a dynamic and responsive user interface,
            ensuring an efficient and engaging user experience with weekly updates to statistics.<br></br>-Integrated navigation functionality to allow the user to efficiently and effectively navigate between
            different statistics pages.<br></br>-Implemented a database using Firebase to establish a secure user authentication system, allowing
            users to sign up and store credentials.
            </td>
          </tr>

          <tr>
          <td class ="academic"><a class="project-header">Movie List App | Full-Stack Developer | November 2023</a><br></br>-Developed a React Native mobile app to create an interactive movie information tracker.<br></br>-Utilized Expo for project setup and used a FlatList to display a list of movies on a home screen.<br></br>
            -Integrated navigation functionality to display pages with relative details upon selecting movie titles.<br></br>-Implemented an efficient user interface allowing the user to fetch additional movie data from an API
            and effectively update the information seen on screen.</td>
          </tr>

          <tr>
          <td class ="academic"><a class="project-header">Recursive Problem Solving with JUnit Testing | Software Tester | April 2023</a><br></br>-Utilized JUnit to test recursive methods to solve various problems, including exponentiation, string
          reversal, cleaning adjacent characters, and computing Fibonacci numbers.</td>
          </tr>

          {/* <tr>
            <td class ="academic"><a class="project-header"></a><br></br></td>
          </tr> */}

        </tbody>
      </table>
      <div class="image-gallery">
        <div class="image-row">
            <img src="OpenCourt.png" alt="Image 1"/>
            <img src="2DPlatformer.png" alt="Image 2"/>
          </div>
    </div>
    <h2>GitHub Project Links</h2>
        <div className = "projectlink-box">
        <p>
            <a href="https://github.com/tylerheckel2">GitHub Profile</a><br></br><a href="https://github.com/Chegarty123/SEOpenCourtFinal.git">OpenCourt App</a> | <a href="https://github.com/tylerheckel2/NBAStatsWebsiteProject.git">NBA Statistics Tracker Website</a> | <a href="https://github.com/tylerheckel2/MultiLevel2DPlatformerGame.git">Multi-level 2D Platformer Game</a> | <a href="https://github.com/tylerheckel2/CulinaryCaverns">Culinary Caverns</a> | <a href="https://github.com/tylerheckel2/MyPortfolioWebsite">This Website</a>
        </p>
        </div>
      <footer>
        <p>2024 Tyler Heckel</p>
      </footer>
    </div>
    );
}