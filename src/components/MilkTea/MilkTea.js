import React from 'react';
import classes from './MilkTea.module.css';
import Ingredients from './Ingredients/Ingredients'



const MilkTea = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey=>{
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return  <Ingredients key={igKey+i} type={igKey}/>;
            });

        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        if (transformedIngredients.length === 0) {
            console.log('Please start adding ingredients')
        }
    return (
        <div className = {classes.MilkTea}>
            
                <main className = {classes.cup} >  
                                        
                    <div className={classes.handle}/>
                    {transformedIngredients}
                                
                </main>
                        
        </div>
      
    );
};

export default MilkTea;