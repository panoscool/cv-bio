import React, { Fragment } from "react";
import { Grid, Divider, LinearProgress } from "@material-ui/core";

function Resume(props) {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <h5>{props.year}</h5>
        </Grid>
        <Grid item xs={9}>
          <h3>{props.subtitle}</h3>
          <p>{props.description}</p>
        </Grid>
        {props.showProgress && (
          <Grid item xs={12}>
            <h5>{props.key}</h5>
            {props.skills.map(obj => (
              <div syle={{ display: "flex" }}>
                <h4>{obj.key}</h4>
                <LinearProgress
                  color="secondary"
                  variant="determinate"
                  value={obj.progress}
                />
              </div>
            ))}
          </Grid>
        )}
      </Grid>
      <Divider variant="fullWidth" />
    </Fragment>
  );
}

export default Resume;
