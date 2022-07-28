import React from "react";
import { TOrder } from "../../types/order";
import styles from "./lenta.module.css";
import LentaItem from "./lenta-item/lenta-item";

interface ILenta {
  orders: Array<TOrder>;
}

const Lenta: React.FC<ILenta> = ({ orders }) => {
  return (
    <section className={styles.main}>
      <h1 className="text text_type_main-medium">Лента заказов</h1>
      <section className={`${styles.list} custom-scroll`}>
        {orders.map((order) => (
          <LentaItem order={order} />
        ))}
      </section>
    </section>
  );
};

export default Lenta;
