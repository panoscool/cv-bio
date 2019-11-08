import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import WbSunny from "@material-ui/icons/WbSunny";
import LanguageSwitcher from "./LanguageSwitcher";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";

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
    const themeMode = theme === "light" ? "dark" : "light";
    setTheme(themeMode);
    localStorage.setItem("panos_theme", themeMode);
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
