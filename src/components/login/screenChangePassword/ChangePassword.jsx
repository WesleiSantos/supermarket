import React, { Component } from "react";
import LoginTemplate from "../../template/templateLogin/LoginTemplate";
export default class ChangePassword extends Component {
  render() {
    return (
      <LoginTemplate title="Troca de Senha" btnPath="/login">
        <form>
          <div className="form-row justify-content-center">
            <div className="col-11 mt-2">
              <label htmlFor="inputEmail1">
                Insira o email que está vinculado a sua conta:
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="email@exemplo"
              />
            </div>
          </div>
          <div className="form-row justify-content-center">
            <button type="submit" className="btn btn-primary mt-2 mb-4">
              Enviar
            </button>
          </div>
        </form>
      </LoginTemplate>
    );
  }
}
