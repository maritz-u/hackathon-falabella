import { makeStyles } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import System2 from "./System2";
import Demand from "./Demand";
import Entry from "./Entry";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "auto",
  },
  fixedHeight: {
    height: 240,
  },
}));

const DemandWrapper = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper className={classes.paper}>
        <Demand />
        <Entry />
        <System2 />
      </Paper>
    </Grid>
  );
};

export default DemandWrapper;
