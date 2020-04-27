import React, { Component } from 'react';
import classes from './Button.module.css';




// class Button extends Component{
//     handleClick() {
//         this.setState(prevState => ({
//           isToggleOn: !prevState.isToggleOn
//         }));
//       }
     
//       render() {
//         return (
//           <button onClick={this.handleClick}>
//             {this.state.isToggleOn ? 'ON' : 'OFF'}
//           </button>
//         );
//       }
// }

const button = (props) =>(
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick = {props.clicked}>{props.children}</button>
);

export default button;