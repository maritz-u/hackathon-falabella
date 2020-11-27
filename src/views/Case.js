import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Claim from "./Claim";
import Antecedent from "./Antecedent";
import { Divider, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // "& .MuiTypography-h5": {
    //   marginLeft: -11,
    // },
  },
  wrapper: {
    marginTop: "20px",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));

const Case = () => {
  const classes = useStyles();

  const [displayAccident, setDisplayAccident] = useState(false);
  const [displayPublicity, setDisplayPublicity] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

  const storageUsuario = localStorage.getItem("usuarioActual");
  const usuario = JSON.parse(storageUsuario);

  const storageReclamos = localStorage.getItem("reclamos");
  const reclamos = storageReclamos ? JSON.parse(storageReclamos) : [];

  const [datos, setDatos] = useState({
    usuario: usuario.nombre,
    fecha: new Date(),
  });

  const handleInputChange = (event) => {
    if (event.target.value === "Accidente") {
      setDisplayAccident(!displayAccident);
    } else if (event.target.value === "Publicidad") {
      setDisplayPublicity(!displayPublicity);
    }

    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
      pais: "Chile",
    });
  };

  const guardarDatos = (event) => {
    document.querySelector("body").scrollTo(0, 0);
    event.preventDefault();
    reclamos.push(datos);

    console.log("enviando datos..." + JSON.stringify(datos), reclamos);

    localStorage.setItem("reclamos", JSON.stringify(reclamos));
    setDisplayAlert(true);
  };

  return (
    <div className="aqui">
      <Container component="main" maxWidth="xs">
        <form
          className={classes.container}
          noValidate
          onSubmit={(e) => guardarDatos(e)}
        >
          <FormControl component="fieldset" className={classes.formControl}>
            <Typography component="h1" variant="h5" color="primary">
              <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
                Medio de reclamo
              </Box>
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="medio"
                    onChange={(e) => handleInputChange(e)}
                    color="primary"
                    value="online"
                  />
                }
                label="Online"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="medio"
                    onChange={(e) => handleInputChange(e)}
                    color="primary"
                    value="local"
                  />
                }
                label="Local"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="medio"
                    onChange={(e) => handleInputChange(e)}
                    color="primary"
                    value="casa matriz"
                  />
                }
                label="Casa Matriz/Oficina Central"
              />
            </FormGroup>
            <Typography component="h1" variant="h5" color="primary">
              <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
                Materias por reclamo
              </Box>
            </Typography>

            <FormGroup>
              <FormControlLabel
                value="2"
                name="materia"
                control={<Checkbox color="primary" />}
                label="Reclamo por despacho del producto"
                labelPlacement="end"
              />
              <FormControlLabel
                name="materia"
                value="Publicidad"
                control={
                  <Checkbox
                    color="primary"
                    onClick={(event) => handleInputChange(event)}
                  />
                }
                label="Reclamo por publicidad engañosa"
                labelPlacement="end"
              />
              <FormControlLabel
                name="materia"
                value="Accidente"
                control={
                  <Checkbox
                    color="primary"
                    onClick={(event) => handleInputChange(event)}
                  />
                }
                label="Reclamo por accidente de cliente"
                labelPlacement="end"
              />
              <FormControlLabel
                value="top"
                name="materia"
                control={<Checkbox color="primary" />}
                label="Reclamo por uso de estacionamiento"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>

          <TextField
            id="date"
            label="Fecha de reclamo"
            type="date"
            defaultValue="2020-11-26"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="Fecha indicente de reclamo"
            type="date"
            defaultValue="2020-11-26"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />

          {displayAccident && (
            <>
              <br></br>
              <Divider />
              <br></br>
              <br></br>
              <Claim handleInputChange={handleInputChange} />
            </>
          )}
          {displayPublicity && <Antecedent />}

          {displayAlert && (
            <Alert severity="success">
              <AlertTitle>Confirmación:</AlertTitle>
              El caso ha sido ingresado con éxito a facilito
            </Alert>
          )}

          <Box fontWeight="fontWeightBold" m={1} fontSize={40} m={1}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Continuar
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};
export default Case;
