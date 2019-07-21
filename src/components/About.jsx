import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  }
}));

const About = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>about me</Paper>
    </div>
  );
};

export default About;
