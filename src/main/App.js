import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import User from "../components/users/Users";
import api from "../api";


class App extends Component {
  state={
    name:'',
    surname:'',
    id:'',
    type_user:'',
    date:'',
    time:'',
  }
  componentWillMount(){
    api.get("/auth/me")
    .then((response) => {this.setState({name:response.data.name, surname:response.data.surname, id:response.data.id, type_user:response.data.id_type_user}); console.log(response)})
    .catch(error=>{console.log(error)})
  }
  render() {
    if(this.state.type_user===1 || this.state.type_user===''){
      return(
        <div className="app">
        {this.props.children}
        </div>
      )
    }else{
      return(
        <div className="app">
        <User user={this.state.type_user} name={this.state.name} surname={this.state.surname}>
            {this.props.children}
        </User>
        </div>
      )
    }
  }
}

export default withRouter(App);
