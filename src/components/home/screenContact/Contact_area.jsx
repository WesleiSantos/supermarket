import React,{Component} from "react";
import Contact_area from "./Contact_area.css";


export default class Contact extends Component{



  constructor(props){
    super(props)
    this.handleOver = this.handleOver.bind(this)
    this.handleOut = this.handleOut.bind(this)
    this.state={
      flag:false
    }
  }

  handleOver(){
    this.setState({flag:true})
  }
  handleOut(){
    this.setState({flag:false})
  }



  render(){
    const state = this.state.flag
    
    return(
      <React.Fragment>
      <div className="contact-div">
        <nav className="contacts navbar navbar-expand-md navbar-dark "  onMouseOver={this.handleOver} onMouseOut={this.handleOut} >
          <div className="contacts-itens" ><i class="fa fa-comments" aria-hidden="true" ></i></div>         
            <div className={"nav-itens " + (state ? 'nav-show': 'd-none')} id="navbarNav"  >
              <a href="#" className="content"><i className="fa fa-map-marker" aria-hidden="true"></i></a>
              <a href="#" className="content"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
              <a href="#" className="content"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              <a href="#" className="content"><i className="fa fa-phone" aria-hidden="true"></i></a>
            </div>
        </nav>
      </div>
    </React.Fragment>
    )
  }
}
