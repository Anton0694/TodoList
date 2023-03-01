
import { createPortal } from 'react-dom';
import css from './Modal.module.css'
import React from 'react';

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ children, onToggleStatus }) => {
    return createPortal (
            <div className={css.Overlay}>
            <div className={css.ModalBox}>
                {React.Children.map(children, (child) => {
          return React.cloneElement(child, { onToggleStatus: onToggleStatus });
                })}
            </div>
            </div>,
            modalRoot,
        );
    }
    
