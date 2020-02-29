import React from 'react';
import classes from './MilkTea';
import Ingredients from './Ingredients/Ingredients'

const MilkTea = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey=>{
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return  <Ingredients key={igKey+i} type={igKey}/>;
            });

        });
    return (
        <div className = {classes.MilkTea}>
           
            {transformedIngredients}
            {/* <Ingredients type = 'redBean' /> */}
        </div>
    );
};

export default MilkTea;