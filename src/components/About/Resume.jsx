import React, { Fragment } from "react";
import { Grid, Divider, LinearProgress } from "@material-ui/core";

function Resume(props) {
  return (
    <Fragment>
      <Grid container spacing={2}>
        {props.list &&
          props.list.map(el => (
            <Fragment key={el.subtitle}>
              <Grid item xs={3}>
                <h5>{el.year}</h5>
              </Grid>
              <Grid item xs={9}>
                <h3>{el.subtitle}</h3>
                <p>{el.description}</p>
              </Grid>
            </Fragment>
          ))}
        {props.showProgress && (
          <Grid item xs={12}>
            {props.skills.map(obj => (
              <div key={obj.label}>
                <h4>{obj.label}</h4>
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
