import { makeStyles } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Case from "./Case";
import Title from "./Title";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import DemandWrapper from "./DemandWrapper";

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
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    console.log("SElected valu", event.target.value);
    setValue(event.target.value);
  };
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>Seleccione el tipo de caso:</Title>
          <FormControl component="fieldset">
            <RadioGroup name="type" value={value} onChange={handleChange}>
              <FormControlLabel
                value="RECLAMO"
                control={<Radio color="primary" />}
                label="Reclamo"
              />
              <FormControlLabel
                value="DEMANDA"
                control={<Radio color="primary" />}
                label="Demanda"
              />
              <FormControlLabel
                value="Consulta"
                control={<Radio color="primary" />}
                label="Consulta"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>

      {value === "RECLAMO" && (
        <>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {" "}
              <Title>Registro de incidencias</Title>
              <Case />
            </Paper>
          </Grid>
        </>
      )}
      {value === "DEMANDA" && <DemandWrapper />}
    </Grid>
  );
};

export default GeneralUser;
