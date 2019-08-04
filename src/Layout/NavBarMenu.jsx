import React from "react";
import { Link } from "react-router-dom";
import { Hidden, Button } from "@material-ui/core";
import lang from "../services/lang";

const NavBarMenu = () => {

  const navigation = [
    { to: "/", label: lang("NavBarHome") },
    { to: "/about", label: lang("NavBarAbout") },
    { to: "/skills", label: lang("NavBarSkills") },
    { to: "/projects", label: lang("NavBarProjects") }
  ];

  return (
    <Hidden smDown implementation="css">
      {navigation.map(nav => (
        <Button key={nav.to} component={Link} to={nav.to}>
          {nav.label}
        </Button>
      ))}
    </Hidden>
  );
};

export default NavBarMenu;
