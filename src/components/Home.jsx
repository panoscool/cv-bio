import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const CenteredGrid = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <img src="/assets/images/avatar.png" alt="avatar" className="avatar-img" />
        <div className="banner-text">
          <h1>Front End Developer</h1>

          <hr />

          <p>
            HTML/CSS | Bootstrap | JavaScript | React | Material-UI | WordPress
          </p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/lkullolli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/panoscool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square" aria-hidden="true" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default CenteredGrid;
