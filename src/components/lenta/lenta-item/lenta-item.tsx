import React from "react";
import { TOrder } from "../../../types/order";
import styles from "./lenta-item.module.css";

interface ILenta {
  order: TOrder;
}

const LentaItem: React.FC<ILenta> = ({ order }) => {
  return (
    <section className={styles.main} key={order._id}>
      #{order._id} - {order.name}
    </section>
  );
};

export default LentaItem;
