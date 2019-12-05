import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { LanguageContext } from "../../context/LanguageContext";

function MenuLinks() {
  const { lang } = useContext(LanguageContext);

  const navigation = [
    { to: "/", label: lang("NavBarHome") },
    { to: "/about", label: lang("NavBarAbout") },
    { to: "/skills", label: lang("NavBarSkills") },
    { to: "/projects", label: lang("NavBarProjects") }
  ];

  return (
    <Fragment>
      <Hidden smDown implementation="css">
        {navigation.map(nav => (
          <Button color="inherit" key={nav.to} component={Link} to={nav.to}>
            {nav.label}
          </Button>
        ))}
      </Hidden>
      <LanguageSwitcher />
      <ThemeToggle />
    </Fragment>
  );
}

export default MenuLinks;
