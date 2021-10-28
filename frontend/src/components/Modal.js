// @flow

import type {Node} from 'react';
import {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('modal');

function Modal({children, title, closeModal}): Node {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  const Element = (
    <div className="wrapper">
      <div className="header">
        <span className="title">{title}</span>
        <button className="close" onClick={closeModal}>X</button>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );

  return createPortal(Element, elRef.current);
}

export default Modal;
