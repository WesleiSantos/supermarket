import React from "react";
import Register from "./Register.css";
import { useHistory } from "react-router-dom";

export default function FormRegisterLogin() {
  const history = useHistory();
  function handleClick() {
    history.push("/login");
  }
  return (
    <form className="form-register">
      <div className="form-row justify-content-center">
        <div class="col-12 ">
          <label for="inputEmail1">Email:</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="email@exemplo"
          />
        </div>
        <div class="col-12 ">
          <label for="inputPassword">Senha:</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword1"
            placeholder="Senha"
          />
        </div>
        <div class="col-12 ">
          <label for="inputConfirmPassword">Confirmar Senha:</label>
          <input
            type="password"
            class="form-control"
            id="inputConfirmPassword"
            placeholder="Confimar Senha"
          />
        </div>
      </div>

      <div className="form-row justify-content-center">
        <button type="submit" class="btn btn-primary  mr-2 mt-2">
          Cadastar
        </button>
        <button
          type="button"
          class="btn btn-danger  mt-2"
          onClick={handleClick}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
