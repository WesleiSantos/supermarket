import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { Component } from "react";

import "../../components/template/templateUsers/Users.css";

import Main from "../template/templateUsers/Main";
import Header from "../template/templateUsers/Header";
import Logo from "../template/templateUsers/Logo";
import Nav from "../template/templateUsers/Nav";
import Footer from "../template/templateUsers/Footer";
import { withRouter, Link } from "react-router-dom";
import api from "../../api";

export default class Users extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const array = [
      [1, "Cliente"],
      [2, "Funcionario"],
      [3, "Administador"],
    ];
    const type_user = new Map(array);
    return (
      <div className="user">
        <Header user={type_user.get(this.props.user)}  name={this.props.name} surname={this.props.surname}>
            <Link to="user/dashboard">
              <i className="fa fa-user-circle-o fa-2x"></i>
            </Link> 
        </Header>
        <Logo />
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
