import { createAction } from "@reduxjs/toolkit";
import {TOrder} from "../../types/order";

export const wsConnect = createAction<string, "ALL_ORDERS_CONNECT">(
  "ALL_ORDERS_CONNECT"
);
export const wsDisconnect = createAction("ALL_ORDERS_DISCONNECT");
export const wsConnecting = createAction("ALL_ORDERS_WS_CONNECTING");
export const wsOpen = createAction("ALL_ORDERS_WS_OPEN");
export const wsClose = createAction("ALL_ORDERS_WS_CLOSE");
export const wsError = createAction<string, "ALL_ORDERS_WS_ERROR">(
  "ALL_ORDERS_WS_ERROR"
);

export type TOrderMessage = {
  orders: Array<TOrder>,
  total: number,
  totalToday: number
}

export const wsMessage = createAction<TOrderMessage, "ALL_ORDERS_WS_MESSAGE">(
  "ALL_ORDERS_WS_MESSAGE"
);

export const allOrdersActions = {
  wsConnect,
  wsDisconnect,
  wsConnecting,
  wsOpen,
  wsClose,
  wsError,
  wsMessage,
};
