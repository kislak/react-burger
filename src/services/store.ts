import rootReducer from "./reducer";
import { errorHandler } from "./_middleware/error-handler";
import { webSocketHandler } from "./_middleware/web-socket-handler";
import { allOrdersActions } from "./all-orders/actions";
import { profileOrdersActions } from "./profile-orders/actions";
import { configureStore } from '@reduxjs/toolkit'

const ALL_ORDERS_URL = "wss://norma.nomoreparties.space/orders/all";
const PROFILE_ORDERS_URL = "wss://norma.nomoreparties.space/orders";
const initialState = {
  ingredientsStore: { ingredients: [] },
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
          .prepend(errorHandler())
          .prepend(webSocketHandler(PROFILE_ORDERS_URL, profileOrdersActions))
          .prepend(webSocketHandler(ALL_ORDERS_URL, allOrdersActions)),
  devTools: true,
  preloadedState: initialState
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

