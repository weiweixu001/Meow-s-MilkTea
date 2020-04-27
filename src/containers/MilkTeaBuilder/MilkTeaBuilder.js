import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import MilkTea from '../../components/MilkTea/MilkTea';
import BuildControls from '../../components/MilkTea/Controls/BuildControls';
import classes from './MilkTeaBuilder.module.css';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/MilkTea/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    greentea: 0,
    redtea: 0,
    oolongtea: 0,
    foamtop: 0.5,
    pearl: 0.25,
    redBean: 0.25,
    pudding:0.25,
    ice:0
    
}

class MilkTeaBuilder extends Component{
    // constructor (props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {

        value: "greentea",
        ingredients:{"foamtop":0,"ice":0,"pearl":0,"redBean":0,'pudding':0},     
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }
    // get ingredients from web
    // componentDidMount (){
    //     axios.get('https://meow-bubbletea.firebaseio.com/oeders/inggredients.json')
    //         .then(response=>{ 
    //             this.setState({ingredients: response.data})},console.log('response')).catch(error=>{this.setState({error: 'read data error'}); console.log('error', error)
    //         })
    //         .catch(error=>{
    //             this.setState({error: true})
    //         });
    // }
    selected=(event)=>{
        this.setState(
            {value : event.target.value}
                //  event.target.value}
        );
        
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
    deleteIngredientHandler =(type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice =oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

    }

    removeIngredientHandler = (type) =>{
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    purchaseCancelHandler= () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler =()=>{
        // alert('you continue!');
        this.setState({loading: true});
        const order ={
            tea: this.state.value,
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name:'hu',
                address: {
                    street: '173th',
                    zipCode: '11801',
                    county: 'Nassau'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/oeders.json', order)
            .then(response => {this.setState({loading: false, purchasing: false})}, alert('You are all set'))
            .catch(error => {this.setState({loading: false, purchasing: false});
        });

    }


    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0
        }
        let orderSummary = null;
        if (this.state.ingredients){
            orderSummary=    <OrderSummary 
                tea = {this.state.value}
                ingredients = {this.state.ingredients}
                price = {this.state.totalPrice}
                purchaseCancelled = {this.purchaseCancelHandler}
                purchaseContinued = {this.purchaseContinueHandler} />;

        } 
        
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        let milkTea = this.state.error? <p>Ingrediens can't be loaded</p> :<Spinner/>;
        if (this.state.ingredients) {
            milkTea = 
                <Aux className={classes.double}>                          
                    <MilkTea ingredients= {this.state.ingredients} >                   
                    </MilkTea>
                    <BuildControls 
                    // value={this.state.value}
                    selected = {this.selected}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientdeleted={this.deleteIngredientHandler}
                    //ingredientRemoved={this.removeIngredientsHandler}
                // disabled={this.props.disabled[ClientRectList.type]}
                    ordered = {this.purchaseHandler}
                    price={this.state.totalPrice}/>               
                </Aux>
        }
        return(          
            <Aux className={classes.double}>                       
                <Modal show={this.state.purchasing} load = {this.state.loading} modalClosed={this.purchaseCancelHandler} >                
                    {orderSummary}
                </Modal>
                {milkTea}              
            </Aux>

        );
    }
}

export default withErrorHandler(MilkTeaBuilder, axios);