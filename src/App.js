import React from 'react';
import { Route, Switch ,BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail_Products";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/detalle" component={ Detail }/>
              <Route path="/" exact component={ Home }/>
          </Switch>
      </Router>
  );
}

export default App;
