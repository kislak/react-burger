import { createReducer } from '@reduxjs/toolkit'
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "./actions";
import {TOrder} from "../../types/order";

enum WebsocketStatus {
  CONNECTING = 'CONNECTING...',
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE'
}

export type TProfileOrdersStore = {
  status: WebsocketStatus,
  connectionError: string,
  orders: Array<TOrder>,
}

const initialState: TProfileOrdersStore = {
  status: WebsocketStatus.OFFLINE,
  connectionError: '',
  orders: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
      .addCase(wsConnecting, (state) => {
        state.status = WebsocketStatus.CONNECTING;
      })
      .addCase(wsOpen, (state) => {
        state.status = WebsocketStatus.ONLINE;
        state.connectionError = '';
      })
      .addCase(wsClose, (state) => {
        state.status = WebsocketStatus.OFFLINE;
      })
      .addCase(wsError, (state, action) => {
        state.connectionError = action.payload;
      })
      .addCase(wsMessage, (state, action) => {
        state.orders = action.payload.orders
      })
})
