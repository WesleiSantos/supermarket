import React,{ Suspense, lazy } from 'react'
import {Router} from 'react-router'
import {Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import history from './history'
const App = lazy(() => import( './App'))
const Home  = lazy(() => import('../components/home/Home'))
const Login  = lazy(() => import('../components/login/screenLogin/Login'))
const Register  = lazy(() => import('../components/login/screenRegister/RegisterLogin'))
const ChangePassword  = lazy(() => import('../components/login/screenChangePassword/ChangePassword'))
const Users  = lazy(() => import('../components/users/Users'))
const DashboardUser   = lazy(() => import('../components/users/dashboard/Home'))
const RegisterProduct  = lazy(() => import('../components/users/registerProducts/RegisterProducts'))
const ManagerProducts  = lazy(() => import('../components/users/updateRegisterProduct/UpdateProduct'))
const ManagerPromotions  = lazy(() => import('../components/users/managerPromotions/ManagerPromotions'))
const ManagerOrders  = lazy(() => import('../components/users/managerOrders/ManagerOrders'))
const Log  = lazy(() => import('../components/users/log/Log'))
const ManagerUser  = lazy(() => import('../components/users/managerUsers/ManagerUser'))
const RegisterAddress   = lazy(() => import('../components/login/screenRegister/RegisterAddress'))

export default props =>
  <Router history = {history}>  
  <App>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/changePassword' component={ChangePassword}/>
        <PrivateRoute path='/address' component={RegisterAddress} />
        <PrivateRoute path='/user/dashboard' component={DashboardUser} />
        <PrivateRoute path='/user/registerProduct' component={RegisterProduct} />
        <PrivateRoute path='/user/managerProducts' component={ManagerProducts} />
        <PrivateRoute path='/user/managerPromotions' component={ManagerPromotions} />
        <PrivateRoute path='/user/managerOrders' component={ManagerOrders} />
        <PrivateRoute path='/user/log' component={Log} />
        <PrivateRoute path='/user/managerUser' component={ManagerUser} />
        <Redirect from='*' to='/' />
    </Switch>
    </App>
    </Router>