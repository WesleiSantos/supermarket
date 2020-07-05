import React from "react";
import Main from "../../template/templateUsers/Main"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FormRegisterProducts from "./FormRegisterProducts";
import { addProduct, clear } from "../../../actions/actionProduct";

const submit = values => {
  // print the form values to the console
  console.log(values)
}
const RegisterProduct = (props) => {
  
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

export default connect(null, mapDispatchToProps)(RegisterProduct);
