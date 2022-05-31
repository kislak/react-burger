import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";
import { useEffect, useCallback } from "react";

function ModalOverlay({ children, isOpen, setClose }) {
  const escFunction = useCallback((e) => {
    e.key === "Escape" && setClose();
  }, [setClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", escFunction, false);
      return () => {
        document.removeEventListener("keydown", escFunction, false);
      };
    }
  }, [escFunction, isOpen]);

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen && styles.opened}`}
      onClick={() => {
        setClose();
      }}
    >
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
