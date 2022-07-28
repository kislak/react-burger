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

const Feed: React.FC = () => {
  const dispatch = useDispatch();
  const total = useSelector(totalSelector);
  const totalToday = useSelector(totalTodaySelector);
  const orders = useSelector(ordersSelector);

  useEffect(() => {
    dispatch(wsConnect);
  }, [dispatch]);

  const readyOrders = orders.filter((i) => i.status === "done").slice(0, 20);
  const pendingOrders = orders
    .filter((i) => i.status === "pending")
    .slice(0, 20);

  return (
    <>
      <Lenta orders={orders} />
      <LentaInfo
        readyOrders={readyOrders}
        pendingOrders={pendingOrders}
        total={total}
        totalToday={totalToday}
      />
    </>
  );
};

export default Feed;
