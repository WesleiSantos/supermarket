import React, { useState, useEffect, Fragment, Component } from "react";
import { BsDash, BsPlus } from "react-icons/bs";
import "./RegisterProduct.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LabelAndInput from "../../form/labelAndInput";
import LabelAndSelect from "../../form/labelAndSelect";
import { reduxForm, Field } from "redux-form";

import {
  addProductDescriptionMeasure,
  addProductUnity,
  addProductValue,
  addProductCategory,
  addProductPercentageDiscount,
  addProductCode,
  addProductDescription,
  addProductQuantity,
  addProductImage,
  addProduct,
  search,
  clear,
  clearDescripition,
} from "../../../actions/actionProduct";
import InputFiles from "react-input-files";

const initialState = {
  statusInput : false
} 

class RegisterProduct extends Component {
  constructor(props) {
    super(props);
    this.state = initialState 
    this.handleFile = this.handleFile.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
    this.actionCheckBox = this.actionCheckBox.bind(this);
  }

  actionCheckBox = (e) => {
    console.log(e.target.value)
    if (e.target.value === "yes") {
      this.setState({statusInput:true});
    } else {
      this.props.clearDescripition();
      this.setState({statusInput:false});
    }
   };

  submitHandle = (e) => {
    e.preventDefault();
    this.props.addProduct(this.props.product);
  };

  increaseQuantityHandle = (e) => { };

  handleFile = (files, event) => {
    event.preventDefault();
    if (files[0]) {
      /*
        const formData = new FormData();
        formData.append(files[0].name, files[0]);
        console.log(formData.get(files[0].name));
      */
      this.props.addProductImage(files[0]);
    }
  };

