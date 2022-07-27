import React from "react";
import styles from "./pages.module.css";

type TOrder = {
  id: string;
  name: string;
};

const Feed: React.FC = () => {
  const orders: Array<TOrder> = [
    {
      id: "0323",
      name: "first order",
    },
    {
      id: "0325",
      name: "second order",
    },
  ];
  const readyOrders: Array<string> = ["123", "234", "345"];
  const pendingOrders: Array<string> = ["567123", "567234", "567345"];
  const numberAll: number = 28752;
  const numberToday: number = 148;

  return (
    <>
      <section>
        <h1 className="text text_type_main-large">Лента заказов</h1>
        {orders.map((order) => {
          return (
            <section>
              #{order.id} - {order.name}
            </section>
          );
        })}
      </section>
      <section>
        <section>
          <h2 className="text text_type_main-medium">Готовы:</h2>
          <ul>
            {readyOrders.map((orederId) => {
              return <li>{orederId}</li>;
            })}
          </ul>
        </section>

        <section>
          <h2 className="text text_type_main-medium">В работе:</h2>
          <ul>
            {pendingOrders.map((orederId) => {
              return <li>{orederId}</li>;
            })}
          </ul>
        </section>

        <section>
          <h2>выполнено за все время:</h2>
          <p>{numberAll}</p>
        </section>
        <section>
          <h2>выполнено за сегодня:</h2>
          <p>{numberToday}</p>
        </section>
      </section>
    </>
  );
};

export default Feed;
