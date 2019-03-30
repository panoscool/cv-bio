import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import lang from "../services/lang";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  }
});

const About = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h3>{lang("AboutPageProgrammingTitle")}</h3>
        <p>{lang("AboutPageProgrammingParagraph")}</p>
        <h3>{lang("AboutPageMarketingTitle")}</h3>
        <p>{lang("AboutPageMarketingParagraph")}</p>
        <h3>{lang("AboutPageRepairingTitle")}</h3>
        <p>{lang("AboutPageRepairingParagraph")}</p>
        <h3>{lang("AboutPageHobbiesTitle")}</h3>
        <p>{lang("AboutPageHobbiesParagraph")}</p>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(About);
