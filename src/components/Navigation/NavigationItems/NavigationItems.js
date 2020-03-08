import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems =()=>(
    <ul className={classes.navigationItems}>
        <NavigationItem link='/' active>MilkTea Builder</NavigationItem>
        <NavigationItem link='/'>Check out</NavigationItem>
    </ul>

);

export default navigationItems;