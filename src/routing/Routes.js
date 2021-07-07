import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Orders,Orders1,OrderDetail} from "../components/Orders"
//Componets

const Routes = ()=>{
    return(
             <Switch>
             <Route exact path='/orders' component={Orders} />
             <Route exact path='/orders-1' component={Orders1} />
             <Route exact path='/order-detail' component={OrderDetail} />
             </Switch>
    )
}

export default Routes;