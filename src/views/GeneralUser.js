import { Divider, makeStyles } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import Claim from "./Claim";
import Case2 from "./Case2";
import Case from "./Case";
import Antecedent from "./Antecedent";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const GeneralUser = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper>
          <h1>Este usuario puede registrar issues</h1>
          <Case />
          <Divider />
          <Case2 />
          <Divider />
          <Claim />
          <Divider />
          <Antecedent />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GeneralUser;
