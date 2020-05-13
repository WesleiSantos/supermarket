import React from "react";
import './FormLogin.css'

import ImgFacebook from '../../../assets/ICONES/facebook.png'
import ImgGoogle from '../../../assets/ICONES/icons8-google-logo-16.png'
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

export default function FormLogin(){
  const history = useHistory();
  function handleClick() {
    history.push("/user/dashboard");
  }
    return(
      <form className="form-login">
      <div className="form-row justify-content-center">
        <div className="m-2 col-auto social-buttons">
          <button className="facebook m-2 btn font-weight-bold">
            <img src={ImgFacebook}></img> Facebook{" "}
          </button>
          <button className="google m-2 btn font-weight-bold">
          <i class="fa fa-google-plus" aria-hidden="true"></i>  Google{" "}
          </button>
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div class="col-11 mt-2">
          <label for="inputEmail1">Email:</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="email@exemplo"
          />
        </div>
        <div class="col-11 mt-2">
          <label for="inputPassword">Senha:</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword1"
            placeholder="senha"
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
        <button type="button" onClick={handleClick} class="btn btn-primary mt-2 mb-4">
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