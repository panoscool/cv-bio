import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Resume from "./Resume";
import Page from "../Layout/Page";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import resume from "../../data/resume";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  namePadding: {
    paddingTop: "2em"
  }
}));

function About() {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  return (
    <div className={classes.root}>
      <Page>
        <Grid container spacing={2}>
          <Grid item xs={width > 960 ? 4 : 12}>
            <div style={{ textAlign: "center" }}>
              <img
                src="/assets/images/avatar.png"
                alt="avatar"
                className="avatar-img"
              />
            </div>
            <h2 className={classes.namePadding}>Panos K.</h2>
            <h4>Front End Developer</h4>
            <hr className="about-line" />
          </Grid>
          <Grid item xs={width > 960 ? 8 : 12}>
            {resume.map(obj => (
              <div key={obj.title}>
                <h2>{obj.title}</h2>
                <Resume {...obj} />
              </div>
            ))}
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}

export default About;
