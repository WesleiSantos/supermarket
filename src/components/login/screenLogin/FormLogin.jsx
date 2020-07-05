import React,{Component} from "react";
import './FormLogin.css'
import ImgFacebook from '../../../assets/ICONES/facebook.png'
import { reduxForm, Field } from 'redux-form'
import { Link, withRouter } from "react-router-dom";
import LabelAndInput from '../../form/labelAndInput'
import { connect } from "react-redux";

class FormLogin extends Component{

  constructor(props){
    super(props)
  }

  
  render(){
    const { handleSubmit,  readOnly } = this.props
    return(
      <form className="form-login"  role='form' onSubmit={handleSubmit}>
      <div className="form-row justify-content-center">
        <div className="m-2 col-auto social-buttons">
          <button className="facebook m-2 btn font-weight-bold">
            <img src={ImgFacebook} alt="facebook"></img> Facebook{" "}
          </button>
          <button className="google m-2 btn font-weight-bold">
          <i className="fa fa-google-plus" aria-hidden="true"></i>  Google{" "}
          </button>
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="col-11 mt-2">
        <Field name='email' component={LabelAndInput} readOnly={readOnly}
            label='Email' cols='12' placeholder='email@exemplo.com' type="email"  inputClass="form-control" />      
        </div>
        <div className="col-11 mt-2">
          <Field name='password' component={LabelAndInput} readOnly={readOnly}
            label='Senha' cols='12' placeholder='******' type="password" inputClass="form-control"/> 
        </div>
        <div className="col-11 mt-2">
        <div className="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
        <label className="form-check-label" htmlFor="dropdownCheck">
          Lembrar de mim
        </label>
      </div>
        </div>
      </div>
  
      <div className="form-row justify-content-center">
        <button type="submit" className="btn btn-primary mt-2 mb-4">
          Entrar
        </button>
      </div>
      <div className="form-row justify-content-start ml-1">
          <div className="btn-changePassword col-12">
          <span>Esqueceu a senha  <Link to="changePassword"><i  className="fa fa-question-circle-o" aria-hidden="true"></i></Link></span>
          </div>
          <div className="btn-register col-12">
          <span>Não possui Cadastro? <Link to="/register" className="font-weight-bold text-danger"> Cadastre-se aqui!</Link></span>
          </div>
      </div>
    </form>
    )
  }
}

const mapStateToProps = state => ({
  loading:state.login.loading
})
FormLogin = reduxForm({form:'login', destroyOnUnmount: false})(FormLogin);
export default connect(mapStateToProps, null)(withRouter(FormLogin))
