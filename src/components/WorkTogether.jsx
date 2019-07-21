import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import WorkCard from "../components/WorkCard";
import lang from "../services/lang";
import CodeIcon from "../assets/images/code-icon.jpg";
import ServiceIcon from "../assets/images/service-icon.jpg";
import UpdateIcon from "../assets/images/update-icon.jpg";
import LearnIcon from "../assets/images/learn-icon.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
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

const FullWidthGrid = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className="contact-links">
          <p>{lang("WorkPageParagraph")}</p>
          <a href="mailto:lkullolli@gmail.com?Subject=Work Together">
            <i class="fas fa-envelope" />
          </a>
          <a href="https://m.me/panoscool1">
            <i class="fab fa-facebook-messenger" />
          </a>
        </div>
      </Paper>
      <div className="projects-card">
        <WorkCard
          img={CodeIcon}
          icon={icons.globe}
          title={lang("WorkPageWebTitle")}
          list={lang("WorkPageWebList")}
        />
        <WorkCard
          img={ServiceIcon}
          icon={icons.laptop}
          title={lang("WorkPageLaptopTitle")}
          list={lang("WorkPageLaptopRepair")}
        />
        <WorkCard
          img={UpdateIcon}
          icon={icons.mobile}
          title={lang("WorkPageMobileTitle")}
          list={lang("WorkPageMobileRepair")}
        />
        <WorkCard
          img={LearnIcon}
          icon={icons.book}
          title={lang("WorkPageLearningTitle")}
          list={lang("WorkPageLearningList")}
        />
      </div>
    </div>
  );
};

export default FullWidthGrid;
