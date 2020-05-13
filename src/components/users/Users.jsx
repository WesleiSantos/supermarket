import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React,{Component} from "react";

import "../../components/template/templateUsers/Users.css";

import Main from '../template/templateUsers/Main'
import Logo from "../template/templateUsers/Logo";
import Nav from "../template/templateUsers/Nav";
import Footer from "../template/templateUsers/Footer";

import {withRouter} from 'react-router-dom';

class Users extends Component {
    render(){
      return(
      <div className="user">
      <Logo />
      <Nav />
      {this.props.children}
      <Footer />
    </div>
    )
    }
}

export default withRouter(Users);
