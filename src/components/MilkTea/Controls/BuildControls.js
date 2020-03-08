import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    
    {label: "Foamtop", type:'foamtop'},
    {label: "Green tea", type:'greentea'},
    {label: "Red tea", type:'redtea'},
    {label: "Oolong tea", type:'oolongtea'},
    {label: "Pearl", type:'pearl'},
    {label: "RedBean", type:'redBean'},
    {label: "Pudding", type:'pudding'},
    {label: "Ice", type:'ice'},
];
const buildControls = (props) => (
    <div className= {classes.BuildControls}>
        <p>Current Price: <strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key = {ctrl.label}
                label={ctrl.label} 
                added={() =>props.ingredientAdded(ctrl.type)}/>
                // added={() =>props.ingredientAdded(ctrl.type)}/>
        ))}
        <button 
            className={classes.orderButton}
            onClick={props.ordered}>Order Now</button>
        
    </div>
);

export default buildControls;