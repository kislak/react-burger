import styles from './modal-overlay.module.css';

function ModalOverlay(
    {
        children,
        isOpen,
        setClose
    }) {
    return (
        <div
            className={`${styles.modalOverlay} ${isOpen && styles.opened}`}
            onClick={() => { setClose() }}
        >
            {children}
        </div>
    )
}

export default ModalOverlay;
