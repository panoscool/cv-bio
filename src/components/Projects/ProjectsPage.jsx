import React from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

function FullWidthGrid() {
  return (
    <Grid container spacing={1}>
      {projects.map(obj => (
        <Grid item xs={12} md={3} key={obj.id}>
          <ProjectCard {...obj} />
        </Grid>
      ))}
    </Grid>
  );
}

export default FullWidthGrid;
