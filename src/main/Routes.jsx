import React from 'react'
import {BrowserRouter,Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Home from '../components/home/Home'
import Login from '../components/login/screenLogin/Login'
import Register from '../components/login/screenRegister/RegisterLogin'
import ChangePassword from '../components/login/screenChangePassword/ChangePassword'
import Users from '../components/users/Users'

import DashboardUser from  '../components/users/dashboard/Home'
import RegisterProduct from '../components/users/registerProducts/RegisterProducts'
import ManagerProducts from '../components/users/updateRegisterProduct/UpdateProduct'
import ManagerPromotions from '../components/users/managerPromotions/ManagerPromotions'
import ManagerOrders from '../components/users/managerOrders/ManagerOrders'
import Log from '../components/users/log/Log'
import ManagerUser from '../components/users/managerUsers/ManagerUser'

export default props =>
  <BrowserRouter>  
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/changePassword' component={ChangePassword}/>
        <Route path='/user/dashboard' component={DashboardUser} />
        <PrivateRoute path='/user/registerProduct' component={RegisterProduct} />
        <PrivateRoute path='/user/managerProducts' component={ManagerProducts} />
        <PrivateRoute path='/user/managerPromotions' component={ManagerPromotions} />
        <PrivateRoute path='/user/managerOrders' component={ManagerOrders} />
        <PrivateRoute path='/user/log' component={Log} />
        <PrivateRoute path='/user/managerUser' component={ManagerUser} />
        <Redirect from='*' to='/' />
    </Switch>
    </BrowserRouter>