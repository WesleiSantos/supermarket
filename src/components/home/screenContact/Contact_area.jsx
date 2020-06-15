import React, { useState, useEffect } from "react";
import './Contact_area.css'

const Contact = (props) => {
  const [flag, setflag] = useState(false);

  const handleOver = () => {
    setflag(true);
  };
  const handleOut = () => {
    setflag(false);
  };

  const state = flag;

  return (
    <React.Fragment>
      <div className="contact-div">
        <nav
          className="contacts navbar navbar-expand-md navbar-dark "
          onMouseOver={handleOver}
          onMouseOut={handleOut}
        >
          <div className="contacts-itens">
            <i class="fa fa-comments" aria-hidden="true"></i>
          </div>
          <div
            className={"nav-itens " + (state ? "nav-show" : "d-none")}
            id="navbarNav"
          >
            <a href="#" className="content">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </a>
            <a href="#" className="content">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
            <a href="#" className="content">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#" className="content">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Contact;
