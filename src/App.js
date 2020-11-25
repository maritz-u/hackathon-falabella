import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Login from "./views/Login";
import SignIn from "./views/SignIn";
import theme from "./theme/theme";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
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
