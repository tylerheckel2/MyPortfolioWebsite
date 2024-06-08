import './App.css';
import React from "react";
import { Routes, Route, useNavigate, BrowserRouter} from "react-router-dom";
import SkillsPage from './Skills';
import ProjectsPage from './Projects';
import ExperiencePage from './Experience';
import HomePage from './Home';

export default function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/experience" element={<ExperiencePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
