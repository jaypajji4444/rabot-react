
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/App.css';


import Dashboard from './components/Dashboard';

function App() {
  return (
      <Router>
        <Fragment>

            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
        </Fragment>
      </Router>
    
      

  );
}

export default App;
