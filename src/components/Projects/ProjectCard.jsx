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
  media: {
    height: "auto",
    objectFit: "fill"
  }
}));

function ImgMediaCard(props) {
  const classes = useStyles();

  const { img, title, text, live, github, codesandbox, condition } = props;

  const buttons = [
    { disabled: "github", href: github, label: "GitHub" },
    { disabled: "codesandbox", href: codesandbox, label: "CodeSandbox" },
    { disabled: "live", href: live, label: "Live" }
  ];

  return (
    <Card className="card">
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
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="body2">
            {text.map(obj => (
              <li key={obj.label} className="project-list">
                <i className={obj.icon} aria-hidden="true" />
                <span>{obj.text}</span>
              </li>
            ))}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {buttons.map(obj => (
          <Button
            key={obj.label}
            size="small"
            color="secondary"
            disabled={condition.includes(obj.disabled)}
          >
            <a
              href={obj.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              {obj.label}
            </a>
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;
