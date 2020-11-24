import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './views/Login';

function App() {
      return (
        <BrowserRouter>
        
         <Switch>
           <Route exact path= "/">
            <Login />
        </Route>
        {/* <Route exact path="/">
         
      </Route> */}
        </Switch>
        </BrowserRouter>
      );
    }

export default App;