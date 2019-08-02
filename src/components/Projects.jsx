import React from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "../components/ProjectCard";
import projectsArray from "../data/ProjectsArray";

const FullWidthGrid = () => {
  return (
    <Grid container spacing={1}>
      {projectsArray.map(obj => (
        <Grid item xs={12} md={3}>
          <ProjectCard key={obj.title} {...obj} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FullWidthGrid;
