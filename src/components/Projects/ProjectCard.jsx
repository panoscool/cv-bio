import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  media: {
    height: "auto",
    objectFit: "fill"
  }
}));

function ImgMediaCard(props) {
  const classes = useStyles();

  const { img, title, infos, live, github, codesandbox, condition } = props;

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
            {infos.map((obj, index) => (
              <li key={index} className="project-list">
                <i className={obj.icon} aria-hidden="true" />
                <span>{obj.text}</span>
              </li>
            ))}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {buttons.map((obj, index) => (
          <Button
            key={index}
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
