import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import User from "../components/users/Users";
import api from "../api";
import Messages from "../components/message/message";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleLogout } from "../actions/actionLogin";
import Routes from './Routes'

const Users = (props) => {
  return ( 
    <div className="app">
    <User {...props} handleClickLogout={props.handleLogout}>
        <Routes/>
    </User>
    </div>
  );
};

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
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        handleLogout,
      },
      dispatch
    );

  export default connect(mapStateToProps, mapDispatchToProps)(Users);