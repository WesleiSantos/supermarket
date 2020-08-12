import React, { Fragment, Component } from "react";
import { BsDash, BsPlus } from "react-icons/bs";
import "./RegisterProduct.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LabelAndInput from "../../form/labelAndInput";
import LabelAndSelect from "../../form/labelAndSelect";
import LabelAndInputFile from '../../form/labelAndInputFile'
import { reduxForm, Field, formValueSelector } from "redux-form";

const initialState = {
  statusInput: false
}

class FormRegisterProducts extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }

  componentDidMount(){
    {this.props.initialValues.description_measure ? this.setState({statusInput:true}) : this.setState({statusInput:false})}

  }
  componentWillMount(){
    {this.props.initialValues.description_measure ? this.setState({statusInput:true}) : this.setState({statusInput:false})}
  }

  render() {
    const { handleSubmit, readOnly } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <h3 className="text-center font-weight-bold" >CADASTRO DE PRODUTO</h3>
        <form className="form-row" role='form' >
          <Field
            classGroup='form-group'
            name="category"
            component={LabelAndSelect}
            cols="12 12 12 12"
            id="category"
            label="Categoria"
          >
            <option selected="selected">
              Selecione
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
        <form className="form-row" role='form' >
          <Field
            classGroup='form-group'
            name="code"
            component={LabelAndInput}
            inputClass={'form-control'}
            readOnly={readOnly}
            label="Codigo"
            cols="6 6 6 6"
            placeholder="00"
            type="number"
          />
          <Field
            classGroup='form-group'
            name="description_product"
            inputClass={'form-control'}
            component={LabelAndInput}
            readOnly={readOnly}
            label="Descrição de produto"
            cols="6 6 6 6"
            placeholder="Descrição.."
            type="text"
          />
        </form>
        <form className="form-row" role='form' >
            <div className="d-flex flex-row align-items-center  col-12">
              <legend className="col-form-label">
                Oferta Promocional
              </legend>
              <Field
                classGroup='form-check pl-2 d-flex flex-row'
                inputClass="form-check-input"
                name="gridRadios"
                component={LabelAndInput}
                readOnly={readOnly}
                label="Sim"
                labelClass="form-check-label mr-2"
                type="radio"
                onChange={() => { this.setState({ statusInput: true }); }}
              />
              <Field
                classGroup='form-check d-flex flex-row'
                inputClass="form-check-input"
                name="gridRadios"
                component={LabelAndInput}
                readOnly={readOnly}
                label="Não"
                labelClass="form-check-label"
                type="radio"
                onChange={() => {
                  this.setState({ statusInput: false });
                }}
              />
            </div>
          {this.state.statusInput && 
            <Field
              classGroup='form-group'
              name="description_measure"
              component={LabelAndInput}
              inputClass={'form-control'}
              readOnly={readOnly}
              label="Descrição de Oferta"
              cols="6 6 6 6 12"
              placeholder=""
              type="text"
              id="DescriptionMeasure"
            />
          }
        </form>
        <form className="form-row" role='form' >
          <Field
            classGroup='form-group'
            name="value_unitary"
            component={LabelAndInput}
            inputClass={'form-control'}
            readOnly={readOnly}
            label="Valor Produto"
            cols="6 6 6 6 6"
            placeholder="0,00"
            type="number"
            id="value_unitary"
          />
          <Field
            classGroup='form-group'
            name="percentage_discount"
            component={LabelAndInput}
            inputClass={'form-control'}
            readOnly={readOnly}
            label="Desconto"
            cols="6 6 6 6 6"
            placeholder="0%"
            type="number"
            id="percentage_discount"
          />
        </form>
        <form className="form-row" role='form' >
          <Field
            classGroup='form-group'
            name="quantity"
            component={LabelAndInput}
            inputClass={'form-control'}
            readOnly={readOnly}
            label="Quantidade"
            cols="6 6 6 6 8"
            placeholder="0"
            type="number"
            id="quantity"
          />
          <Field
            classGroup='form-group'
            name="unity_sale"
            component={LabelAndSelect}
            cols="12 12 12 12 4"
            id="category"
            label="Unidade"
          >
            <option
              value="UN"
              selected={
                "selected"
              }
            >
              UN
              </option>
            <option value="KG">KG</option>
            <option value="G">G</option>
            <option value="L">L</option>
            <option value="ML">ML</option>
          </Field>
        </form>
        <form className="form-row" encType="multipart/form-data" role='form' >
          <div className="custom-file">
            <Field
              multiple="multiple"
              name="inputFile"
              component={LabelAndInputFile}
            >
            </Field>
          </div>
        </form>
        <form className="form-row">
          <div className="col-6 mt-4 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
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
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialValues: {
      description_product: state.product.description_product,
      unity_sale: state.product.unity_sale,
      value_unitary: state.product.value_unitary,
      category: state.product.category,
      percentage_discount: state.product.percentage_discount,
      code: state.product.code,
      description_measure: state.product.description_measure,
      quantity: state.product.quantity,
      image: state.product.image,
      imagePreviewUrl: state.product.image
    },
  };
}

FormRegisterProducts = reduxForm({
  form: "registerProduct",
  destroyOnUnmount: false,
})(FormRegisterProducts);
export default connect(mapStateToProps, null)(withRouter(FormRegisterProducts));
