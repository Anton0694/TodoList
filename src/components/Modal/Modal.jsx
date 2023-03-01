
import { createPortal } from 'react-dom';
import css from './Modal.module.css'
import React from 'react';

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ children, onToggleStatus }) => {
    return createPortal (
            <div className={css.Overlay}>
            <div className={css.ModalBox}>
                {React.cloneElement(children, { onToggleStatus })}
            </div>
            </div>,
            modalRoot,
        );
    }
    
