import React, { Component } from "react";
//import Logo from "../img/Logo.png";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import FormLabel from "@material-ui/core/FormLabel";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/styles";
import theme from "../theme/theme";
import { FormControl } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Title from "./Title";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="right">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = {
  paper: {
    marginTop: "15%",
    display: "flex",
    flexDirection: "column",
    alignItems: "right",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logoFacilito: {
    width: "100%", // Fix IE 11 issue.
  },
<<<<<<< HEAD
  
=======
  upload: {
    cursor: "pointer",
    fontSize: "40px",
  },
  Tipografia: {
      marginRight: theme.spacing(10),
  }
>>>>>>> e46fd92ffca10f82cfc90c2dc203f2591a39ec67
};

class Demandas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donde: "",
      que: "",
      fecha: "",
      nombre: "",
      apellido: "",
      cedula: "",
      error: false,
    };
  }

  syncDondeChanges(donde) {
    console.log(donde);
    this.setState({
      donde: donde,
    });
  }

  syncQueChanges(que) {
    console.log(que);
    this.setState({
      que: que,
    });
  }

  syncFechaChanges(fecha) {
    console.log(fecha);
    this.setState({
      fecha: fecha,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <FormControl>
          <div className={classes.paper}>
            <Typography color="primary">
              <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
                Fecha de notificación
              </Box>
              <FormLabel component="legend">
                ¿Cuándo recibió la notificación de la demanda?
              </FormLabel>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="fecha"
              label=""
              type="date"
              id="fecha"
              autoComplete="fecha"
              onChange={(ev) => {
                this.syncFechaChanges(ev.target.value);
              }}
            />
            <Typography 
            color= "primary">
              <Box
                color="primary"
                fontWeight="fontWeightBold"
                m={1}
                fontSize={20}
                m={1}
              >
                Recepción de demanda
              </Box>
              <FormLabel component="legend">
                ¿Quién recibió la demanda?
              </FormLabel>
            </Typography>
            <TextField
              id="outlined-basic"
              label="Agregar comentarios "
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(ev) => {
                this.syncFechaChanges(ev.target.value);
              }}
            />
            <Typography 
            color="primary">
              <Box
                color="primary"
                fontWeight="fontWeightBold"
                m={1}
                fontSize={20}
                m={1}
              >
                Antecedentes Extras
              </Box>
              <FormLabel component="legend">
                Adjunte el texto completo de la demanda con imágenes por
                ambos lados del papel  </FormLabel>
            <TextField
              id="outlined-basic"
              label="Agregar comentarios adicionales"
              variant="outlined"
              margin="normal"
              fullWidth
              />
              <input
              accept="image/*"
              className={classes.input}
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />

            <label htmlFor="raised-button-file">
              <CloudUploadIcon
                className={classes.upload}
                fontSize="large"
                color="primary"
              />
            </label>
            
            </Typography>
            <Typography color="primary">
              <Box
                color="primary"
                fontWeight="fontWeightBold"
                m={1}
                fontSize={20}
                m={1}
              >
                Comentarios
              </Box>
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(ev) => {
                this.syncFechaChanges(ev.target.value);
              }}
            />
          </div>
        </FormControl>
      </Container>
    );
  }
}

export default withStyles(styles)(Demandas);