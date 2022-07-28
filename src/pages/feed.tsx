import React, { useEffect } from "react";
import { wsConnect } from "../services/all-orders/actions";
import { useDispatch, useSelector } from "react-redux";
import {ordersSelector, totalSelector, totalTodaySelector} from "../services/all-orders/selectors";

const Feed: React.FC = () => {
  const dispatch = useDispatch();
  const total = useSelector(totalSelector);
  const totalToday = useSelector(totalTodaySelector);
  const orders = useSelector(ordersSelector);

  useEffect(() => {
    dispatch(wsConnect);
  }, [dispatch]);

  const readyOrders = orders.filter((i) => i.status === "done").slice(0, 20);
  const pendingOrders = orders.filter((i) => i.status === "pending").slice(0, 20);

  return (
    <>
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
      <section>
        <section>
          <h2 className="text text_type_main-medium">Готовы:</h2>
          <ul>
            {readyOrders.map((order) => {
              return <li key={order._id}>{order.number}</li>;
            })}
          </ul>
        </section>

        <section>
          <h2 className="text text_type_main-medium">В работе:</h2>
          <ul>
            {pendingOrders.map((order) => {
              return <li key={order._id}>{order.number}</li>;
            })}
          </ul>
        </section>

        <section>
          <h2>выполнено за все время:</h2>
          <p>{total}</p>
        </section>
        <section>
          <h2>выполнено за сегодня:</h2>
          <p>{totalToday}</p>
        </section>
      </section>
    </>
  );
};

export default Feed;
