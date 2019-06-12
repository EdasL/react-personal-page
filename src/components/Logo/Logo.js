import React from 'react';
import vintedLogo from '../../assets/images/Vinted_logo.png';
import styles from './Logo.css';

const logo = (props) => (
    <div className={styles.Logo}>
        <img src={vintedLogo} style={{height: 30}} alt="Vinted"/>
    </div>
);

export default logo;