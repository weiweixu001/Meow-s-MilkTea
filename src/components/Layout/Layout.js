import React from "react";
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import BuildControls from '../MilkTea/Controls/BuildControls';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Toolbar/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <div >Toolbar, SideDrawer, Backdrop</div>
        {/* <div className= {classes.layout}>    */}
        <div > 
            {/* <BuildControls />      */}
            <Toolbar/>
            <SideDrawer />
            <div className={classes.layout}>
                {/* <BuildControls /> */}
                {/* <div className={classes.lay}>
                    <main className = {classes.cup} >  
                                              
                        <div className={classes.handle}/>
                                      
                    </main>

                </div> */}
                
                <div className={classes.lay}>
                    {props.children }

                </div>
                
            </div> 
            {/* <main className = {classes.cup} >
                
                <div className={classes.handle}/>
                {props.children}
                
            </main> */}
        </div>
        
    </Aux>
);

export default layout;