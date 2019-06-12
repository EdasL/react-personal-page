import React from 'react';
import styles from './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) =>(
  <header className={styles.Toolbar}>
    <div className={styles.Logo}>
        <Logo />
    </div>
    <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
    <nav className={styles.DesktopOnly}>
        <NavigationItems />
    </nav>
  </header>
);

export default toolbar;