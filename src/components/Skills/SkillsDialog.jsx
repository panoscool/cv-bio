import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

function SkillsDialog({ open, close, headline, list, ...other }) {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={close} {...other}>
      <DialogTitle>
        {headline}
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={close}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {list &&
          list.map(({ title, description }, index) => (
            <Fragment key={index}>
              <li>{title}</li> <span>{description}</span>
            </Fragment>
          ))}
      </DialogContent>
    </Dialog>
  );
}

export default SkillsDialog;
