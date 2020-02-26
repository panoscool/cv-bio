import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppNavbar from "./Navigation/AppNavbar";
import BottomNavbar from './Navigation/BottomNavbar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(2, 2, 8, 2)
  }
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppNavbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
      <BottomNavbar />
    </div>
  );
}

export default Layout;
