import { applyMiddleware, createStore, Store } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { errorHandler } from "./_middleware/error-handler";
import { AllOrdersHandler } from "./_middleware/all-orders-handler";

import thunkMiddleware from "redux-thunk";

const initialState = {
  ingredientsStore: { ingredients: [] },
  // allOrdersStore: { orders: [] }
};

export const configureStore = (): Store => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(errorHandler(), AllOrdersHandler(), thunkMiddleware)
    )
  );
  return store;
};
