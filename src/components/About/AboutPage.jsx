import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import Resume from "./Resume";
import resume from "../../data/resume";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: 16,
    color: theme.palette.text.secondary
  },
  namePadding: {
    paddingTop: "2em"
  }
}));

function About() {
  const classes = useStyles();
  console.log(resume);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
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
          <Grid item xs={8}>
            {resume.map(obj => (
              <Fragment>
                <h2 key={obj.title}>{obj.title}</h2>
                <Resume {...obj} {...obj.skills} />
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default About;
