
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignIn,SignUp,ResetPassword,ForgotPassword } from './components/Auth';
import  Routes from "./routing/Routes";
import './css/App.css';




function App() {
  return (
      <Router>
        <Fragment>
            <Switch>
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/signin' component={SignIn} />
              <Route exact path='/password/reset' component={ResetPassword} />
              <Route exact path='/password/forgot' component={ForgotPassword} />
              <Route component={Routes} />
            </Switch>
        </Fragment>
      </Router>
    
      

  );
}

export default App;
