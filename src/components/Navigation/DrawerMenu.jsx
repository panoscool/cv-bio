import React from "react";
import { Link } from "react-router-dom";
import { IconButton, MenuList, MenuItem } from "@material-ui/core";
import { Home, Info, Work, Pages } from "@material-ui/icons";
import lang from "../../services/lang";

function DrawerMenu({ handleDrawerToggle, pathname }) {
  const navigation = [
    { to: "/", label: lang("NavBarHome"), icon: <Home /> },
    { to: "/about", label: lang("NavBarAbout"), icon: <Info /> },
    { to: "/skills", label: lang("NavBarSkills"), icon: <Work /> },
    { to: "/projects", label: lang("NavBarProjects"), icon: <Pages /> }
  ];

  return (
    <MenuList>
      {navigation.map(nav => (
        <MenuItem
          key={nav.to}
          component={Link}
          to={nav.to}
          selected={nav.to === pathname}
          onClick={handleDrawerToggle}
        >
          <IconButton color="inherit">{nav.icon}</IconButton>
          {nav.label}
        </MenuItem>
      ))}
    </MenuList>
  );
}

export default DrawerMenu;
