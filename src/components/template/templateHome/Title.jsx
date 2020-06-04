import React from "react";
import Title from "./Title.css";

export default (props) => (
  <React.Fragment>
    <div className="title m-3">
      <h1>
      <span className="material-icons">{props.icon}</span>   {props.title}
      </h1>
    </div>
  </React.Fragment>
);
