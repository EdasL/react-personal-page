import React from 'react';
import profilePic from '../../assets/images/profile.jpg';
import styles from './Person.css';
import Aux from '../../hoc/Aux';

const person = (props) =>(
    <Aux>
        <h1 className={styles.Header} >{props.item}</h1>
        <img className={styles.Img} src={profilePic} alt="Profile"></img>
    </Aux>
);

export default person;