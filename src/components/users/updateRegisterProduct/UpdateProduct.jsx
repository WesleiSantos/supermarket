
import React, { useEffect } from "react";
import Main from "../../template/templateUsers/Main"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { search, showUpdate } from "../../../actions/actionProduct";
import FormRegisterProducts from "../registerProducts/FormRegisterProducts";
import "./UpdateProduct.css"

const UpdateProduct = (props) => {

  useEffect(() => {
    props.search();
  }, []);

  const renderRows = () => {
    const list = props.product.list
    console.log(Array.isArray(list))
    return Array.isArray(list) ? list.map(product => (
      <div class="updateProduct table-responsive scorpius-border-shadow border-shadow mb-2">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Descrição</th>
              <th scope="col">Categoria</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr key={product.id}>
              <td>{product.description_product}</td>
              <td>{product.category}</td>
              <td>{product.value_unitary}</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex flex-row-reverse" role="group">
        <button type="button" class="btn btn-danger mr-1 mb-1" deletar>
            <i class="fa fa-trash"></i>
          </button>
          <button type="button" class="btn btn-primary mr-1 mb-1" id="btnEditar" onClick={() => props.showUpdate(product)}>
            <i class="fa fa-edit"></i>
          </button>
          <button type="button" class="btn btn-warning mr-1 mb-1" id="btnVisualizar">
            <i class="fa fa-eye"></i>
          </button>
        </div>
      </div>
    )) : []
  }
  return (
    <React.Fragment>
      <Main>
        <h3 className="text-center font-weight-bold mb-2 pb-2">Lista De Produtos</h3>
        {renderRows()}
      </Main>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    product: {
      list: state.product.list
    },
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      search, showUpdate
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UpdateProduct));



