import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducer"
import {composeWithDevTools} from "redux-devtools-extension";
import {errorHandler} from "./_middleware/errorHandler";
import thunkMiddleware from "redux-thunk"

export  const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(errorHandler(), thunkMiddleware))
  );
  return store
}