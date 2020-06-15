import React, { Component } from "react";

import "../../components/template/templateUsers/Users.css";

import Header from "../template/templateUsers/Header";
import Logo from "../template/templateUsers/Logo";
import Nav from "../template/templateUsers/Nav";
import Footer from "../template/templateUsers/Footer";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

class Users extends Component {
  constructor(props) {
    super(props);
    this.clickLogout= this.clickLogout.bind(this)
  }


 clickLogout = e => {
    console.log(this.props.handleClickLogout)
  }
  componentDidUpdate(prevProps) {
  }
  

  render() {
    const array = [
      [1, "Cliente"],
      [2, "Funcionario"],
      [3, "Administador"],
    ];
    const type_user = new Map(array);
    const {handleClickLogout} = this.props
    return (
      <div className="user">
        <Header
        user={type_user.get(this.props.type_user)}          
        name={this.props.name}
        surname={this.props.surname}
        >
          <Link to="user/dashboard">
            <i className="fa fa-user-circle-o fa-2x"></i>
          </Link>
          <Link to="#" onClick={handleClickLogout}>
            <i className="fa fa-sign-out fa-2x" aria-hidden="true"></i>
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

const mapStateToProps = (state) => ({
  name: state.login.name,
  surname: state.login.surname,
  id: state.login.id,
  email: state.login.email,
  type_user: state.login.type_user,
  date: state.login.date,
  time: state.login.time,
  loading: state.login.loading,
});

export default connect(mapStateToProps,null)(withRouter(Users))