import React, { Fragment, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { LanguageContext } from "../../context/LanguageContext";
import SkillsDialog from "./SkillsDialog";

const useStyles = makeStyles(theme => ({
  card: {
    width: "auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  paper: {
    width: "100%",
    maxHeight: 435,
    margin: theme.spacing(2)
  }
}));

function SkillsCard({ title, img, icon, list }) {
  const classes = useStyles();
  const { lang } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  function openModal(id) {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Card className={classes.card} onClick={openModal}>
        <CardActionArea>
          <CardMedia image={img} className={classes.media} />
          <CardContent>
            <Typography gutterBottom variant="h6">
              <i className={icon} aria-hidden="true" /> {lang(title)}
            </Typography>
            <Typography variant="body2">
              {lang(list).map(({ title }, index) => {
                return <li key={index}>{title}</li>;
              })}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <SkillsDialog
        open={open}
        close={closeModal}
        list={lang(list)}
        headline={lang(title)}
        classes={{ paper: classes.paper }}
      />
    </Fragment>
  );
}

export default SkillsCard;
