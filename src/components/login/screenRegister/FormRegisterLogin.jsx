import React, { Component } from "react";
import Register from "./Register.css";
import { withRouter } from "react-router-dom";
import api from "../../../api";
const initialState = {
  name: "",
  surname: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: "",
};
class FormRegisterLogin extends Component {
  constructor(props) {
    super(props);
    this.state= initialState
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp = async (e) => {
    e.preventDefault();
    const { name, surname, email, password, confirmPassword } = this.state;
    if (!name || !surname || !email || !password || !confirmPassword) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else if (!(password === confirmPassword)) {
      this.setState({ error: "As senhas devem ser iguais" });
    } else {
      const response = await api
        .post("/auth/register", { name, surname, email, password })
        .then((response) => {
          console.log(response);
          this.props.history.push("/address");
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.data.email) {
              this.setState({ error: "Conta já existente" });
            }
          }
        });
    }
  };
  render() {
    return (
      <form className="form-register" onSubmit={this.handleSignUp}>
        {this.state.error && (
            <div class="alert alert-danger" role="alert">
              {this.state.error}
            </div>
          )}
        <div className="form-row justify-content-center">
          <div className="col-6 ">
            <label for="inputName">Name:</label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              aria-describedby="nameHelp"
              placeholder="Nome"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div class="col-6 ">
            <label for="inputSurname">Sobrenome:</label>
            <input
              type="text"
              class="form-control"
              id="inputSurname"
              aria-describedby="surnameHelp"
              placeholder="Sobrenome"
              onChange={(e) => this.setState({ surname: e.target.value })}
            />
          </div>
          <div class="col-12 ">
            <label for="inputEmail1">Email:</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="email@exemplo"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div class="col-12 ">
            <label for="inputPassword">Senha:</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword1"
              placeholder="Senha"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div class="col-12 ">
            <label for="inputConfirmPassword">Confirmar Senha:</label>
            <input
              type="password"
              class="form-control"
              id="inputConfirmPassword"
              placeholder="Confimar Senha"
              onChange={(e) =>
                this.setState({ confirmPassword: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-row justify-content-center">
          <button type="submit" class="btn btn-next btn-primary  mr-2 mt-2">
            <i class="fa fa-arrow-right pl-1" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(FormRegisterLogin);
