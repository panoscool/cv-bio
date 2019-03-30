import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import WorkCard from "../components/WorkCard";
import lang from "../services/lang";
import CodeIcon from "../assets/images/code-icon.jpg";
import ServiceIcon from "../assets/images/service-icon.jpg";
import UpdateIcon from "../assets/images/update-icon.jpg";
import LearnIcon from "../assets/images/learn-icon.jpg";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const icons = {
  globe: <i className="fas fa-globe" />,
  laptop: <i className="fas fa-laptop" />,
  mobile: <i className="fas fa-mobile" />,
  book: <i className="fas fa-book" />
};

const FullWidthGrid = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{lang("WorkPageParagraph")}</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <WorkCard
            img={CodeIcon}
            icon={icons.globe}
            title={lang("WorkPageWebTitle")}
            list={lang("WorkPageWebList")}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <WorkCard
            img={ServiceIcon}
            icon={icons.laptop}
            title={lang("WorkPageLaptopTitle")}
            list={lang("WorkPageLaptopRepair")}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <WorkCard
            img={UpdateIcon}
            icon={icons.mobile}
            title={lang("WorkPageMobileTitle")}
            list={lang("WorkPageMobileRepair")}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <WorkCard
            img={LearnIcon}
            icon={icons.book}
            title={lang("WorkPageLearningTitle")}
            list={lang("WorkPageLearningList")}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(FullWidthGrid);
