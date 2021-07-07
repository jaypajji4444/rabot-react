import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {OrderList} from "../components/Orders"
//Componets

const Routes = ()=>{
    return(
             <Switch>
             <Route exact path='/orders' component={OrderList} />
             </Switch>
    )
}

export default Routes;