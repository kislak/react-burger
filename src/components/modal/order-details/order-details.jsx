import Modal from "../modal/modal";
import styles from './order-details.module.css';
import PropTypes from "prop-types";
import check from "../../../images/check.svg"

function OrderDetails(
    {
        isOpen,
        setClose
    }) {

    return <Modal
        isOpen={isOpen}
        setClose={setClose}
    >
        <section className={styles.content}>
            <h2 className="text text_type_digits-large mt-8">
                034536
            </h2>
            <p className="text text_type_main-medium mt-8">
                Идентификатор заказа
            </p>
            <div className="mt-15">
                <img src={check} alt="check"/>
            </div>
            <p className="text text_type_main-default mt-15">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default text_color_inactive mt-2 mb-20">
               Дождитесь готовности на орбитальной станции
            </p>
        </section>
    </Modal>
}


OrderDetails.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setClose: PropTypes.func.isRequired
};

export default OrderDetails;
