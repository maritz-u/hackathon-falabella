import { Divider, makeStyles } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Case from "./Case";
import Title from "./Title";

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

const GeneralUser = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          <Title>Registro de incidencias</Title>
          <Divider />
          <Case />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GeneralUser;
