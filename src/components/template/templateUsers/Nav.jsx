import './Nav.css'
import React from 'react'
import NavOption from './NavOption'

export default (props) => (
    <session className=" user-session-menu">
    <nav className="user-menu navbar navbar-expand-md navbar-dark ">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <section class="user-session-options-menu">
        <div class="navbar-nav  collapse  navbar-collapse" id="navbarNav">
          <NavOption
            path='/user/dashboard'
            option="INÍCIO"
          />

          <NavOption
            path='/user/registerProduct'
            option="CADASTRO DE PRODUTOS"
          />

          <NavOption
            path='/user/managerProducts'
            option="GERENCIAR PRODUTOS"
          />

        <NavOption
           path='/user/managerPromotions'
            option="GERENCIAR PROMOÇÕES"
          />

        <NavOption
            path='/user/managerOrders'
            option="GERENCIAR PEDIDOS"
          />

        <NavOption
            path='/user/log'
            option="LOG DO SISTEMA"
          />

        <NavOption
            path='/user/managerUser'
            option="GERENCIAR USUÁRIOS"
          />
        </div>
        
      </section>
    </nav>
  </session>
);
