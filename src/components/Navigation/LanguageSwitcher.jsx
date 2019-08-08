import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import lang, {
  getLanguage,
  setLanguage,
  getLanguageList
} from "../../services/lang";

const useStyles = makeStyles(theme => ({
  root: {
    border: "none",
    borderRadius: "none",
    color: "inherit"
  }
}));

function LanguageSwitcher() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const language = getLanguage();
  const languages = getLanguageList();

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
        {languages.map(lg => (
          <MenuItem onClick={() => setLanguage(lg)} key={lg}>
            {language === lg ? "-" : ""} {lang(lg).toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
}

export default LanguageSwitcher;
