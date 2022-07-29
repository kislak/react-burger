import React from "react";
import { TOrder } from "../../types/order";
import styles from "./lenta.module.css";
import LentaItem from "./lenta-item/lenta-item";

interface ILenta {
  orders: Array<TOrder>;
  showStatus: boolean;
}

const Lenta: React.FC<ILenta> = ({ orders, showStatus }) => {
  return (
    <section className={`${styles.list} custom-scroll`}>
      {orders.map((order) => (
        <LentaItem order={order} key={order._id} showStatus={showStatus} />
      ))}
    </section>
  );
};

export default Lenta;
