import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavLinks from "./NavLinks";

const useStyles = makeStyles(theme => ({
  appBar: {
    // boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1
  },
  grow: {
    flexGrow: 1,
    color: "inherit"
  },
  logoLink: {
    color: "inherit",
    textDecoration: "inherit"
  }
}));

function AppNavbar() {
  const classes = useStyles();
  const [logoOpen, setLogoOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => setLogoOpen(false), 3000);
  });

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.grow} noWrap>
          <Link to="/" className={classes.logoLink}>
            {logoOpen ? (
              <img
                src="/assets/logo.png"
                alt="PanosCool"
                width="105px"
                height="35px"
              />
            ) : (
                <span>Panos K.</span>
              )}
          </Link>
        </Typography>
        <NavLinks />
      </Toolbar>
    </AppBar>
  );
}

export default AppNavbar;
