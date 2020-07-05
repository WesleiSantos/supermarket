import React from "react";
import Searche from "./Search.css";

export default (props) => (
  <form className="form-search">
    <div className="row">
      <div className="col-8">
        <input
          className="form-control ml-2"
          type="search"
          placeholder="Pesquisar"
          aria-label="Search"
        />
      </div>
      <div className="col-4">
        <button className="btn btn-search" type="submit">
          <span className="material-icons">search</span>
        </button>
      </div>
    </div>
  </form>
);
