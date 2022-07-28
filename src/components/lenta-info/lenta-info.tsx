import React from "react";
import { TOrder } from "../../types/order";
import styles from "./lenta-info.module.css";

interface ILentaInfo {
  readyOrders: Array<TOrder>;
  pendingOrders: Array<TOrder>;
  total: number;
  totalToday: number;
}

const LentaInfo: React.FC<ILentaInfo> = ({
  readyOrders,
  pendingOrders,
  total,
  totalToday,
}) => {
  return (
    <section className={styles.main}>
      <div className={styles.lists}>
        <div>
          <h2 className="text text_type_main-medium">Готовы:</h2>
          <ul className={styles.list}>
            {readyOrders.map((order) => {
              return (
                <li
                  className="text text_type_digits-default text_color_success mr-5"
                  key={order._id}
                >
                  {order.number}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="text text_type_main-medium ml-30">В работе:</h2>
          <ul className={styles.list}>
            {pendingOrders.map((order) => {
              return (
                <li
                  className="text text_type_digits-default mr-5"
                  key={order._id}
                >
                  {order.number}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <h2 className="text text_type_main-medium mt-5">
        выполнено за все время:
      </h2>
      <p className="text text_type_digits-large">{total}</p>
      <h2 className="text text_type_main-medium mt-5">выполнено за сегодня:</h2>
      <p className="text text_type_digits-large">{totalToday}</p>
    </section>
  );
};

export default LentaInfo;
