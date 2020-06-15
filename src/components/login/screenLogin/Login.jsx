import React from "react";
import LoginTemplate from "../../template/templateLogin/LoginTemplate";
const FormLogin =  import("./FormLogin");
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/actionLogin";

const login = (props) => {
  return (
    <React.Fragment>
      <LoginTemplate title="Login" icon="person" btnPath="/">
        <FormLogin onSubmit={props.loginUser}  readOnly={false}/>
      </LoginTemplate>
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

export default connect(null, mapDispatchToProps)(login);
