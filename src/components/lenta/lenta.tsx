import React from "react";
import { TOrder } from "../../types/order";

interface ILenta {
  orders: Array<TOrder>;
}

const Lenta: React.FC<ILenta> = ({ orders }) => {
  return (
    <section>
      <h1 className="text text_type_main-large">Лента заказов</h1>
      {orders.map((order) => {
        return (
          <section key={order._id}>
            #{order._id} - {order.name}
          </section>
        );
      })}
    </section>
  );
};

export default Lenta;
