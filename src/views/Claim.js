import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  buttonNext: {
    margin: theme.spacing(1),
  },
}));

export default function CheckboxesGroup({ handleInputChange }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <FormGroup>
          <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
              Sobre el accidente
            </Box>
          </Typography>
          <FormLabel component="legend">
            ¿El accidente fue al interior del local?
          </FormLabel>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="interiorLocal"
                    value="si"
                    color="primary"
                    onChange={(e) => handleInputChange(e)}
                  />
                }
                label="sí"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="interiorLocal"
                    value="no"
                    color="primary"
                    onChange={(e) => handleInputChange(e)}
                  />
                }
                label="no"
              />
            </FormGroup>
          </FormControl>
          <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
              Tipo de accidente
            </Box>
          </Typography>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="tipoAccidente"
                    value="inseguridad local"
                    color="primary"
                    onChange={(e) => handleInputChange(e)}
                  />
                }
                label="Inseguridad Local"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="tipoAccidente"
                    value="inseguridad personal"
                    onChange={(e) => handleInputChange(e)}
                  />
                }
                label="Inseguridad Personal"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="tipoAccidente"
                    value="inseguridad cliente"
                    onChange={(e) => handleInputChange(e)}
                  />
                }
                label="Inseguridad Cliente"
              />
            </FormGroup>
          </FormControl>
          <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
              Dudas del accidente
            </Box>
          </Typography>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              ¿Qué tipo de lesión tuvo el cliente?
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="lesion"
                    value="Levisima"
                    onChange={(e) => handleInputChange(e)}
                  />
                }
                label="Levisima"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="lesion"
                    value="Leve"
                    onChange={(e) => handleInputChange(e)}
                  />
                }
                label="Leve"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="lesion"
                    value="grave"
                    onChange={(e) => handleInputChange(e)}
                  />
                }
                label="Grave"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="lesion"
                    value="gravisima"
                    onChange={(e) => handleInputChange(e)}
                  />
                }
                label="Gravisima"
              />
            </FormGroup>
            <FormLabel component="legend">
              ¿Se derivó al cliente a un centro de salud?
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="sí" color="primary" />}
                label="sí"
              />
              <FormControlLabel
                control={<Checkbox name="no" color="primary" />}
                label="no"
              />
            </FormGroup>
          </FormControl>
          <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
              Monto reclamado por el cliente
            </Box>
          </Typography>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              ¿Cuál es el monto reclamado?
            </FormLabel>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="monto"
              label="Monto reclamado"
              type="number"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
        </FormGroup>
      </div>
    </Container>
  );
}
