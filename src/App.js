
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Navbar} from "./reusableComponents"
import  Routes from "./routing/Routes";
import './css/App.css';


import Dashboard from './components/Dashboard';

function App() {
  return (
      <Router>
        <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route component={Routes} />
            </Switch>
        </Fragment>
      </Router>
    
      

  );
}

export default App;
