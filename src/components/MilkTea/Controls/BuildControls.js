import React, {Component} from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [      
    // {label: "Green tea", type:'greentea'},
    // {label: "Red tea", type:'redtea'},
    // {label: "tea", type:'oolongtea'},
    {label: "Foamtop", type:'foamtop'},
    {label: "Pearl", type:'pearl'},
    {label: "RedBean", type:'redBean'},
    {label: "Mango Pudding", type:'pudding'},
    {label: "Ice", type:'ice'},
];
// state=({tea: 'green tea'});
// selected=()=>{

//     this.setState(
//         {tea : this.props.value}
//     );
// }

class BuildControls extends Component{
    // state=({tea: 'green tea'});
    // selected=(event)=>{
    //     this.setState(
    //         {value : event.target.value}
    //     );
    //     console.log("ssssss")
    // }
    render(){
        return(
            <div className= {classes.BuildControls}>
                <p>Current Price: <strong>{this.props.price}</strong></p>
                <div className={classes.BuildControl}>
                    <div className={classes.type}>Tea</div>
                    <select classesName={classes.select} onChange={this.props.selected}  value={this.props.value}>>
                    {/* onChange={this.props.selected(this.value)} value={this.props.state.value}> */}
                        <option value="green tea">Green Tea</option>
                        <option value="red tea">Red Tea</option>
                        <option value="oolong">Oolong</option>                 
                    </select>
                </div>
        
                {controls.map(ctrl => (
                    <BuildControl 
                        key = {ctrl.key}
                        label={ctrl.label} 
                        
                        added={() =>this.props.ingredientAdded(ctrl.type)}
                        deleted={()=>this.props.ingredientdeleted(ctrl.type)} />
                ))}
                <button 
                    className={classes.orderButton}
                    onClick={this.props.ordered}>Order Now</button>
                
            </div>

        )
    }

}
// const buildControls = (props) => (
//     <div className= {classes.BuildControls}>
//         <p>Current Price: <strong>{props.price}</strong></p>
//         <div className={classes.BuildControl}>
//             <div className={classes.type}>Tea</div>
//             <select classesName={classes.select} onChange={this.props.selected}>
//                 <option value="green tea">Green Tea</option>
//                 <option value="red tea">Red Tea</option>
//                 <option value="oolong">Oolong</option>                 
//             </select>
//         </div>

//         {controls.map(ctrl => (
//             <BuildControl 
//                 key = {ctrl.key}
//                 label={ctrl.label} 
                
//                 added={() =>props.ingredientAdded(ctrl.type)}
//                 deleted={()=>props.ingredientdeleted(ctrl.type)} />
//         ))}
//         <button 
//             className={classes.orderButton}
//             onClick={props.ordered}>Order Now</button>
        
//     </div>
// );

export default BuildControls;