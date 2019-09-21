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
import MenuLinks from "./MenuLinks";
import DrawerMenu from "./DrawerMenu";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    // boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1
  },
  navIconHide: {
    color: "inherit",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  grow: {
    flexGrow: 1,
    color: "inherit"
  }
}));

function AppNavbar({ location: { pathname } }) {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogo = () => {
    setLogoOpen(false);
  };

  setTimeout(() => handleLogo(), 3000);

  const styles = { textDecoration: "inherit", color: "inherit" };

  return (
    <Fragment>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.navIconHide}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.grow} noWrap>
            <Link to="/" style={styles}>
              {logoOpen ? (
                <img
                  src="/assets/images/logo.png"
                  alt="PanosCool"
                  width="105px"
                  height="35px"
                />
              ) : (
                <span>Panos K.</span>
              )}
            </Link>
          </Typography>
          <MenuLinks />
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          <DrawerMenu
            pahname={pathname}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Drawer>
      </Hidden>
    </Fragment>
  );
}

export default withRouter(AppNavbar);
