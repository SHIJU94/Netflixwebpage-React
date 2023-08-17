import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import ProjectsPage from './Projects'; // Renamed Projects to ProjectsPage
import ExperiencePage from './Experience'; // Renamed Experience to ExperiencePage
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <div className='Main'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} key="home" />
          <Route path='/projects/*' element={<ProjectsPage />} key="projects" />
          <Route path='/experience' element={<ExperiencePage />} key="experience" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Main;
