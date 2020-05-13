import React, { Component } from "react";
import LoginTemplate from "./LoginTemplate.css";
import Title from "../templateHome/Title";
import {Link} from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <main className="login align-middle">
        <div className="content">
          <div className="header-login">
            <Link to={this.props.btnPath}><span class="material-icons text-primary">reply</span> </Link>
            <Title title={this.props.title} icon={this.props.icon} />
          </div>
          <div className="contentLogin">{this.props.children}</div>
        </div>
      </main>
    );
  }
}
