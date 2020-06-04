import "./Header.css";
import React from "react";
import { withRouter, Link } from "react-router-dom";

export default (props) => (
  <header className="user-header">
      <div className="header">
        <div className="description flex-column p-2">
        <div className="item"><p className="lead text-white"> {props.name + " " + props.surname}</p></div>
        <div className="item"> <p className="lead text-white"> {props.user}</p></div>
        </div>
        <div className="incons flex-row ">
        {props.children}
        </div>
      </div>
  </header>
);
