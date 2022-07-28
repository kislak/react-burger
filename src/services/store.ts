import { applyMiddleware, createStore, Store } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { errorHandler } from "./_middleware/error-handler";
import { webSocketHandler } from "./_middleware/web-socket-handler";
import thunkMiddleware from "redux-thunk";
import { allOrdersActions } from "./all-orders/actions";
import {profileOrdersActions} from "./profile-orders/actions";

const ALL_ORDERS_URL = "wss://norma.nomoreparties.space/orders/all";
const PROFILE_ORDERS_URL = "wss://norma.nomoreparties.space/orders";

const initialState = {
  ingredientsStore: { ingredients: [] },
};

export const configureStore = (): Store => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
          errorHandler(),
          webSocketHandler(ALL_ORDERS_URL, allOrdersActions),
          webSocketHandler(PROFILE_ORDERS_URL, profileOrdersActions),
          thunkMiddleware
      )
    )
  );
  return store;
};
