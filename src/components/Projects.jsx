import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectsArray from './ProjectsArray'

const FullWidthGrid = props => {
  return (
    <div className="projects-card">
      {projectsArray.map(proj => (
        <ProjectCard
          img={proj.img}
          title={proj.title}
          text={proj.text}
          live={proj.live}
          condition={proj.condition}
        />
      ))}
    </div>
  );
};

export default FullWidthGrid;
