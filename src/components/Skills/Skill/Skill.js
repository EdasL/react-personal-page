import React from 'react';
import styles from './Skill.css';

const skill = (props) => {
    return(
        <div className={styles.Skill} onClick={() => props.clicked(props.name, props.index)}>
            <hr></hr>
            {props.name}
            <hr></hr>
        </div>
    );
}

export default skill;
