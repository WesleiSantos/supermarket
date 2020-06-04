import React, { useState, useEffect } from "react";
import { BsDash, BsPlus } from "react-icons/bs";
import "./RegisterProduct.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Main from "../../template/templateUsers/Main";
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

const RegisterProduct = (props) => {
  const [statusInput, setStatusInput] = useState(false);

  const actionCheckBox = (e) => {
    if (e.target.value === "yes") {
      setStatusInput(true);
    } else {
      props.clearDescripition();
      setStatusInput(false);
    }
  };

  const submitHandle = (e) => {
    e.preventDefault();
    props.addProduct(props.product);
  };

  const increaseQuantityHandle = (e) => {};

  const handleFile = (files, event) => {
    event.preventDefault();
    if (files[0]) {
      /*
        const formData = new FormData();
        formData.append(files[0].name, files[0]);
        console.log(formData.get(files[0].name));
      */
      props.addProductImage(files[0]);
    }
  };

  useEffect(() => {
    setStatusInput(false);
    props.search();
  }, []);

  return (
    <Main>
        <form className="form-row">
          <h2>Cadastro de produtos</h2>
          <div class="form-group col-12 d-flex flex-column">
            <label for="category">Categoria</label>
            <select
              id="category"
              class="form-control"
              onChange={props.addProductCategory}
            >
              <option selected={props.product.category ? '' : 'selected' }>selecione</option>
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
            </select>
          </div>
        </form>
        <form className="form-row">
          <div className="form-group col-4">
            <label for="code">Codigo</label>
            <input
              type="number"
              className="form-control"
              id="code"
              placeholder="00"
              value={props.product.code ? props.product.code : '' }
              onChange={props.addProductCode}
            />
          </div>
          <div className="form-group col-8">
            <label for="description">Descrição de produto</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Descrição.."
              value={props.product.description_product ? props.product.description_product : '' }
              onChange={props.addProductDescription}
            />
          </div>
        </form>
        <form className="form-row">
          <fieldset class="form-group col-6">
            <legend class="col-form-label col-12 pt-0 pl-0">
              Oferta Promocional
            </legend>
            <div class="col-12 d-flex flex-row pl-0">
              <div class="form-check col-6">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="yes"
                  checked={statusInput ? "checked" : ""}
                  onClick={actionCheckBox}
                />
                <label class="form-check-label" for="gridRadios1">
                  Sim
                </label>
              </div>
              <div class="form-check col-6">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="no"
                  checked={statusInput ? "" : "checked"}
                  onClick={actionCheckBox}
                />
                <label class="form-check-label" for="gridRadios2">
                  Não
                </label>
              </div>
            </div>
          </fieldset>
          <div className="form-group col-6">
            <label for="DescriptionMeasure">Descrição de Oferta</label>
            <input
              type="text"
              className={"form-control "}
              id="DescriptionMeasure"
              disabled={statusInput ? "" : "disabled"}
              value={props.product.description_measure ? props.product.description_measure : ''}
              onChange={props.addProductDescriptionMeasure}
            />
          </div>
        </form>
        <form className="form-row">
          <div className="form-group col-6">
            <label id="value_unitary">Valor Produto</label>
            <input
              type="number"
              className="form-control"
              id="value_unitary"
              placeholder="0,00"
              value={props.product.value_unitary ? props.product.value_unitary : ''}
              onChange={props.addProductValue}
            />
          </div>
          <div className="form-group col-6">
            <label for="percentage_discount">Desconto</label>
            <input
              type="number"
              className="form-control"
              id="percentage_discount"
              placeholder="0%"
              value={props.product.percentage_discount ? props.product.percentage_discount : '' }
              onChange={props.addProductPercentageDiscount}
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
                value={props.product.quantity ? props.product.quantity : '' }
                onChange={props.addProductQuantity}
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
              onChange={props.addProductUnity}
            >
              <option value="UN" selected={props.product.unity_sale==='UN'?'selected':''}>UN</option>
              <option value="KG">KG</option>
              <option value="G">G</option>
              <option value="L">L</option>
              <option value="ML">ML</option>
            </select>
          </div>
        </form>
        <form className="form-row" enctype="multipart/form-data">
          <div class="custom-file">
          <img alt='' src={props.product.image === undefined ? "" : props.product.image.secure_url} />
            <InputFiles multiple="multiple" onChange={(files, e) => handleFile(files, e)}>
              <div className="d-flex flex-row">
                <label class="custom-file-label" for="customFileLang">
                  {props.product.image === undefined ? "Selecione uma imagem" : props.product.image.name}
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
              onClick={submitHandle}
            >
              Cadastrar
            </button>
          </div>
          <div className="col-6 mt-4 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-danger"
              onClick={props.clear}
            >
              Cancelar
            </button>
          </div>
        </form>
    </Main>
  );
};

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

export default connect(mapStateToProps, mapDispachToProps)(RegisterProduct);
