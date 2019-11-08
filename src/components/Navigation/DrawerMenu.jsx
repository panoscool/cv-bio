import React, { useContext } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Home from "@material-ui/icons/Home";
import Info from "@material-ui/icons/Info";
import Work from "@material-ui/icons/Work";
import Pages from "@material-ui/icons/Pages";
import { LanguageContext } from "../../context/LanguageContext";

function DrawerMenu({ handleDrawerToggle, pathname }) {
  const { lang } = useContext(LanguageContext);

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
