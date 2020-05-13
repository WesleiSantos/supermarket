import React from "react";
import "./NavOption.css";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div className="home-options-menu">
      <Link to={props.path}>
        <i className={props.classOption}></i> {props.option}
      </Link>
    </div>
  );
};
