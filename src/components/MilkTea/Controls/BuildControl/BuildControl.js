import React, { Component } from 'react';
import classes from './BuildControl.module.css'

class BuildControl extends Component {
    state = {
        isToggleOn: true
    }
    
    handleClick=()=> {
        if (this.state.isToggleOn) {
            this.props.added(this.props.added)
        } else {
            this.props.deleted(this.props.deleted)
        }
        this.setState({isToggleOn: !this.state.isToggleOn});
    }

    render (){
        return(
            <div className={classes.BuildControl}>               
                <div className={classes.type}>{this.props.label}</div>
                <button onClick={this.handleClick}>                
                    {this.state.isToggleOn ? 'NO' : 'YES'}
                </button>
            </div>
        );
    }
   

                // <button onClick={this.handleClick}>
                //     {this.state.isToggleOn ? 'YES' : 'No'}
                // </button>

}

// const buildControl = (props) => (
    
//     <div className={classes.BuildControl}>
//         <div>{props.label}</div>
//         <button onClick={props.added}>Yes</button>
        
//     </div>
// );

export default BuildControl;