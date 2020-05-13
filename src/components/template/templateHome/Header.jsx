import './Header.css'
import React from 'react'
import { Link } from "react-router-dom";

export default props => 
    <header className="home-header row justify-content-end align-items-center ">
         <Link to=""><i className="fa fa-shopping-cart fa-2x pr-5"></i></Link>
         <Link to="/login"><i className="fa fa-user-circle-o fa-2x"></i></Link>
    </header>