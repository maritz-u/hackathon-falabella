import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    sí: true,
    no: false,
  });

  const [stateInseguridad, setInseguridad] = React.useState({
    InseguridadLocal: true,
    InseguridadPersonal: true,
    InseguridadCliente: true,
  });

  const [stateProcess, setProcess] = React.useState({
    siProcess: true,
    noProcess: false,
  });

  const [stateLesion, setLesion] = React.useState({
    Levisima: true,
    Leve: true,
    Grave: true,
    Gravisima: true,
  });

  const [stateSalud, setSalud] = React.useState({
    siSalud: true,
    noSalud: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleInseguridad = (event) => {
    setInseguridad({ ...state, [event.target.name]: event.target.checked });
  };
  const handleProcess = (event) => {
    setProcess({ ...state, [event.target.name]: event.target.checked });
  };
  const handleLesion = (event) => {
    setLesion({ ...state, [event.target.name]: event.target.checked });
  };
  const handleSalud = (event) => {
    setSalud({ ...state, [event.target.name]: event.target.checked });
  };

  const { siProcess, noProcess } = stateProcess;
  const { sí, no } = state;
  const {
    InseguridadCliente,
    InseguridadLocal,
    InseguridadPersonal,
  } = stateInseguridad;
  const { Levisima, Leve, Grave, Gravisima } = stateLesion;
  const { siSalud, noSalud } = stateSalud;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">
          ¿El accidente fue al interior del local?
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={sí}
                color="primary"
                onChange={handleChange}
                name="sí"
              />
            }
            label="sí"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={no}
                color="primary"
                onChange={handleChange}
                name="no"
              />
            }
            label="no"
          />
        </FormGroup>
      </FormControl>
      <Typography component="h1" variant="h5" color="primary">
        <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
          Tipo de accidente
        </Box>
      </Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={InseguridadLocal}
                onChange={handleInseguridad}
                name="Condición insegura del local"
                color="primary"
              />
            }
            label="InseguridadLocal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={InseguridadPersonal}
                onChange={handleInseguridad}
                name="Condición insegura por personal del local"
                color="primary"
              />
            }
            label="InseguridadPersonal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={InseguridadCliente}
                onChange={handleInseguridad}
                name="Acto inseguro del cliente"
                color="primary"
              />
            }
            label="InseguridadCliente"
          />
        </FormGroup>
      </FormControl>
      <Typography component="h1" variant="h5" color="primary">
        <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
          Dudas del accidente
        </Box>
      </Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">¿Se siguió el procedimiento?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={siProcess}
                onChange={handleProcess}
                name="sí"
                color="primary"
              />
            }
            label="sí"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={noProcess}
                onChange={handleProcess}
                color="primary"
                name="no"
              />
            }
            label="no"
          />
        </FormGroup>
        <FormLabel component="legend">
          ¿Qué tipo de lesión tuvo el cliente?
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={Levisima}
                onChange={handleLesion}
                color="primary"
                name="Levisima"
              />
            }
            label="Levísima"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Leve}
                color="primary"
                onChange={handleLesion}
                name="Leve"
              />
            }
            label="Leve"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Grave}
                color="primary"
                onChange={handleLesion}
                name="Grave"
              />
            }
            label="Grave"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Gravisima}
                onChange={handleLesion}
                name="Gravisima"
                color="primary"
              />
            }
            label="Gravísima"
          />
        </FormGroup>
        <FormLabel component="legend">
          ¿Se derivó al cliente a un centro de salud?
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={siSalud}
                color="primary"
                onChange={handleSalud}
                name="sí"
              />
            }
            label="sí"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={noSalud}
                color="primary"
                onChange={handleSalud}
                name="no"
              />
            }
            label="no"
          />
        </FormGroup>
      </FormControl>
      <Typography component="h1" variant="h5" color="primary">
        <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
          Monto reclamado por el cliente
        </Box>
      </Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">¿Cuál es el monto reclamado?</FormLabel>
      </FormControl>
    </div>
  );
}
