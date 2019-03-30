import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import ProjectCard from "../components/ProjectCard";
import lang from "../services/lang";
import AtlantisLogo from "../assets/images/atlantis-logo.jpg";
import BurgerLogo from "../assets/images/burger-logo.jpg";
import MyaLogo from "../assets/images/mya-logo.jpg";
import YoloLogo from "../assets/images/yolo-logo.jpg";

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

const FullWidthGrid = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={3}>
          <ProjectCard
            img={AtlantisLogo}
            title={"Atlantis Shine"}
            text={lang("ProjectsPageAtlantisText")}
            live={"https://atlantis-shine.gr/"}
            condition={["github", "codesandbox"]}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <ProjectCard
            img={MyaLogo}
            title={"Mya Collection"}
            text={lang("ProjectsPageMyaText")}
            live={"https://myacollection.com.gr/"}
            condition={["github", "codesandbox"]}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <ProjectCard
            img={YoloLogo}
            title={"Yolo Fashions"}
            text={lang("ProjectsPageYoloText")}
            live={"http://yolofashions.com"}
            condition={["github", "codesandbox"]}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <ProjectCard
            img={BurgerLogo}
            title={"Burger Builder"}
            text={lang("ProjectsPageBurgerText")}
            live={"https://cool-burger-builder.firebaseapp.com/"}
            github={"https://github.com/panoscool/burger-builder"}
            codesandbox={
              "https://codesandbox.io/s/github/panoscool/burger-builder"
            }
            condition={[]}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(FullWidthGrid);
