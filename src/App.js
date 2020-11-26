import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignIn from "./views/SignIn";
import theme from "./theme/theme";
import Dashboard from "./views/Dashboard";
import System2 from "./views/System2";
import Demand from "./views/Demand";
import Entry from "./views/Entry";
import { listaDemandas, listaReclamos } from "./data/cases";

function App() {
  localStorage.setItem("reclamos", JSON.stringify(listaReclamos));
  localStorage.setItem("demandas", JSON.stringify(listaDemandas));

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
