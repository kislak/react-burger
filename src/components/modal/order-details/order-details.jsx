import Modal from "../modal/modal";

function OrderDetails(
    {
        children,
        isOpen,
        setClose
    }) {

    return <Modal
        isOpen={isOpen}
        setClose={setClose}
        title=""
    >
        {children}
    </Modal>
}

export default OrderDetails;
