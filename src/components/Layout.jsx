import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppNavbar from "./Navigation/AppNavbar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: 16
  }
}));

function Layout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppNavbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
