import styles from "./pages.module.css";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useParams } from "react-router-dom";
import OrderDetails from "../components/modal/order-details/order-details";
import { submitOrderAction } from "../services/order/actions";
import * as allOrders from "../services/all-orders/actions";
import * as profileOrders from "../services/profile-orders/actions";
import { accessTokenSelector } from "../services/user/selectors";

const Order: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };
  const orderNumber = Number(id);
  const token = useAppSelector(accessTokenSelector);

  useEffect(() => {
    dispatch(allOrders.wsConnect);
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      const t = token.replace("Bearer ", "");
      dispatch(profileOrders.wsConnect(`?token=${t}`));
    }
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(submitOrderAction(orderNumber));
  }, [dispatch, orderNumber]);

  return (
    <section className={styles.section}>
      <div className={styles.center}>
        <OrderDetails />
      </div>
    </section>
  );
};

export default Order;
