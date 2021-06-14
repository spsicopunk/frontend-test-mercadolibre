import React from 'react';
import { Route, Switch, Router } from "react-router-dom";

//components
import Home from "./Pages/home";
import Detail from "./Pages/detail_products";
import Results from "./Pages/results";
import History from "./Components/history";

function App() {
    return (
        <Router history={History}>
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/items/:id" component={ Detail }/>
                <Route path='/items' component={Results}/>
            </Switch>
        </Router>
    );
}

export default App;

