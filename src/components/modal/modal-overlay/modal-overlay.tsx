import styles from "./modal-overlay.module.css";
import React, { useEffect, useCallback } from "react";

interface IModalOverlay {
  children: React.ReactNode;
  isOpen: boolean;
  setClose: () => void;
}

const ModalOverlay: React.FC<IModalOverlay> = ({
  children,
  isOpen,
  setClose,
}) => {
  const escFunction = useCallback(
    (e: KeyboardEvent) => {
      e.key === "Escape" && setClose();
    },
    [setClose]
  );

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
};

export default ModalOverlay;
