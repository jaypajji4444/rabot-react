import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Orders,Orders1} from "../components/Orders"
//Componets

const Routes = ()=>{
    return(
             <Switch>
             <Route exact path='/orders' component={Orders} />
             <Route exact path='/orders-1' component={Orders1} />
             </Switch>
    )
}

export default Routes;