import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { LanguageContext } from "../../context/LanguageContext";

const useStyles = makeStyles(theme => ({
  media: {
    height: "auto",
    objectFit: "fill"
  }
}));

function ImgMediaCard(props) {
  const classes = useStyles();
  const { lang } = useContext(LanguageContext);

  const { title, img, icon, list } = props;

  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={lang(title)}
          height="140"
          image={img}
          title={lang(title)}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            <i className={icon} aria-hidden="true" /> {lang(title)}
          </Typography>
          <Typography variant="body2">
            {lang(list).map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ImgMediaCard;
