import "./Nav.css";
import React from "react";
import NavOption from "./NavOption";
import Search from "./Search";

export default (props) => (
  <session className=" home-session-menu">
    <nav className="home-menu navbar navbar-expand-md navbar-dark ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <section className="home-session-options-menu">
        <div className="navbar-nav  collapse  navbar-collapse" id="navbarNav">
          <Search />
          <NavOption
            classOption="fa fa-cutlery nav-item nav-link"
            path="/"
            option="CATEGORIAS"
          />

          <NavOption
            classOption="fa fa-money nav-item nav-link"
            path="/users"
            option="PROMOÇÕES"
          />

          <NavOption
            classOption="fa fa-envelope-o nav-item nav-link"
            path="/users"
            option="CONTATO"
          />
        </div>
      </section>
    </nav>
  </session>
);
