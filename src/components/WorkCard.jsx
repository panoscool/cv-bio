import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
}));

const ImgMediaCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          className={classes.media}
          height="140"
          image={props.img}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.icon} {props.title}
          </Typography>
          <Typography component="p">
            {props.list.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImgMediaCard;
