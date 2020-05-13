import React from "react";
import "./NavOption.css";
import { Link } from "react-router-dom";

export default (props) => {
    return (
      <div className="user-options-menu">
      <Link to={props.path}>
        <i className={props.classOption}></i> {props.option}
      </Link>
    </div>
    )
};
/*
<Link to="/">
      <i className="fa fa-home"></i> Início
    </Link>
<Link to="/users">
      <i className="fa fa-users"></i> Usuários
    </Link>
*/