import React,{Component} from "react";
import Register from "./Register.css";
import { withRouter } from "react-router-dom";

class FormRegisterAddress extends Component {
  render(){
    return(
      <form className="form-register-address">
    <div className="form-row justify-content-center">
      <div class="col-8">
        <label for="inputDistrict">Bairro:</label>
        <input
          type="text"
          class="form-control"
          id="inputDistrict"
          aria-describedby="districtHelp"
          placeholder="Bairro"
        />
      </div>
      <div class="col-4 ">
        <label for="inputCep">Cep:</label>
        <input
          type="text"
          class="form-control"
          id="inputCep"
          aria-describedby="cepHelp"
          placeholder="Cep"
        />
      </div>
      <div class="col-6 ">
        <label for="inputAddress">Endereço:</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          aria-describedby="addressHelp"
          placeholder="Endereço"
        />
      </div>
      <div class="col-6 ">
        <label for="inputPhone">Telefone:</label>
        <input
          type="text"
          class="form-control"
          id="inputPhone"
          aria-describedby="phoneHelp"
          placeholder="Telefone"
        />
      </div>
    </div>
    <div className="form-row justify-content-center">
          <button type="submit" class="btn btn-next btn-primary mr-2 mt-5">
             Confirmar
          </button>
        </div>
  </form>
    )
  }
}

export default withRouter(FormRegisterAddress);
