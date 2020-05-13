import React from "react";

import Home from "../../components/template/templateHome/Home.css"

import Main from "./screenHome/Main";
import Category from "./screenCategory/Category";
import Contact from "./screenContact/Contact-view";
import Footer from "../template/templateHome/Footer";

import Header from '../template/templateHome/Header'
import Logo from "../template/templateHome/Logo";
import Nav from "../template/templateHome/Nav";
import Carousel from "./screenHome/Caroucel"
import Title from "../template/templateHome/Title"
import ContactForm from './screenContact/ContactForm'
import Contact_area from './screenContact/Contact_area'

export default (props) => (
  <React.Fragment>
  <div class="home">
      <Main>
          <Header />
          <Logo />
          <Nav />
          <Title title="Promoções" icon="attach_money"></Title>
          <Carousel />
      </Main>

      <Category>
        <Title title="Categorias" icon="store"></Title>
        
      </Category>

  
      <Contact>
        <Title title="Sugestões" icon="email"></Title>
        <ContactForm/>
        <Contact_area/>
      </Contact>
      
      <Footer />
</div>
  </React.Fragment>
);