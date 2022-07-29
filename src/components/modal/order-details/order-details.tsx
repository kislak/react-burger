import styles from "./order-details.module.css";
import check from "../../../images/check.svg";
import loader from "../../../images/loader.gif";

import React from "react";
import { useSelector } from "react-redux";
import {
  orderNumberSelector,
  showLoader,
} from "../../../services/order/selectors";
import { ordersSelector } from "../../../services/all-orders/selectors";
import { profileOrdersSelector } from "../../../services/profile-orders/selectors";

const OrderDetails: React.FC = () => {
  const orderNumber = useSelector(orderNumberSelector);
  const loading = useSelector(showLoader);
  const orders = useSelector(ordersSelector);
  const profileOrders = useSelector(profileOrdersSelector);

  let order = orders.find((i) => i.number === orderNumber);
  if (!order) {
    order = profileOrders.find((i) => i.number === orderNumber);
  }

  return (
    <section className={styles.content}>
      {loading && <img src={loader} alt="loader" />}
      {!loading && !order && (
        <>
          <h2 className="text text_type_digits-large mt-8">{orderNumber}</h2>
          <p className="text text_type_main-medium mt-8">
            Идентификатор заказа
          </p>
          <div className="mt-15">
            <img src={check} alt="check" />
          </div>
          <p className="text text_type_main-default mt-15">
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-default text_color_inactive mt-2 mb-20">
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      )}

      {!loading && order && <div className={styles.number}>{order.number}</div>}
    </section>
  );
};

export default OrderDetails;
