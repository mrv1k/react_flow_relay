// @flow

import type { Element, ChildrenArray, Node } from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalRoot = document.getElementById("modal");

type Props = {
  children: ChildrenArray<Element<any>>,
  title: string,
  closeModal: () => void,
};

function Modal({ children, title, closeModal }: Props): Node {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    if (!modalRoot || !elRef.current) {
      return;
    }

    modalRoot.appendChild(elRef.current);
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  const Element = (
    <div className="wrapper">
      <div className="header">
        <span className="title">{title}</span>
        <button className="close" onClick={closeModal}>
          X
        </button>
      </div>
      <div className="content">{children}</div>
    </div>
  );

  return createPortal(Element, elRef.current);
}

export default Modal;
