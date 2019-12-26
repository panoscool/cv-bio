import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    width: 'auto',
    minHeight: 380
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

function ProjectCard(props) {
  const classes = useStyles();

  const { img, title, infos, status, live, github, codesandbox } = props;

  const buttons = [
    { disabled: "github", href: github, label: "GitHub" },
    { disabled: "codesandbox", href: codesandbox, label: "CodeSandbox" },
    { disabled: "live", href: live, label: "Live" }
  ];

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={img} />
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
      <CardActions disableSpacing>
        {buttons.map((obj, index) => (
          <Button
            key={index}
            size="small"
            color="secondary"
            disabled={status.includes(obj.disabled)}
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

export default ProjectCard;
