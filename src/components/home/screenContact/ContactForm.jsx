import React from "react";
import ContactForm from "./ContactForm.css";
export default (props) => (
  <React.Fragment>
    <form className="formContact">
      <div className="form-row">
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Nome"
          />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <input
            type="text"
            className="form-control"
            id="adress"
            placeholder="Endereço"
          />
        </div>
        <div className=" col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <input
            type="text"
            className="form-control"
            id="telephone"
            placeholder="Telefone"
          />
        </div>

        <div className="col-sm-12">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="col-sm-12">
          <textarea className="form-control" id="mensage" rows="4" placeholder="Escreva sua mensagem aqui..."></textarea>
        </div>
        
          <button type="submit" className="btn-danger" >Enviar</button>
      </div>
    </form>
  </React.Fragment>
);
