import React from 'react';
// import classes from './Ingredients.css';
import classes from './Ingredients.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { render } from 'react-dom';


 class Ingredients extends Component  {

    render () {
        let ingredient= null;
        console.log('classes', classes);

        switch (this.props.type) {
            case ('foamtop'):
                // ingredient = <div className={classes.foamtop}>dff</div>
                   
                ingredient = <div className={classes.cloud}>
                    <div className= {classes.cloud1}/>
                    <div className= {classes.cloud2}/>
                </div>;
                break;
            case ("jamtop"):
                ingredient = <div className={classes.jamTop}></div>;
                break;
            case ('greentea'):
                ingredient = <div className = {classes.greenTea}></div>;
                break;
            case ('redtea'):
                ingredient = <div className = {classes.redTea}></div>;
                break;
            case ('oolongtea'):
                ingredient = <div className = {classes.oolongTea}></div>;
                break;
            case ('redBean'):
                ingredient = <div>
                    <div className = {classes.redBean}></div>
                </div>;
                break;
            case ('pearl'):
                ingredient = <div>
                        <div className = {classes.pearl1}></div>
                        <div className = {classes.pearl2}></div>
                        <div className = {classes.pearl3}></div>
                    </div>;
                break;
            case ('pudding'):
                ingredient = <div className = {classes.Pudding}></div>;
                break;
            case ('ice'):
                ingredient = <div>
                        <div className = {classes.ice}></div>
                        <div className = {classes.ice2}></div>
                        <div className = {classes.ice3}></div>
                    </div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
        

    }
    

};

Ingredients.propTypes={

    type: PropTypes.string.isRequired
};
export default Ingredients;