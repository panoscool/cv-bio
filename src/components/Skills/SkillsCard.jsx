import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { LanguageContext } from "../../LanguageContext";

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
