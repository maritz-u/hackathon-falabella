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
};

class System2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      cedula: "",
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
              Datos de las partes
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

      <FormLabel component="legend">Agregar otro demandante</FormLabel>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="" variant="outlined" />
      </form>
    
      <FormLabel component="legend">Demandado</FormLabel>
      <FormGroup >
        
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

      <FormLabel component="legend">Rut/Nit o Identificador*</FormLabel>
      <FormGroup aria-label="position" row>
        
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
  


      <FormLabel component="legend">Agregar otra información</FormLabel>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="" variant="outlined" />
      </form>


      <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
            Encargado del Caso
            </Box>
          </Typography>

          <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Abogado Interno </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={1}>Abogado 1</MenuItem>
          <MenuItem value={2}>Abogado 2</MenuItem>
          <MenuItem value={3}>Abogado 3</MenuItem>
        </Select>
      </FormControl>


      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Abogado Externo </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={1}>Abogado 1</MenuItem>
          <MenuItem value={2}>Abogado 2</MenuItem>
          <MenuItem value={3}>Abogado 3</MenuItem>
        </Select>
      </FormControl>


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

export default withStyles(styles)(System2);