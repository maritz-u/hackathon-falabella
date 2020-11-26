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
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" color="primary">
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
<Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
              Recepción de demanda
            </Box>
            <FormLabel component="legend">
              ¿Quién recibió la demanda?
            </FormLabel>
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Agregar comentarios "
              variant="outlined"
            />
          </form>
          <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
              Antecedentes extras
            </Box>
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
            />
          </form>

          <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
              Comentarios
            </Box>
          </Typography>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Agregar comentarios adicionales"
              variant="outlined"
            />
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
      </div>
      </Container>
    );
  }
}

export default withStyles(styles)(Demandas);
