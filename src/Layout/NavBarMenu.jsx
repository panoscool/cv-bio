import React from "react";
import { Link } from "react-router-dom";
import { Hidden, Button } from "@material-ui/core";
import lang from "../services/lang";

const NavBarMenu = () => (
  <Hidden smDown implementation="css">
    <Button component={Link} to="/">
      {lang("NavBarHome")}
    </Button>
    <Button component={Link} to="/about">
      {lang("NavBarAbout")}
    </Button>
    <Button component={Link} to="/projects">
      {lang("NavBarProjects")}
    </Button>
    <Button component={Link} to="/work-together">
      {lang("NavBarWorkTogether")}
    </Button>
  </Hidden>
);

export default NavBarMenu;
