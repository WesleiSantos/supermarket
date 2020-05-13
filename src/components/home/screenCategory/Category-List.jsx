import React from "react";
import CategoryList from "./Category-List.css";

export default (props) => (
  <React.Fragment>
    <div className={"category-item " + props.class}>
        <a href="#" class="content">
          <h4>{props.title}</h4>
          <p class="desc">
            {props.descrition}
          </p>
        </a>
    </div>
  </React.Fragment>
);
