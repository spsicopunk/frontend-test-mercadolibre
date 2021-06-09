import React from 'react';
import { Route, Switch, Router } from "react-router-dom";

//components
import Home from "./Pages/home";
import Detail from "./Pages/detail_Products";
import Results from "./Pages/results";
import History from "./Components/history";
import Search from "./Components/search";

function App() {
  return (
      <Router history={History}>
          <Switch>
              <Route path="/" exact component={ Home }/>
              <Route path="/detalle" component={ Detail }/>
              <Route path='/items' component={Results}/>
              <Route component={Home}></Route>
          </Switch>
      </Router>
  );
}

export default App;


