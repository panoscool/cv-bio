import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  CssBaseline
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import LanguageSwitcher from "./LanguageSwitcher";
import NavBarMenu from "./NavBarMenu";
import DrawerMenu from "./DrawerMenu";
import logo from "../assets/images/logo.png";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: "tooltip",
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
    padding: 16
  }
}));

const Layout = ({ children, location: { pathname } }) => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Fragment>
      <CssBaseline />

      <div className={classes.root}>
        <AppBar position="fixed" color="default" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
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
                <img src={logo} alt="PanosCool" width="105px" height="35px" />
              </Link>
            </Typography>
            <NavBarMenu />
            <LanguageSwitcher />
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <DrawerMenu
              pahname={pathname}
              handleDrawerToggle={handleDrawerToggle}
            />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </Fragment>
  );
};

export default withRouter(Layout);
