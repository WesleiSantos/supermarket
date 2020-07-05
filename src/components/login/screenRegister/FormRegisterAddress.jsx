import React,{Component} from "react";
import Register from "./Register.css";
import { withRouter } from "react-router-dom";

class FormRegisterAddress extends Component {
  render(){
    return(
      <form className="form-register-address">
    <div className="form-row justify-content-center">
      <div className="col-8">
        <label htmlFor="inputDistrict">Bairro:</label>
        <input
          type="text"
          className="form-control"
          id="inputDistrict"
          aria-describedby="districtHelp"
          placeholder="Bairro"
        />
      </div>
      <div className="col-4 ">
        <label htmlFor="inputCep">Cep:</label>
        <input
          type="text"
          className="form-control"
          id="inputCep"
          aria-describedby="cepHelp"
          placeholder="Cep"
        />
      </div>
      <div className="col-6 ">
        <label htmlFor="inputAddress">Endereço:</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          aria-describedby="addressHelp"
          placeholder="Endereço"
        />
      </div>
      <div className="col-6 ">
        <label htmlFor="inputPhone">Telefone:</label>
        <input
          type="text"
          className="form-control"
          id="inputPhone"
          aria-describedby="phoneHelp"
          placeholder="Telefone"
        />
      </div>
    </div>
    <div className="form-row justify-content-center">
          <button type="submit" className="btn btn-next btn-primary mr-2 mt-5">
             Confirmar
          </button>
        </div>
  </form>
    )
  }
}

export default withRouter(FormRegisterAddress);
