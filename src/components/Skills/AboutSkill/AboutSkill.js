import React from 'react';
import styles from './AboutSkill.css';
import Aux from '../../../hoc/Aux'
import Modal from 'react-bootstrap/Modal'

const aboutSkill = (props) => (
    <Aux>
        <Modal.Header className={styles.AboutSkill}>
        {<img src={props.source}></img>}
        </Modal.Header>
        <Modal.Body>
            {props.text}
        </Modal.Body>
    </Aux>
);

export default aboutSkill;