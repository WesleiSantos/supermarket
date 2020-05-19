import "./Header.css";
import React from "react";

export default (props) => (
  <header className="user-header">
    <div className="row">
    <div className="col-12">{props.children}</div>
      <div className="col-12">
        <p className="lead text-muted"> {props.name + " " + props.surname}</p>
      </div>
      <div className="col-12">
        <p className="lead text-muted"> {props.user}</p>
      </div>
     
    </div>
  </header>
);
