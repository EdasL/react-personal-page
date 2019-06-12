import React from 'react';
import styles from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop'
import Modal from 'react-bootstrap/Modal'

const modal = (props) =>(
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <Modal.Dialog  
            className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1': '0'
            }}>
            {props.children}
        </Modal.Dialog>
    </Aux>
);

export default modal;