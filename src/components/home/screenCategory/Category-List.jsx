import React from "react";
import CategoryList from "./Category-List.css";

export default (props) => (
  <React.Fragment>
    <div className={"category-item " + props.class}>
        <a href="#" className="content">
          <h4>{props.title}</h4>
          <p className="desc">
            {props.descrition}
          </p>
        </a>
    </div>
  </React.Fragment>
);
