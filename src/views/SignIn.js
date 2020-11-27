import React, { Component } from "react";
import Logo from "../img/Logo.png";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
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
import { withRouter } from "react-router";

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

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
    };
  }

  syncEmailChanges(email) {
    this.setState({
      email: email,
    });
  }

  syncPasswordChanges(password) {
    this.setState({
      password: password,
    });
  }

  submitForm(event) {
    event.preventDefault();
    const { email } = this.state;
    if (usuariosValidos.includes(email)) {
      const usuarioActual = usuarios.find((u) => u.email === email);
      localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));

      const usuario = localStorage.getItem("usuarioActual");
      this.props.history.push("/dashboard");
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const { classes } = this.props;
    const { error } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src={Logo} alt="" className={classes.logoFacilito}></img>

          <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={40} m={1}>
              Bienvenido
            </Box>
          </Typography>
          {error && <Alert severity="error">Usuario incorrecto</Alert>}
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
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(ev) => {
                this.syncEmailChanges(ev.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(ev) => {
                this.syncPasswordChanges(ev.target.value);
              }}
            />
            <Box fontWeight="fontWeightBold" m={1} fontSize={40} m={1}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Ingresar
              </Button>
            </Box>
            <Grid container>
              <Grid item xs>
                <Link color="secondary" href="#" variant="body2">
                  Olvidé mi contraseña
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Registro"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withRouter(withStyles(styles)(SignIn));
