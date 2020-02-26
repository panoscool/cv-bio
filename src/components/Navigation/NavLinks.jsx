import React, { Fragment, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from "@material-ui/icons/Home";
import Work from "@material-ui/icons/Work";
import Widgets from "@material-ui/icons/Widgets";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { LanguageContext } from "../../context/LanguageContext";

function NavLinks({ navType }) {
  const { lang } = useContext(LanguageContext);

  const navigation = [
    { to: "/", label: lang("NavBarHome"), icon: <Home /> },
    { to: "/projects", label: lang("NavBarProjects"), icon: <Work /> },
    { to: "/skills", label: lang("NavBarSkills"), icon: <Widgets /> }
  ];

  let { pathname } = useLocation();

  if (navType === 'bottomNavigation') {
    return (
      <BottomNavigation showLabels value={pathname}>
        {navigation.map(nav => (
          <BottomNavigationAction key={`bottom-${nav.to}`} label={nav.label} value={nav.to} icon={nav.icon} component={Link} to={nav.to} />
        ))}
      </BottomNavigation>
    );
  }

  return (
    <Fragment>
      <Hidden smDown implementation="css">
        {navigation.map(nav => (
          <Button color="inherit" key={`top-${nav.to}`} component={Link} to={nav.to}>
            {nav.label}
          </Button>
        ))}
      </Hidden>
      <LanguageSwitcher />
      <ThemeToggle />
    </Fragment>
  );
}

export default NavLinks;
