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
            <td><img src="tranzact_logo.jpg" width = "55%" alt="Tranzact Logo"/><br></br><a class="project-header">TRANZACT</a></td>
            <td><a class="project-header">Information & Cyber Security Intern | June 2025 - August 2025</a><br></br>-Supported security audits, compliance reviews, and regulatory requirement assessments.<br></br>-Helped maintain cybersecurity frameworks and standards including PCI DSS, HIPAA, and NIST 800-53.<br></br>-Assisted in third-party vendor risk assessment activities and client due diligence assessments.<br></br>-Analyzed and managed remediation plans for cyber threats, vulnerabilities, and security incidents.<br></br>-Researched and documented security policies, standards, and procedures.<br></br>-Participated in security awareness training initiatives.<br></br>-Utilized Archer and various other security tools for governance, compliance, and risk analysis.<br></br>-Collaborated with cross-functional teams to support security projects.</td>
          </tr>
          <tr class ="td-typing-area">
            <td><img src="GamesForLove.png" width = "55%" alt="Games for Love Logo"/><br></br><a class="project-header">Games For Love</a></td>
            <td><a class="project-header">Game Developer Intern | June 2024 - September 2024</a><br></br>-Collaborated with a team of interns to develop a multi-level 2D mining game called Culinary Caverns, utilizing Unity Game Engine and C# scripting.<br></br>-Programmed various game features including player movement and animation, terrain seed generation, abilities for the player to break and collect blocks, and a dynamic inventory UI system to store and show collected items.<br></br>-Implemented background music, sound effects, and level completion cues to enhance the user experience.<br></br>-Contributed to game and level design by coordinating and facilitating collaboration between team members through the use of GitHub and Trello, and organizing Discord meetings.<br></br>-Created for submission to Games for Love's Jampack to be featured in a charity bundle sold to raise funds to support children in hospitals.</td>
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
            <td class = "academic"><a class = "project-header">Analysis of Algorithms</a></td>
            <td class = "academic">Efficiency classifications and mathematical analysis of recursive and nonrecursive algorithms; design techniques: brute force, greedy, divide-and-conquer, dynamic programming, backtracking, branch-and-bound, space and time tradeoffs; NP-completeness; approximation algorithms; computational problems: sorting, searching, string processing, graphs, arithmetic, linear algebra.</td>
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
            <td class = "academic"><a class = "project-header">Computer and Network Security</a></td>
            <td class = "academic">Computer security in the context of the Internet, including hands-on exercises and experiments in the areas of authentication, attacks and threats, email and communication digital signatures and encryption, mobile devices, privacy, safe browsing and certificates.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Design Thinking and Customer Discovery</a></td>
            <td class = "academic">This course teaches design thinking and customer discovery for startups. Learn to empathize with users, ideate innovative solutions, and validate concepts through real-world experimentation. Gain indispensable skills to drive startup success and customer satisfaction.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Digital Forensics *Currently Enrolled*</a></td>
            <td class = "academic">In-depth study of digital evidence presentation, digital forensic techniques, and data analysis. Password cracking, encryption/decryption, volatile data extraction and network forensics of advanced forensic tools, legal and ethical issues related to forensics and security management techniques.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Discrete Structures</a></td>
            <td class = "academic">Mathematical structures that support computer science: sets, matrices, trees, graphs, logic and proof, mathematical induction, relations, functions, sequences, summations, and elementary combinatorics.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Emerging Tech in Product Innovation</a></td>
            <td class = "academic">This course explores emerging technologies' impact on product innovation, examining disruptive innovation, technology lifecycles, and evaluation frameworks. It covers AI, loT, AR/VR, and other trends, emphasizing practical applications, critical thinking, and ethical considerations in technological disruption and product development.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Engineering a Creative Mindset</a></td>
            <td class = "academic">An introduction into diverse methods, practices, and tools to foster creative problem-solving. Engage in exercises and assignments to foster creativity. Delve into the link between creativity and innovation, unlocking potential for groundbreaking solutions.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Full Stack Web Dev *Currently Enrolled*</a></td>
            <td class = "academic">Dive into the world of web development with this project-centered course on building cutting-edge web applications! From creating sleek, accessible interfaces with HTML, CSS, and JavaScript, to server-side logic and databases with Node.js, Express, and MongoDB, this course will equip you with the skills needed to build complete web apps. In addition, we'll take an in-depth look at a current single-page framework, such as Angular or React. Furthermore, the course content will be supplemented with relevant insights from the current industry. Our primary focus will be introducing client-side programming with JavaScript, but there's no experience required other than basic programming concepts. Whether you're looking to launch your own personal project or kickstart your career, you'll gain hands-on experience that will set you apart in the fast-growing field of web development. Join us and transform your passion for coding into real-world expertise!</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Linear Algebra for Computing</a></td>
            <td class = "academic">Vectors, matrices, and matrix algebra; systems of linear equations; matrix inverses; least squares problems; eigenvalues and eigenvectors; using Python for computational linear algebra; applications from areas such as data science, computer graphics, graph algorithms, and web search.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Organization of Programming Languages</a></td>
            <td class = "academic">High level language features: data types, control structures; formal lexical and syntactical analysis; operational semantics; language translation.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Overview of Cybersecurity</a></td>
            <td class = "academic">Exploration of the basic concepts and terminology in cybersecurity for students from a variety of technical or non-technical backgrounds; major sub-disciplines of cybersecurity; impact of cybersecurity on business, ethical, and technical levels; data protection concepts, privacy, and intellectual property; data protection techniques, encryption, and authentication; security in wired and wireless networks, operating systems, applications, databases, and the cloud; ethical hacking and vulnerability management; lab exercises and case studies to introduce technical concepts; prepares students to study cybersecurity in-depth in future coursework; course is the introductory required course for a minor in cybersecurity.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Platform Based Computing</a></td>
            <td class = "academic">Python APIs, internet programming and security, mobile app programming, a team project.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Principles of Database Systems</a></td>
            <td class = "academic">Concepts and technology of database management systems and data modeling with an emphasis on the relational model; database querying and normalization; physical data organization. A group project to design and implement a database is a key aspect of this course.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Product & Service Prototyping</a></td>
            <td class = "academic">Team-based course focused on the design and construction of of a proof-of-principle prototype which demonstrates a product or service. Students will create a high-level product design specification and conduct market and competitive analysis; hold consumer focus interviews and report findings.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Senior Projects *Currently Enrolled*</a></td>
            <td class = "academic">Capstone course centered around a semester long sofware development or research project; project planning; requirements elicitation and specification; teamwork; oral presentations required of all students.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Software Engineering</a></td>
            <td class = "academic">Management and production of software systems; the software life cycle; software design techniques and methodologies; participation in a team software development project.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Statistics for Computing</a></td>
            <td class = "academic">Probability, counting, discrete and continuous distributions, descriptive and inferential statistics, experimentation, reading of scientific papers -- all taught from the point of view of computer science.</td>
          </tr>
          <tr class ="td-typing-area">
            <td class = "academic"><a class = "project-header">Theory of Computation *Currently Enrolled*</a></td>
            <td class = "academic">Finite automata and regular expressions; push down automata and context-free grammars; Turing machines; Church's thesis; computability; NP-completeness.</td>
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
        <p>2024 Tyler Heckel</p>
      </footer>
    </div>
    );
}