import React from "react";
import Caroucelitem from './Caroucel-item.css'

export default (props) => (
    <div className={'carousel-item '+ props.state}>
      <img className="d-block" src={props.img} alt={props.imgAlt} />
    </div>
);
