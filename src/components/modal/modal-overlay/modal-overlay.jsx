import styles from './modal-overlay.module.css';

function ModalOverlay(props) {
    return (
        <div className={`${styles.modalOverlay} ${!!props.isOpen && styles.opened}`}>
            {props.children}
        </div>
    )
}

export default ModalOverlay;
