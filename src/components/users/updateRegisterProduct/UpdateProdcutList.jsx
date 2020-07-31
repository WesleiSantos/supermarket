import React from "react";
import Main from "../../template/templateUsers/Main"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FormRegisterProducts from "../registerProducts/FormRegisterProducts";
import { addProduct, clear } from "../../../actions/actionProduct";
import { Link, withRouter } from "react-router-dom";

const submit = values => {
  // print the form values to the console
  console.log(values)
}
const UpdateProductList = (props) => {
  
  return (
    <React.Fragment>
      <Main>
        <FormRegisterProducts onSubmit={props.addProduct} readOnly={false} clear={props.clear}/>
      </Main>
    </React.Fragment>
  );
};


const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addProduct,
      clear
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(withRouter(UpdateProductList));
