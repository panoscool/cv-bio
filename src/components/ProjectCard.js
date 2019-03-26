import React from "react";
import PropTypes from "prop-types";
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
  const { classes, img, title, live, github, codesandbox } = props;
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
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            GitHub
          </a>
        </Button>
        <Button size="small" color="primary">
          <a
            href={codesandbox}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            CodeSandbox
          </a>
        </Button>
        <Button size="small" color="primary">
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

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
