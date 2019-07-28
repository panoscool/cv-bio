import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 310,
    marginBottom: 10
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
}));

const ImgMediaCard = props => {
  const classes = useStyles();

  const { img, title, text, live, github, codesandbox, condition } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={title}
          title={title}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">{text}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          disabled={condition.includes("github")}
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            GitHub
          </a>
        </Button>
        <Button
          size="small"
          color="primary"
          disabled={condition.includes("codesandbox")}
        >
          <a
            href={codesandbox}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            CodeSandbox
          </a>
        </Button>
        <Button
          size="small"
          color="primary"
          disabled={condition.includes("live")}
        >
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            Live Demo
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;
