import React,{Component} from "react";
import './FormLogin.css'

import ImgFacebook from '../../../assets/ICONES/facebook.png'
import { Link, withRouter } from "react-router-dom";
import { login } from "../../../main/auth";
import api from "../../../api";

class FormLogin extends Component{
  state = {
    email: "",
    password: "",
    error: ""
  };

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
    //this.history=useHistory();
  }


  handleClick() {  
    //this.history.push("/user/dashboard");
  }

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/auth/login", { email, password });
        console.log(response)
        login(response.data.access_token);
        this.props.history.push("/user/dashboard");
      } catch (err) {
        this.setState({
          error:
            "Login ou senha inválidos."
        });
      }
    }
  };


  render(){
    return(
      <form className="form-login" onSubmit={this.handleSignIn}>
      <div className="form-row justify-content-center">
        <div className="m-2 col-auto social-buttons">
          <button className="facebook m-2 btn font-weight-bold">
            <img src={ImgFacebook} alt="facebook"></img> Facebook{" "}
          </button>
          <button className="google m-2 btn font-weight-bold">
          <i class="fa fa-google-plus" aria-hidden="true"></i>  Google{" "}
          </button>
        </div>
      </div>
      {this.state.error && <div class="alert alert-danger" role="alert">{this.state.error}</div>}
      <div className="form-row justify-content-center">
        <div class="col-11 mt-2">
          <label for="inputEmail1">Email:</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="email@exemplo"
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div class="col-11 mt-2">
          <label for="inputPassword">Senha:</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword1"
            placeholder="senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <div class="col-11 mt-2">
        <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
        <label class="form-check-label" for="dropdownCheck">
          Lembrar de mim
        </label>
      </div>
        </div>
      </div>
  
      <div className="form-row justify-content-center">
        <button type="submit" class="btn btn-primary mt-2 mb-4">
          Entrar
        </button>
      </div>
      <div className="form-row justify-content-start ml-1">
          <div className="btn-changePassword col-12">
          <span>Esqueceu a senha  <Link to="changePassword"><i  class="fa fa-question-circle-o" aria-hidden="true"></i></Link></span>
          </div>
          <div className="btn-register col-12">
          <span>Não possui Cadastro? <Link to="/register" class="font-weight-bold text-danger"> Cadastre-se aqui!</Link></span>
          </div>
      </div>
    </form>
    )
  }
}

export default withRouter(FormLogin);