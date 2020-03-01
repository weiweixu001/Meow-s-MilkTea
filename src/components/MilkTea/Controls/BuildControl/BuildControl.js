import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div>{props.label}</div>
        <button onClick={props.added}>Yes</button>
        
    </div>
);

export default buildControl;