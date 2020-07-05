
import React from "react";
import Main from "../../template/templateUsers/Main"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addProduct, clear } from "../../../actions/actionProduct";
import FormRegisterProducts from "../registerProducts/FormRegisterProducts";

const submit = values => {
  // print the form values to the console
  console.log(values)
}
const UpdateProduct = (props) => {
  
  return (
    <React.Fragment>
      <Main>
          
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

export default connect(null, mapDispatchToProps)(UpdateProduct);



