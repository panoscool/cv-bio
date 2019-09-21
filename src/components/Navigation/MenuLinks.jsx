import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Hidden, Button, IconButton, Tooltip } from "@material-ui/core";
import { WbSunny } from "@material-ui/icons";
import LanguageSwitcher from "./LanguageSwitcher";
import { LanguageContext } from "../../LanguageContext";
import { ThemeContext } from "../../ThemeContext";

function MenuLinks() {
  const { lang } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const navigation = [
    { to: "/", label: lang("NavBarHome") },
    { to: "/about", label: lang("NavBarAbout") },
    { to: "/skills", label: lang("NavBarSkills") },
    { to: "/projects", label: lang("NavBarProjects") }
  ];

  const toggleThemeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
      <Tooltip title="Toggle light/dark theme">
        <IconButton onClick={toggleThemeMode} aria-label="toggle">
          <WbSunny color="inherit" />
        </IconButton>
      </Tooltip>
    </Fragment>
  );
}

export default MenuLinks;
