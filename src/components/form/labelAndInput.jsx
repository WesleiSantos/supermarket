import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className={props.classGroup}>
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input} className={props.inputClass}
                 placeholder={props.placeholder}
                 readOnly={props.readOnly} type={props.type} value={props.value} checked={props.checked}/>
        </div>
    </Grid>
)