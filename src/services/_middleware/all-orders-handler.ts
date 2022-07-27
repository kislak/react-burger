import { createAction } from '@reduxjs/toolkit';
import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';

export type TAllOrdersActionTypes = {
  wsConnect: ActionCreatorWithPayload<string>,
  wsDisconnect: ActionCreatorWithoutPayload,
  wsConnecting: ActionCreatorWithPayload<any>,
  wsOpen: ActionCreatorWithoutPayload,
  wsClose: ActionCreatorWithoutPayload,
  wsError: ActionCreatorWithPayload<string>,
  wsMessage: ActionCreatorWithPayload<any>,
}

export const wsConnect = createAction<string, 'ALL_ORDERS_CONNECT'>('ALL_ORDERS_CONNECT');
export const wsDisconnect = createAction('ALL_ORDERS_DISCONNECT');
export const wsConnecting = createAction('ALL_ORDERS_WS_CONNECTING');
export const wsOpen = createAction('ALL_ORDERS_WS_OPEN');
export const wsClose = createAction('ALL_ORDERS_WS_CLOSE');
export const wsError = createAction<string, 'ALL_ORDERS_WS_ERROR'>('ALL_ORDERS_WS_ERROR');
export const wsMessage = createAction<any, 'ALL_ORDERS_WS_MESSAGE'>('ALL_ORDERS_WS_MESSAGE');

const allOrdersActions = {
  wsConnect: wsConnect,
  wsDisconnect: wsDisconnect,
  wsConnecting: wsConnecting,
  wsOpen: wsOpen,
  wsClose: wsClose,
  wsError: wsError,
  wsMessage: wsMessage,
};

let socket: WebSocket | null = null;
let isConnected = false;
let reconnectTimer = 0;
let url = 'wss://norma.nomoreparties.space/orders/all';

export const AllOrdersHandler = (): any =>
    (store: any): any =>
        (next: any): any =>
            (action: any): any => {
              const { dispatch } = store;
              const { wsConnect, wsDisconnect, wsConnecting, wsOpen, wsClose, wsError, wsMessage } = allOrdersActions;

              if (wsConnect.match(action)) {
                console.log('connect')
                // url = action.payload;
                socket = new WebSocket(url);
                isConnected = true;
                dispatch(wsConnecting());
              }

              if (socket) {
                socket.onopen = () => {
                  dispatch(wsOpen());
                };

                socket.onerror = err  => {
                  console.log('error')
                };

                socket.onmessage = event => {
                  const { data } = event;
                  const parsedData = JSON.parse(data);
                  console.log(parsedData)
                  dispatch(wsMessage(parsedData));
                };

                socket.onclose = event => {
                  if (event.code !== 1000) {
                    console.log('error')
                    dispatch(wsError(event.code.toString()));
                  }
                  console.log('close')
                  dispatch(wsClose());

                  if (isConnected) {
                    dispatch(wsConnecting());
                    reconnectTimer = window.setTimeout(() => {
                      dispatch(wsConnect(url));
                    }, 3000)
                  }
                };

                if (wsDisconnect.match(action)) {
                  console.log('disconnect')
                  clearTimeout(reconnectTimer)
                  isConnected = false;
                  reconnectTimer = 0;
                  socket.close();
                  dispatch(wsClose());
                }
              }


              return next(action);
            };
