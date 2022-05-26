import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";
import { useEffect, useCallback } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function ModalOverlay({ children, isOpen, title, setClose }) {
  const escFunction = useCallback((e) => {
    e.key === "Escape" && setClose();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen && styles.opened}`}
      onClick={() => {
        setClose();
      }}
    >
      <section
        className={styles.main}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <header className={styles.header}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button
            className={styles.closeButton}
            type="button"
            onClick={setClose}
          >
            <CloseIcon />
          </button>
        </header>
        <article className={styles.content}>{children}</article>
      </section>
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default ModalOverlay;
