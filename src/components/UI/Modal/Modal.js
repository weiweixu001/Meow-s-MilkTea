import React from 'react';
import classes from './Modal.module.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

const modal =(props)=>{

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show || props.load ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show || props.load ? '1':'0'
                }}>
                {props.children}
            </div>

        </Aux>
        

    );

};

export default modal;