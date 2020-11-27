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
import { Alert, AlertTitle } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/styles";
import theme from "../theme/theme";
import { logDOM } from "@testing-library/react";
import { usuariosValidos, usuarios } from "../data/users";
import { Redirect } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';






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
 formControl: {
   width: 390
 },

};

class System2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      cedula: "",
      otro: "",
      error: false,
    };
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

  syncOtroChanges(otro) {
    console.log(otro);
    this.setState({
      otro: otro,
    });
  }

  syncOtraChanges(otra) {
    console.log(otra);
    this.setState({
      otra: otra,
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
          
          
          {error && <Alert severity="error">usuario incorrecto</Alert>}
          <form
            onSubmit={(event) => this.submitForm(event)}
            className={classes.form}
            noValidate
          >

<Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
           Datos de las partes
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

          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="otro"
              label="Agregar otro demandante "
              id="otro"
              autoComplete="otro"
              onChange={(ev) => {
                this.syncOtroChanges(ev.target.value);
              }}
            />    

    
      <FormLabel component="legend">Demandado</FormLabel>
      <FormGroup>
      <br></br>
        <FormControlLabel
          value="falabella"
          control={<Checkbox color="primary" />}
          label="Falabella S.A"
          labelPlacement=""
        />

        <FormControlLabel
          value="homecenter"
          control={<Checkbox color="primary" />}
          label="Homecenter S.A"
          labelPlacement="end"
        />  
     
        <FormControlLabel
          value="tottus"
          control={<Checkbox color="primary" />}
          label="Tottus S.A"
          labelPlacement=""
        />

        <FormControlLabel
          value="mallplaza"
          control={<Checkbox color="primary" />}
          label="Mall Plaza S.A
          "
          labelPlacement="end"
        />  
      </FormGroup>
      <br></br>
      <FormLabel component="legend">Rut/Nit o Identificador*</FormLabel>
      <FormGroup>
      <br></br>
        <FormControlLabel
          value="101"
          control={<Checkbox color="primary" />}
          label="101-1"
          labelPlacement=""
        />

        <FormControlLabel
          value="202"
          control={<Checkbox color="primary" />}
          label="202-2"
          labelPlacement="end"
        />  

        <FormControlLabel
          value="303"
          control={<Checkbox color="primary" />}
          label="303-3"
          labelPlacement="end"
        />  

        <FormControlLabel
          value="404"
          control={<Checkbox color="primary" />}
          label="404-4"
          labelPlacement="end"
        />  
      </FormGroup>
      <br></br>
      <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="otra"
              label="Agregar otra información "
              id="otra"
              autoComplete="otra"
              onChange={(ev) => {
                this.syncOtraChanges(ev.target.value);
              }}
            />    
      


      <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
            Encargado del Caso
            </Box>
          </Typography>

        <div>
          <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select">Abogado Interno </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={1}>Abogado 1</MenuItem>
          <MenuItem value={2}>Abogado 2</MenuItem>
          <MenuItem value={3}>Abogado 3</MenuItem>
        </Select>
      </FormControl>
      </div>

      <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select">Abogado Externo </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={1}>Abogado 1</MenuItem>
          <MenuItem value={2}>Abogado 2</MenuItem>
          <MenuItem value={3}>Abogado 3</MenuItem>
        </Select>
      </FormControl>
      </div>


            <Box fontWeight="fontWeightBold" m={1} fontSize={40} m={1}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Continuar
              </Button> 
              

              <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>


            </Box>
  
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(System2);