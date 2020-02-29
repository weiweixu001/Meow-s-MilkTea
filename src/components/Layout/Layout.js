import React from "react";
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';


const layout = (props) => (
    <Aux>
        <div >Toolbar, SideDrawer, Backdrop</div>
        <main className = {classes.cup} >
            {props.children}
            <div className={classes.handle}/>
            
        </main>
    </Aux>
);

export default layout;