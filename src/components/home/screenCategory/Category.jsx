import React, { Component } from "react";
import CategoryList from "./Category-List";
import './Category.css'

const Category = props =>{
    const nameClass = "col-sm-6 col-md-6 col-lg-6 col-xl-6";
    return (
      <React.Fragment>
        <main className="category">
          <div className="container">
          {props.children}
          <div class="row align-items-center justify-content-around">
              <CategoryList class={nameClass} title="Alimentos Básicos" description="" />
              <CategoryList class={nameClass} title="Açougue" description="" />
              <CategoryList class={nameClass} title="Bebidas" description="" />
              <CategoryList class={nameClass} title="Bomboniere" description="" />
              <CategoryList class={nameClass} title="Cosméticos" description="" />
              <CategoryList class={nameClass} title="Enlatados" description="" />
              <CategoryList class={nameClass} title="Higiêne" description="" />
              <CategoryList class={nameClass} title="Hortifruti" description="" />
              <CategoryList class={nameClass} title="Massas" description="" />
              <CategoryList class={nameClass} title="Padaria" description="" />
              <CategoryList class={nameClass} title="Produtos de Limpeza" description="" />
              <CategoryList class={nameClass} title="Temperos" description="" />
              <CategoryList class={nameClass} title="Biscoitos" description="" />
              <CategoryList class={nameClass} title="Utensílios Domésticos" description="" />
          </div> 
          </div>
        </main>
      </React.Fragment>
    );
  }


  export default Category;
