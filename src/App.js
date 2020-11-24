import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Login from "./views/Login";
import SignIn from "./views/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/*<Login />*/}
          <SignIn />
        </Route>
        {/* <Route exact path="/">
         
      </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
