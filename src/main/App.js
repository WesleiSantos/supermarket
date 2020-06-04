import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import User from "../components/users/Users";
import api from "../api";
import Messages from "../components/message/message";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleLogout } from "../actions/actionLogin";

const App = (props) => {
  return props.type_user === 1 || props.type_user === undefined ? (
    <div className="app">
    <Messages />
    {props.children}
    </div>
  ) : (
    <div className="app">
      <Messages />
      <User {...props} handleClickLogout={props.handleLogout}>
        {props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
