import React, { Component } from "react";
//import Logo from "../img/Logo.png";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from "@material-ui/core/Box";
import { Alert } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/styles";
import theme from "../theme/theme";
import { logDOM } from "@testing-library/react";
import { usuariosValidos, usuarios } from "../data/users";
import { Redirect } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
    alignItems: "center",
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
};

class Antecedentes extends Component {
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

  syncNombreChanges(nombre) {
    console.log(nombre);
    this.setState({
      nombre: nombre,
    });
  }

  syncApellidoChanges(apellido) {
    console.log(apellido);
    this.setState({
      apellido: apellido,
    });
  }

  syncCedulaChanges(cedula) {
    console.log(cedula);
    this.setState({
      cedula: cedula,
    });
  }



    //submitForm(event) {
    //event.preventDefault();
    //const { email } = this.state;
    //if (usuariosValidos.includes(email)) {
    //const usuarioActual = usuarios.find((u) => u.email === email);
    //localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));

    //  const usuario = localStorage.getItem("usuarioActual");
    //window.location.href = "/dashboard";
    //} else {
    //this.setState({ error: true });
    //}
    //}

  render() {
    const { classes } = this.props;
    const { error } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          

          <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
              Sobre la pieza publicitaria
            </Box>
          </Typography>
          {error && <Alert severity="error">usuario incorrecto</Alert>}
          <form
            onSubmit={(event) => this.submitForm(event)}
            className={classes.form}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="donde"
              label="¿Donde se publicó?"
              name="¿Donde se publicó?"
              autoComplete="donde"
              autoFocus
              onChange={(ev) => {
                this.syncDondeChanges(ev.target.value);
              }}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="que"
              label="¿Que se publicó?"
              name="¿Que se publicó?"
              autoComplete="que"
              autoFocus
              onChange={(ev) => {
                this.syncQueChanges(ev.target.value);
              }}
            />

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

            
          <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
              Reclamante
            </Box>
          </Typography>


          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="nombre"
              label="Nombre"
              id="nombre"
              autoComplete="nombre"
              onChange={(ev) => {
                this.syncNombreChanges(ev.target.value);
              }}
            />


          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="apellido"
              label="Apellido"
              id="apellido"
              autoComplete="apellido"
              onChange={(ev) => {
                this.syncApellidoChanges(ev.target.value);
              }}
            />

          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="cedula"
              label="Cédula de identidad/DNI"
              id="apellido"
              autoComplete="apellido"
              onChange={(ev) => {
                this.syncCedulaChanges(ev.target.value);
              }}
            />

        <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
              Reclamo
            </Box>
          </Typography>

    
        
      <FormLabel component="legend">Precio del producto</FormLabel>
      <FormGroup aria-label="position" row>
        
        <FormControlLabel
          value="si"
          control={<Checkbox color="primary" />}
          label="Si"
          labelPlacement=""
        />

        <FormControlLabel
          value="no"
          control={<Checkbox color="primary" />}
          label="No"
          labelPlacement="end"
        />  
      </FormGroup>
      
      <FormLabel component="legend">Calidad del producto</FormLabel>
      <FormGroup aria-label="position" row>
        
        <FormControlLabel
          value="si"
          control={<Checkbox color="primary" />}
          label="Si"
          labelPlacement=""
        />

        <FormControlLabel
          value="no"
          control={<Checkbox color="primary" />}
          label="No"
          labelPlacement="end"
        />  
      </FormGroup>

      <FormLabel component="legend">Contenido del producto</FormLabel>
      <FormGroup aria-label="position" row>
        
        <FormControlLabel
          value="si"
          control={<Checkbox color="primary" />}
          label="Si"
          labelPlacement=""
        />

        <FormControlLabel
          value="no"
          control={<Checkbox color="primary" />}
          label="No"
          labelPlacement="end"
        />  
      </FormGroup>
  

      <FormLabel component="legend">Oferta especial no respetada</FormLabel>
      <FormGroup aria-label="position" row>
        
        <FormControlLabel
          value="si"
          control={<Checkbox color="primary" />}
          label="Si"
          labelPlacement=""
        />

        <FormControlLabel
          value="no"
          control={<Checkbox color="primary" />}
          label="No"
          labelPlacement="end"
        />  
      </FormGroup>


      <FormLabel component="legend">Condiciones comerciales no respetada</FormLabel>
      <FormGroup aria-label="position" row>
        
        <FormControlLabel
          value="si"
          control={<Checkbox color="primary" />}
          label="Si"
          labelPlacement=""
        />

        <FormControlLabel
          value="no"
          control={<Checkbox color="primary" />}
          label="No"
          labelPlacement="end"
        />  
      </FormGroup>

      <FormLabel component="legend">Si el cliente reclama algún monto, ingréselo</FormLabel>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Monto" variant="outlined" />
      </form>

      <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
            Antecendentes Extras
            </Box>
          </Typography>




      <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
            Comentarios
            </Box>
          </Typography>

          <FormLabel component="legend">Si el cliente reclama algún monto, ingréselo</FormLabel>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Agregar comentarios adicionales" variant="outlined" />
      </form>




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
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(Antecedentes);