import { makeStyles } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AdminTable from "./AdminTable";
import GeneralPie from "./GeneralPieChart";
import VerticalBar from "./VerticalBar";
import Title from "./Title";
import AdminTableDemand from "./AdminTableDemand";
import DoughnutChart from "./DoughnutChart";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "auto",
  },
  title: {
    marginBottom: "20px",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Admin = ({ displayDemands }) => {
  const classes = useStyles();
  console.log("displayDemands", displayDemands);
  return (
    <Grid container spacing={3}>
      {displayDemands === "GENERAL" && (
        <>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {" "}
              <Title>General</Title>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={classes.paper}>
              <GeneralPie />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={classes.paper}>
              <DoughnutChart />
            </Paper>
          </Grid>
        </>
      )}
      {displayDemands === "RECLAMOS" && (
        <>
          <Grid item xs={12} md={12} lg={12}>
            <Grid item xs={12}>
              <Paper className={`${classes.title} ${classes.paper}`}>
                <Title>Reclamos</Title>
              </Paper>
            </Grid>

            <Paper className={classes.paper}>
              <VerticalBar />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <AdminTable></AdminTable>
            </Paper>
          </Grid>
        </>
      )}

      {displayDemands === "DEMANDAS" && (
        <>
          <Grid item xs={12}>
            <Paper className={` ${classes.paper}`}>
              <Title>Demandas</Title>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <AdminTableDemand></AdminTableDemand>
            </Paper>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Admin;
