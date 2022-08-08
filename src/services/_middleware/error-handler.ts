import { AnyAction } from "redux";
import { Middleware } from "@reduxjs/toolkit";
export const API_ERROR = "API_ERROR";

export function addErrorAction(payload: Error) {
  return {
    type: API_ERROR,
    payload: payload,
  };
}

export const errorHandler =
  (): Middleware =>
  (store: any): any =>
  (next: any): any =>
  (action: AnyAction): any => {
    if (action.type === API_ERROR) {
      const error = action.payload;
      console.log("api error:", error.message);
    }
    return next(action);
  };
