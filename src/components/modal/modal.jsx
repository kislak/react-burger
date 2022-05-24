import {CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./modal-overlay/modal-overlay";
import styles from './modal.module.css';

function Modal(props) {
    return (
        <ModalOverlay isOpen={props.isOpen}>
            <section className={styles.modal}>
                <section className={styles.header}>
                    <h2 className="text text_type_main-large">
                        title
                        {props.title}
                    </h2>
                    <button
                        className={styles.closeButton}
                        type="button"
                        onClick={props.onClose}>
                        <CloseIcon />
                    </button>
                </section>
                <section className={styles.content}>
                  {props.children}
                </section>
            </section>
        </ModalOverlay>
    )
}

export default Modal;
