import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Orders,Orders1,OrderDetail} from "../components/Orders";
import {Profile} from "../components/Profile";
import {Company} from "../components/Company";
import { Warehouse } from '../components/Warehouse';
import { Users } from '../components/Users';
//Componets

const Routes = ()=>{
    return(
             <Switch>
             <Route exact path='/orders' component={Orders} />
             <Route exact path='/orders-1' component={Orders1} />
             <Route exact path='/order-detail' component={OrderDetail} />

             <Route exact path='/profile' component={Profile} />
             <Route exact path='/company' component={Company} />
             <Route exact path='/warehouse' component={Warehouse} />
             <Route exact path='/users' component={Users} />
             </Switch>
    )
}

export default Routes;