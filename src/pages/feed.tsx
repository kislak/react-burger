import React, { useEffect } from "react";
import { wsConnect } from "../services/all-orders/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  ordersSelector,
  totalSelector,
  totalTodaySelector,
} from "../services/all-orders/selectors";
import Lenta from "../components/lenta/lenta";
import LentaInfo from "../components/lenta-info/lenta-info";
import styles from "../components/lenta/lenta.module.css";
import Modal from "../components/modal/modal/modal";
import { openOrderDetails } from "../services/order/actions";
import OrderDetails from "../components/modal/order-details/order-details";
import { orderDetailsOpenSelector } from "../services/order/selectors";
import {useHistory} from "react-router-dom";

const Feed: React.FC = () => {
  const dispatch = useDispatch();
  const total = useSelector(totalSelector);
  const totalToday = useSelector(totalTodaySelector);
  const orders = useSelector(ordersSelector);
  const isOrderDetailsOpen = useSelector(orderDetailsOpenSelector);
  const history = useHistory();

  useEffect(() => {
    dispatch(wsConnect);
  }, [dispatch]);

  const readyOrders = orders.filter((i) => i.status === "done").slice(0, 20);
  const pendingOrders = orders
    .filter((i) => i.status === "pending")
    .slice(0, 20);

    const modalCloseHandler = () => {
        dispatch(openOrderDetails(false, () => {
            history.push("/feed");
        }))
    }

    return (
    <>
      <section className={styles.main}>
        <h1 className="text text_type_main-medium">Лента заказов</h1>
        <Lenta orders={orders} showStatus={false} />
      </section>
      <LentaInfo
        readyOrders={readyOrders}
        pendingOrders={pendingOrders}
        total={total}
        totalToday={totalToday}
      />

      <Modal
        id="modal"
        isOpen={isOrderDetailsOpen}
        setClose={modalCloseHandler}
      >
        <OrderDetails />
      </Modal>
    </>
  );
};

export default Feed;
