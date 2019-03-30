import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
};

const ImgMediaCard = props => {
  const {
    classes,
    img,
    title,
    text,
    live,
    github,
    codesandbox,
    condition
  } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          className={classes.media}
          height="140"
          image={img}
          title={title}
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

export default withStyles(styles)(ImgMediaCard);
