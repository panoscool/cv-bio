import React from "react";
import { Link } from "react-router-dom";
import { IconButton, MenuList, MenuItem } from "@material-ui/core";
import { Home, Info, Work, Pages } from "@material-ui/icons";
import lang from "../services/lang";

const DrawerMenu = ({ handleDrawerToggle, pathname }) => (
  <MenuList>
    <MenuItem
      component={Link}
      to="/"
      selected={"/" === pathname}
      onClick={handleDrawerToggle}
    >
      <IconButton color="inherit">
        <Home />
      </IconButton>
      {lang("NavBarHome")}
    </MenuItem>
    <MenuItem
      component={Link}
      to="/about"
      selected={"/about" === pathname}
      onClick={handleDrawerToggle}
    >
      <IconButton color="inherit">
        <Info />
      </IconButton>
      {lang("NavBarAbout")}
    </MenuItem>
    <MenuItem
      component={Link}
      to="/projects"
      selected={"/projects" === pathname}
      onClick={handleDrawerToggle}
    >
      <IconButton color="inherit">
        <Pages />
      </IconButton>
      {lang("NavBarProjects")}
    </MenuItem>
    <MenuItem
      component={Link}
      to="/work-together"
      selected={"/work-together" === pathname}
      onClick={handleDrawerToggle}
    >
      <IconButton color="inherit">
        <Work />
      </IconButton>
      {lang("NavBarWorkTogether")}
    </MenuItem>
  </MenuList>
);

export default DrawerMenu;
