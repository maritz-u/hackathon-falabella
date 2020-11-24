import React, { Component } from "react";
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//       marginTop: theme.spacing(8),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  syncEmailChanges(email) {
    console.log(email);
    this.setState({
      email: email,
    });
  }

  syncPasswordChanges(password) {
    console.log(password);
    this.setState({
      password: password,
    });
  }

  submitForm = () => {
    console.log(this.state);
    //Acá va lo que queramos hacer con nuestro formulario
  };

  render() {
    return (
      <form>
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={(ev) => {
            this.syncEmailChanges(ev.target.value);
          }}
        />

        <input
          type="password"
          placeholder="******"
          value={this.state.password}
          onChange={(ev) => {
            this.syncPasswordChanges(ev.target.value);
          }}
        />

        <button
          onClick={this.submitForm}
          type="submit"
          value="Ingresar"
        ></button>
        <Button variant="contained" color="primary" disableElevation>
  Disable elevation
</Button>
      </form>
    );
  }
}
class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    let nombre = "holi";
    return (
      <div>
        <Formulario />
      </div>
    );
  }
}

export default Login;
