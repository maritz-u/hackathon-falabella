import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignIn from "./views/SignIn";
import theme from "./theme/theme";
import Dashboard from "./views/Dashboard";
import Antecedentes from "./views/Antecedentes";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/">
<<<<<<< HEAD
            <Antecedentes/>
=======
            <SignIn />
>>>>>>> 05ed12b9a9a82ec867e808756b2cdb548ef85f66
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
