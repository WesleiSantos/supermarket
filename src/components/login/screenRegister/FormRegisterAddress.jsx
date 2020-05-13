import React from "react";
import Register from "./Register.css";

export default (props) => (
  <form className="form-register">
    <div className="form-row justify-content-center">
      <div class="col-6 ">
        <label for="inputName">Name:</label>
        <input
          type="text"
          class="form-control"
          id="inputName"
          aria-describedby="nameHelp"
          placeholder="Nome"
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
        />
      </div>
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
  </form>
);
