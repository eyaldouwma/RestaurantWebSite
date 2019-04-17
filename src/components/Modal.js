import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div className={props.visible ? 'modal active' : 'modal'} onClick={props.onGreyArea}>
            {props.children}
        </div>
    )
}

export default Modal;