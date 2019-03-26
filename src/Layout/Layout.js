import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  CssBaseline,
  MenuList,
  MenuItem,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Menu, Home, Info, Work, Pages } from "@material-ui/icons";
import LanguageSwitcher from "./LanguageSwitcher";
import lang from "../services/lang";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class Layout extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const {
      classes,
      location: { pathname },
      children
    } = this.props;
    const { mobileOpen } = this.state;

    const topMenu = (
      <Hidden smDown implementation="css">
        <Button component={Link} to="/">
          {lang("NavBarHome")}
        </Button>
        <Button component={Link} to="/about">
          {lang("NavBarAbout")}
        </Button>
        <Button component={Link} to="/projects">
          {lang("NavBarProjects")}
        </Button>
        <Button component={Link} to="/work-together">
          {lang("NavBarWorkTogether")}
        </Button>
      </Hidden>
    );

    const drawer = (
      <Fragment>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <MenuList>
          <MenuItem
            component={Link}
            to="/"
            selected={"/" === pathname}
            onClick={this.handleDrawerToggle}
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
            onClick={this.handleDrawerToggle}
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
            onClick={this.handleDrawerToggle}
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
            onClick={this.handleDrawerToggle}
          >
            <IconButton color="inherit">
              <Work />
            </IconButton>
            {lang("NavBarWorkTogether")}
          </MenuItem>
        </MenuList>
      </Fragment>
    );

    return (
      <Fragment>
        <CssBaseline />

        <div className={classes.root}>
          <AppBar position="fixed" color="default" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <Menu />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.grow}
                noWrap
              >
                <Link
                  to="/"
                  style={{ textDecoration: "inherit", color: "inherit" }}
                >
                  PanosCool
                </Link>
              </Typography>
              {topMenu}
              <LanguageSwitcher />
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </Fragment>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(Layout);
