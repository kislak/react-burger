import { applyMiddleware, createStore, Store } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { errorHandler } from "./_middleware/errorHandler";
import thunkMiddleware from "redux-thunk";

const initialState = { ingredientsStore: { ingredients: [] } };

export const configureStore = (): Store => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(errorHandler(), thunkMiddleware))
  );
  return store;
};
