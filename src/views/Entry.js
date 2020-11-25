import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

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
  lala:{
      width:170,
  }

}));

const Entry = () => {
    const classes = useStyles();
  const [state, setState] = React.useState({
    Online: false,
    Local: false,
    casa: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {Online, Local, casa } = state;
    return (
        <div className={classes.root}>
        <Container component="main" maxWidth="xs">
        <h2>Datos de la Acción</h2>
            
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Tribunal</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={Online} onChange={handleChange} name="Online" />}
              label="Juzgado 1"
            />
            <FormControlLabel
              control={<Checkbox checked={Local} onChange={handleChange} name="Local" />}
              label="Juzgado 2"
            />
            <FormControlLabel
              control={<Checkbox checked={casa} onChange={handleChange} name="casa" />}
              label="Juzgado 3"
            />
            <FormControlLabel
              control={<Checkbox checked={casa} onChange={handleChange} name="casa" />}
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
      <h2>Materia de demanda</h2>
      <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Tribunal</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={Online} onChange={handleChange} name="Online" />}
              label="Despacho de producto"
            />
            <FormControlLabel
              control={<Checkbox checked={Local} onChange={handleChange} name="Local" />}
              label="Publicidad engañosa"
            />
            <FormControlLabel
              control={<Checkbox checked={casa} onChange={handleChange} name="casa" />}
              label="Uso de estacionamiento"
            />
            <FormControlLabel
              control={<Checkbox checked={casa} onChange={handleChange} name="casa" />}
              label="Accidente de clientes"
            />
          </FormGroup>
        </FormControl>
        <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Cuantia de demanda" variant="outlined" />
    </form>
    <Box fontWeight="fontWeightBold" m={1} fontSize={40} m={1}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Siguiente
              </Button>
            </Box>

        </Container>
      </div>
    )
}
export default Entry