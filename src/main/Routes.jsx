import React from 'react'
import { Router } from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import history from './history'
import Home from '../components/home/Home'
import Login from '../components/login/screenLogin/Login'
import Register from '../components/login/screenRegister/RegisterLogin'
import ChangePassword from '../components/login/screenChangePassword/ChangePassword'
import DashboardUser from '../components/users/dashboard/Home'
import RegisterProduct from '../components/users/registerProducts/RegisterProduct'
import ManagerProducts from '../components/users/updateRegisterProduct/UpdateProduct'
import ManagerPromotions from '../components/users/managerPromotions/ManagerPromotions'
import ManagerOrders from '../components/users/managerOrders/ManagerOrders'
import Log from '../components/users/log/Log'
import ManagerUser from '../components/users/managerUsers/ManagerUser'
import RegisterAddress from '../components/login/screenRegister/RegisterAddress'
import UpdateProduct from '../components/users/updateRegisterProduct/UpdateProdcutList'


export default props =>
      
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login'  component={Login}  />
          <Route path='/register' component={Register} />
          <Route path='/changePassword' component={ChangePassword} />
          {/*<Route path='/storeProducts' component= {} ></Route>*/}
          <PrivateRoute path='/address' component={RegisterAddress} />
          <PrivateRoute path='/user/dashboard' component={DashboardUser} />
          <PrivateRoute path='/user/registerProduct' component={RegisterProduct} />
          <PrivateRoute path='/user/managerProducts' component={ManagerProducts} />
          <PrivateRoute path='/user/managerPromotions' component={ManagerPromotions} />
          <PrivateRoute path='/user/managerOrders' component={ManagerOrders} />
          <PrivateRoute path='/user/log' component={Log} />
          <PrivateRoute path='/user/managerUser' component={ManagerUser} />
          <PrivateRoute path='/user/updateProduct' component={UpdateProduct} />
          <Redirect from='*' to='/' />
        </Switch>
     