  render() {
    return (
      <Fragment>
        <h2>Cadastro de produtos</h2>
        <form className="form-row">
          <Field
            classGroup='form-group'
            name="category"
            component={LabelAndSelect}
            cols="12 12 12 12"
            id="category"
            label="Categoria"
          >
            <option selected={this.props.product.category ? "" : "selected"}>
              selecione
              </option>
            <option value="1">Açougue</option>
            <option value="2">Alimentos básicos</option>
            <option value="3">Bebidas</option>
            <option value="4">Bomboniere</option>
            <option value="5">Cosméticos</option>
            <option value="6">Enlatados</option>
            <option value="7">Higiêne</option>
            <option value="8">Hortifrute</option>
            <option value="9">Massa</option>
            <option value="10">Padaria</option>
            <option value="11">Produtos de limpeza</option>
            <option value="12">Temperos</option>
            <option value="13">Utensílios domésticos</option>
          </Field>
        </form>
        <form className="form-row">
          <Field
            classGroup='form-group'
            name="email"
            component={LabelAndInput}
            inputClass={'form-control'}
            readOnly={this.props.readOnly}
            label="Codigo"
            cols="6 6 6 6"
            placeholder="00"
            type="number"
            value={this.props.product.code ? this.props.product.code : ""}
            onChange={this.props.addProductCode}
          />
          <Field
            classGroup='form-group'
            name="description"
            inputClass={'form-control'}
            component={LabelAndInput}
            readOnly={this.props.readOnly}
            label="Descrição de produto"
            cols="6 6 6 6"
            placeholder="Descrição.."
            type="text"
            value={
              this.props.product.description_product
                ? this.props.product.description_product
                : ""
            }
            onChange={this.props.addProductDescription}
          />
        </form>
        <form className="form-row">
          <fieldset class="form-group col-6">
            <legend class="col-form-label col-12 pt-0 pl-0">
              Oferta Promocional
            </legend>
            <div class="d-flex flex-row pl-0">
              <Field
                classGroup='form-check  pl-2 d-flex flex-row'
                inputClass="form-check-input"
                name="gridRadios"
                component={LabelAndInput}
                readOnly={this.props.readOnly}
                label="Sim"
                labelClass="form-check-label"
                cols="6 6 6 6 6"
                type="radio"
                value="yes"
                onClick={this.actionCheckBox}
              />
              <Field
                classGroup='form-check pl-0 d-flex flex-row'
                inputClass="form-check-input"
                name="gridRadios"
                component={LabelAndInput}
                readOnly={this.props.readOnly}
                label="Não"
                labelClass="form-check-label"
                cols="6 6 6 6 6"
                type="radio"
                value="yes"
                onClick={this.actionCheckBox}
              />
              
            </div>
          </fieldset>
          <Field
            classGroup='form-group'
            name="DescriptionMeasure"
            component={LabelAndInput}
            inputClass={'form-control'}
            readOnly={this.props.readOnly}
            label="Descrição de Oferta"
            cols="6 6 6 6 6"
            placeholder=""
            type="text"
            id="DescriptionMeasure"
            value={
              this.props.product.description_measure
                ? this.props.product.description_measure
                : ""
            }
            onChange={this.props.addProductDescriptionMeasure}
            disabled={this.state.statusInput ? "" : "disabled"}
          />
        </form>
        <form className="form-row">
          <div className="form-group col-6">
            <label id="value_unitary">Valor Produto</label>
            <input
              type="number"
              className="form-control"
              id="value_unitary"
              placeholder="0,00"
              value={
                this.props.product.value_unitary
                  ? this.props.product.value_unitary
                  : ""
              }
              onChange={this.props.addProductValue}
            />
          </div>
          <div className="form-group col-6">
            <label for="percentage_discount">Desconto</label>
            <input
              type="number"
              className="form-control"
              id="percentage_discount"
              placeholder="0%"
              value={
                this.props.product.percentage_discount
                  ? this.props.product.percentage_discount
                  : ""
              }
              onChange={this.props.addProductPercentageDiscount}
            />
          </div>
        </form>
        <form className="form-row">
          <div className="form-group col-8 ">
            <div className="d-flex justify-content-center">
              <label for="quantity">Quantidade</label>
            </div>
            <div className="d-flex flex-row">
              <button className="btn btn-secondary">
                <BsPlus />
              </button>
              <input
                type="number"
                className="form-control"
                id="quantity"
                placeholder="0"
                value={
                  this.props.product.quantity ? this.props.product.quantity : ""
                }
                onChange={this.props.addProductQuantity}
              />
              <button className="btn btn-secondary">
                <BsDash />
              </button>
            </div>
          </div>
          <div class="form-group col-4">
            <label for="unity_sale">Unidade</label>
            <select
              class="custom-select"
              id="unity_sale"
              onChange={this.props.addProductUnity}
            >
              <option
                value="UN"
                selected={
                  this.props.product.unity_sale === "UN" ? "selected" : ""
                }
              >
                UN
              </option>
              <option value="KG">KG</option>
              <option value="G">G</option>
              <option value="L">L</option>
              <option value="ML">ML</option>
            </select>
          </div>
        </form>
        <form className="form-row" enctype="multipart/form-data">
          <div class="custom-file">
            <img
              alt=""
              src={
                this.props.product.image === undefined
                  ? ""
                  : this.props.product.image.secure_url
              }
            />
            <InputFiles
              multiple="multiple"
              onChange={(files, e) => this.handleFile(files, e)}
            >
              <div className="d-flex flex-row">
                <label class="custom-file-label" for="customFileLang">
                  {this.props.product.image === undefined
                    ? "Selecione uma imagem"
                    : this.props.product.image.name}
                </label>
                <button>Envio</button>
              </div>
            </InputFiles>
            ;
          </div>
        </form>
        <form className="form-row">
          <div className="col-6 mt-4 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.submitHandle}
            >
              Cadastrar
            </button>
          </div>
          <div className="col-6 mt-4 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.props.clear}
            >
              Cancelar
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: {
      description_product: state.product.description_product,
      unity_sale: state.product.unity_sale,
      value_unitary: state.product.value_unitary,
      category: state.product.category,
      percentage_discount: state.product.percentage_discount,
      code: state.product.code,
      description_measure: state.product.description_measure,
      quantity: state.product.quantity,
      image: state.product.image,
    },
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(
    {
      addProductDescriptionMeasure,
      addProductUnity,
      addProductValue,
      addProductCategory,
      addProductPercentageDiscount,
      addProductCode,
      addProductDescription,
      addProductQuantity,
      addProductImage,
      addProduct,
      search,
      clear,
      clearDescripition,
    },
    dispatch
  );
}

RegisterProduct = reduxForm({
  form: "registerProduct",
  destroyOnUnmount: false,
})(RegisterProduct);
export default connect(mapStateToProps, mapDispachToProps)(RegisterProduct);
