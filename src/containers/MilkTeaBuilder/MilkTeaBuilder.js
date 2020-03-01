import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import MilkTea from '../../components/MilkTea/MilkTea';
import BuildControls from '../../components/MilkTea/Controls/BuildControls';
import classes from './MilkTeaBuilder.module.css';

const INGREDIENT_PRICES = {
    greentea: 0,
    redtea: 0,
    oolongtea: 0,
    foamtop: 0.5,
    pearl: 0.25,
    redBean: 0.25,
    pudding:0,
    ice:0
    
}

class MilkTeaBuilder extends Component{
    // constructor (props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            foamtop: 0,
            redBean: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice =oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});


    }

    removeIngredientHandler = (type) =>{

    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0
        }
        return(          
            <Aux className={classes.double}>        
                
                
                <MilkTea ingredients= {this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                //ingredientRemoved={this.removeIngredientsHandler}
               // disabled={this.props.disabled[ClientRectList.type]}
                price={this.state.totalPrice}
                />
                
            
                
            </Aux>

        );
    }
}

export default MilkTeaBuilder;