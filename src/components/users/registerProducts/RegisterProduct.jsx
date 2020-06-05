import React from "react";
import Main from "../../template/templateUsers/Main"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/actionLogin";
import FormRegisterProducts from "./FormRegisterProducts";

const RegisterProduct = (props) => {
  return (
    <React.Fragment>
      <Main>
        <FormRegisterProducts readOnly={false}/>
      </Main>
    </React.Fragment>
  );
};


const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loginUser,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(RegisterProduct);
