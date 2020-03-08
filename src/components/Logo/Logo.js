import React from 'react';
import mylogo from '../../assets/images/meow.png';
import classes from './Logo.module.css';

const logo = (props) =>(
    <div className={classes.Logo}>
        <img src={mylogo} alt='MyLogo' />
    </div>

);
export default logo;