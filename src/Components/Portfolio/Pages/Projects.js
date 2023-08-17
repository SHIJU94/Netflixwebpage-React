import React from 'react';
import ProjectItem from './ProjectItem'; // Adjust the path to match your file structure
import { ProjectList } from '../Helpers/ProjectList'; // Assuming you have a ProjectList array

import './Projects.css'; // Adjust the path to match your CSS file

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => (
          <ProjectItem key={project.id} id={project.id} name={project.name} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

