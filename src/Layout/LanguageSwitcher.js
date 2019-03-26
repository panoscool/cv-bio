import React, { Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import lang, {
  getLanguage,
  setLanguage,
  getLanguageList
} from "../services/lang";

const styles = {
  root: {
    border: "none",
    borderRadius: "none",
    color: "inherit"
  }
};

class LanguageSwitcher extends React.Component {
  state = {
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const language = getLanguage();
    const languages = getLanguageList();

    const { classes } = this.props;

    return (
      <Fragment>
        <Button
          className={classes.root}
          aria-owns={open ? "menu-appbar" : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
        >
          {language.toUpperCase()}
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
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
}

export default withStyles(styles)(LanguageSwitcher);
