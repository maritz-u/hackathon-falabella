import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

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
}));

const Case = () => {
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
            
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Medio de reclamo</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={Online} onChange={handleChange} name="Online" />}
              label="Online"
            />
            <FormControlLabel
              control={<Checkbox checked={Local} onChange={handleChange} name="Local" />}
              label="Local"
            />
            <FormControlLabel
              control={<Checkbox checked={casa} onChange={handleChange} name="casa" />}
              label="Casa Matriz/Oficina Central"
            />
          </FormGroup>
        </FormControl>
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
export default Case;

