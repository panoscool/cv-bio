import React, { Fragment, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { LanguageContext } from "../../context/LanguageContext";

const useStyles = makeStyles(theme => ({
  root: {
    border: "none",
    borderRadius: "none",
    color: "inherit"
  },
  activeMenuItem: {
    fontWeight: 'bold',
  }
}));

function LanguageSwitcher() {
  const classes = useStyles();
  const { lang, language, languages, setLanguage } = useContext(
    LanguageContext
  );
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguage = lg => {
    setLanguage(lg);
    handleClose();
    localStorage.setItem("panos_language", lg);
  };

  const open = Boolean(anchorEl);

  return (
    <Fragment>
      <Button
        className={classes.root}
        aria-owns={open ? "menu-appbar" : null}
        aria-haspopup="true"
        onClick={handleMenu}
      >
        {language.toUpperCase()}
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {languages().map(lg => (
          <MenuItem onClick={() => handleLanguage(lg)} key={lg} className={language === lg ? classes.activeMenuItem : null}>
            {lang(lg)}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
}

export default LanguageSwitcher;
