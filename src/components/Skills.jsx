import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SkillsCard from "./SkillsCard";
import lang from "../services/lang";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginBottom: 16,
    color: theme.palette.text.secondary
  }
}));

const icons = {
  globe: <i className="fas fa-globe" />,
  laptop: <i className="fas fa-laptop" />,
  mobile: <i className="fas fa-mobile" />,
  book: <i className="fas fa-book" />
};

function FullWidthGrid() {
  const classes = useStyles();

  const array = [
    {
      img: "/assets/images/code-icon.jpg",
      icon: icons.globe,
      title: lang("WorkPageWebTitle"),
      list: lang("WorkPageWebList")
    },
    {
      img: "/assets/images/service-icon.jpg",
      icon: icons.laptop,
      title: lang("WorkPageLaptopTitle"),
      list: lang("WorkPageLaptopRepair")
    },
    {
      img: "/assets/images/update-icon.jpg",
      icon: icons.mobile,
      title: lang("WorkPageMobileTitle"),
      list: lang("WorkPageMobileRepair")
    },
    {
      img: "/assets/images/learn-icon.jpg",
      icon: icons.book,
      title: lang("WorkPageLearningTitle"),
      list: lang("WorkPageLearningList")
    }
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {array.map(obj => (
          <Grid item xs={12} md={3} key={obj.img}>
            <SkillsCard {...obj} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default FullWidthGrid;
