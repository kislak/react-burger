// see https://www.joshwcomeau.com/snippets/react-components/in-portal/

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "../modal-overlay/modal-overlay.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

function Modal({ id, title, isOpen, setClose, children }) {
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
            <CloseIcon />
          </button>
        </div>
        <article className={styles.content}>{children}</article>
      </section>
    </ModalOverlay>,
    document.querySelector(`#${id}`)
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setClose: PropTypes.func.isRequired,
};

export default Modal;
