import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import MilkTea from '../../components/MilkTea/MilkTea';

class MilkTeaBuilder extends Component{
    // constructor (props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            foamtop: 1,
            redBean: 0
        }
    }
    render(){
        return(          
            <Aux>
                <div>
                    
                    <div>BuildControls</div>
                    <MilkTea ingredients= {this.state.ingredients}/>

                </div>
                
                
            </Aux>

        );
    }
}

export default MilkTeaBuilder;