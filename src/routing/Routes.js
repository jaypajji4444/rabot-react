import React,{Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import {Orders,Orders1,OrderDetail} from "../components/Orders";
import {Profile} from "../components/Profile";
import {Company} from "../components/Company";
import { Warehouse,AddEditWarehouse } from '../components/Warehouse';
import { Users,AddEditUser } from '../components/Users';
import { Navbar } from "../reusableComponents";
import { Dashboard } from '../components/Dashboard/index';

import Elements from '../components/Elements';
//Componets

const Routes = ()=>{
    return(
        <Fragment>
             <Navbar/>
             <Switch>
             
             <Route exact path="/" component={Elements} />

             <Route exact path="/dashboard" component={Dashboard} />

             <Route exact path='/orders' component={Orders} />
             <Route exact path='/orders-1' component={Orders1} />
             <Route exact path='/order-detail' component={OrderDetail} />

             <Route exact path='/profile' component={Profile} />
             <Route exact path='/company' component={Company} />
             <Route exact path='/warehouse' component={Warehouse} />
             <Route exact path='/add-edit-warehouse' component={AddEditWarehouse} />
             <Route exact path='/users' component={Users} />
             <Route exact path='/add-edit-user' component={AddEditUser} />
             </Switch>
        </Fragment>
    )
}

export default Routes;