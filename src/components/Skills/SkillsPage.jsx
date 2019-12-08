import React from "react";
import Grid from "@material-ui/core/Grid";
import SkillsCard from "./SkillsCard";
import skills from "../../data/skills";

function SkillsPage() {
  return (
    <Grid container spacing={1}>
      {skills.map(obj => (
        <Grid item xs={12} md={3} key={obj.id}>
          <SkillsCard {...obj} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SkillsPage;
