import {CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {useEffect, useCallback} from "react";

import styles from './modal.module.css';
import PropTypes from "prop-types";

function Modal(
    {
        children,
        title,
        isOpen,
        setClose
    })
{
    const escFunction = useCallback((e) => {
        (e.key === "Escape") && setClose()
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    return (
        <ModalOverlay
            isOpen={isOpen}
            setClose={setClose}
        >
            <section
                className={styles.modal}
                onClick={(e) => { e.stopPropagation()}}
            >
                <article className={styles.header}>
                    <h2 className="text text_type_main-large">
                        {title}
                    </h2>
                    <button
                        className={styles.closeButton}
                        type="button"
                        onClick={setClose}>
                        <CloseIcon />
                    </button>
                </article>
                <article className={styles.content}>
                  {children}
                </article>
            </section>
        </ModalOverlay>
    )
}

Modal.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    setClose: PropTypes.func.isRequired
};

export default Modal;
