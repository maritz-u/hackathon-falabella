import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
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

const Case2 = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Online: false,
    Local: false,
    casa: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Online, Local, casa } = state;
  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Materias por reclamo</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Online}
                  onChange={handleChange}
                  name="Online"
                />
              }
              label="Reclamo por despacho del producto"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Local}
                  onChange={handleChange}
                  name="Local"
                />
              }
              label="Reclamo por publicidad engañosa"
            />
            <FormControlLabel
              control={
                <Checkbox checked={casa} onChange={handleChange} name="casa" />
              }
              label="Reclamo por uso de estacionamiento"
            />
            <FormControlLabel
              control={
                <Checkbox checked={casa} onChange={handleChange} name="casa" />
              }
              label="Reclamo por accidente de cliente"
            />
          </FormGroup>
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel  id="demo-simple-select-label">Preguntas por materia</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem >nose </MenuItem>
          <MenuItem >porque si</MenuItem>
          <MenuItem >lala</MenuItem>
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
                Siguiente
              </Button>
            </Box>
        </Container>
      </div>
    )
}
export default Case2

