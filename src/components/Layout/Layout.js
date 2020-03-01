import React from "react";
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import BuildControls from '../MilkTea/Controls/BuildControls';

const layout = (props) => (
    <Aux>
        <div >Toolbar, SideDrawer, Backdrop</div>
        {/* <div className= {classes.layout}>    */}
        <div > 
            <BuildControls />     
            <main className = {classes.cup} >
                
                <div className={classes.handle}/>
                {props.children}
            </main>
        </div>
        
    </Aux>
);

export default layout;