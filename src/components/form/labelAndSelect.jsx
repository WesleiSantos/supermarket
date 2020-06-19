import React from "react";
import Grid from "../layout/grid";

export default (props) => (
  <Grid cols={props.cols}>
     <div className={props.classGroup}>
      <label htmlFor={props.name} className={props.labelClass} >{props.label}</label>
      <select
        {...props.select}
        className="form-control"
        defaultValue={props.defaultValue}
        readOnly={props.readOnly}
        id={props.id}
      >
        {props.children}
      </select>
    </div>
  </Grid>
);
