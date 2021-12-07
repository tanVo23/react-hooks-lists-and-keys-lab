
   
import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((projects) => <ProjectItem name={projects.name} about={projects.about} technologies={projects.technologies} key={projects.id}/>)}
        </div>
    </div>
  );
}

export default ProjectList;