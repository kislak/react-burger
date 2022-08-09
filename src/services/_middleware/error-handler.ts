import { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

export const API_ERROR = "API_ERROR";

export function addErrorAction(payload: Error) {
  return {
    type: API_ERROR,
    payload: payload,
  };
}

export const errorHandler =
  (): Middleware =>
  (store: MiddlewareAPI<AppDispatch, RootState>) =>
  (next) =>
  (action) => {
    if (action.type === API_ERROR) {
      const error = action.payload;
      console.log("api error:", error.message);
    }
    return next(action);
  };
