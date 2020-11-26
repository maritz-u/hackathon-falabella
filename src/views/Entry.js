import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import Title from "./Title"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

const Entry = () => {
    const classes = useStyles();
  const [state, setState] = React.useState({
    Online: false,
    Local: false,
    casa: false,
    juzgado:false,
    materia1:false,
    materia2:false,
    materia3:false,
    materia4:false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {Online, Local, casa,juzgado,materia1,materia2,materia3,materia4 } = state;
    return (
        <div className={classes.root}>
        <Container component="main" maxWidth="xs">
        <Title>Datos de la Acción</Title>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Tribunal</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox color="primary" checked={Online} onChange={handleChange} name="Online" />}
              label="Juzgado 1"
            />
            <FormControlLabel
              control={<Checkbox color="primary" checked={Local} onChange={handleChange} name="Local" />}
              label="Juzgado 2"
            />
            <FormControlLabel
              control={<Checkbox color="primary" checked={casa} onChange={handleChange} name="casa" />}
              label="Juzgado 3"
            />
            <FormControlLabel
              control={<Checkbox color="primary" checked={juzgado} onChange={handleChange} name="juzgado" />}
              label="Juzgado 4"
            />
          </FormGroup>
        </FormControl>
        <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Rol o N° de causa" variant="outlined" />
    </form>
      <form className={classes.container} noValidate>
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
      </form>
      <Title>Materia de demanda</Title>
      <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox color="primary" checked={materia1} onChange={handleChange} name="materia1" />}
              label="Despacho de producto"
            />
            <FormControlLabel
              control={<Checkbox color="primary"  checked={materia2} onChange={handleChange} name="materia2" />}
              label="Publicidad engañosa"
            />
            <FormControlLabel
              control={<Checkbox  color="primary" checked={materia3} onChange={handleChange} name="materia3" />}
              label="Uso de estacionamiento"
            />
            <FormControlLabel
              control={<Checkbox  color="primary" checked={materia4} onChange={handleChange} name="materia4" />}
              label="Accidente de clientes"
            />
          </FormGroup>
        </FormControl>
        <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Cuantia de Demanda" variant="outlined" />
    </form>
        </Container>
      </div>
    )
}
export default Entry