import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function CenteredGrid() {
  const classes = useStyles();

  const links = [
    { href: "https://www.linkedin.com/in/lkullolli/", icon: "fab fa-linkedin" },
    { href: "https://github.com/panoscool", icon: "fab fa-github-square" },
    { href: "https://facebook.com", icon: "fab fa-facebook" }
  ];

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <img
          src="/assets/images/avatar.png"
          alt="avatar"
          className="avatar-img"
        />
        <div className="banner-text">
          <h1>Front End Developer</h1>

          <hr />

          <p>
            HTML/CSS | Bootstrap | JavaScript | React | Material-UI | WordPress
          </p>

          <div className="social-links">
            {links.map(obj => (
              <a
                href={obj.href}
                key={obj.icon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={obj.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default CenteredGrid;
