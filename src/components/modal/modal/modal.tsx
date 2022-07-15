// see https://www.joshwcomeau.com/snippets/react-components/in-portal/

import React from "react";
import ReactDOM from "react-dom";
import styles from "../modal-overlay/modal-overlay.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

interface IModal {
  id: string;
  title?: string;
  isOpen: boolean;
  children: React.ReactNode;
  setClose: () => void;
}

const Modal: React.FC<IModal> = ({ id, title, isOpen, setClose, children }) => {
  return ReactDOM.createPortal(
    <ModalOverlay isOpen={isOpen} setClose={setClose}>
      <section
        className={styles.main}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.header}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button
            className={styles.closeButton}
            type="button"
            onClick={setClose}
          >
            <CloseIcon type="primary" />
          </button>
        </div>
        <article className={styles.content}>{children}</article>
      </section>
    </ModalOverlay>,
    document.querySelector(`#${id}`)!
  );
};

export default Modal;
