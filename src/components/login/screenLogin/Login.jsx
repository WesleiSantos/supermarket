import React, {useEffect} from "react";
import LoginTemplate from "../../template/templateLogin/LoginTemplate";
import FormLogin from "./FormLogin";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/actionLogin";
import history from "../../../main/history";


const login = (props) => {
  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser    
    console.log(history.location.pathname)
    //window.location.reload();
    location.reload()
  },[]);
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
