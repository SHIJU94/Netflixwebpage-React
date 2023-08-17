import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "./Helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> key={project.name}</h1>
      
      <p>
        <b>Skills:</b> key={project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;