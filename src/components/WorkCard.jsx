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
  media: {
    height: "auto",
    objectFit: "fill"
  }
}));

const ImgMediaCard = props => {
  const classes = useStyles();

  const { title, img, icon, list } = props;

  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={img}
          title={title}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {icon} {title}
          </Typography>
          <Typography variant="body2">
            {list.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImgMediaCard;
