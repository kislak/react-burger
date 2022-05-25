import Modal from "../modal/modal";

function IngredientDetails({children, isOpen, setClose}) {
    return (
        <Modal isOpen={isOpen} setClose={setClose} title="Детали ингредиента">
            {children}
        </Modal>
    )
}

export default IngredientDetails;
