import api from "../../utils/api";
import { addErrorAction } from "../_middleware/error-handler";
import { resetOrderConstructorAction } from "../burger-constructor/actions";
import { TBurgerItem } from "../../types/burger-item";
import { Dispatch } from "redux";
export const SUBMIT_ORDER = "SUBMIT_ORDER_SUCCESS";
export const OPEN_ORDER_DETAILS = "OPEN_ORDER_DETAILS";
export const SHOW_LOADER = "SHOW_LOADER";

type TSubmitOrderAction = {
  type: typeof SUBMIT_ORDER;
  payload: number | null;
};

type TShowLoaderAction = {
  type: typeof SHOW_LOADER;
  payload: boolean;
};

type TOpenOrderDetailsAction = {
  type: typeof OPEN_ORDER_DETAILS;
  payload: boolean;
};

export type TOrderActions =
  | TSubmitOrderAction
  | TShowLoaderAction
  | TOpenOrderDetailsAction;

export const submitOrderAction = (
  payload: number | null
): TSubmitOrderAction => {
  return {
    type: SUBMIT_ORDER,
    payload: payload,
  };
};

const showLoaderAction = (payload: boolean): TShowLoaderAction => {
  return {
    type: SHOW_LOADER,
    payload: payload,
  };
};

const openOrderDetailsAction = (payload: boolean): TOpenOrderDetailsAction => {
  return {
    type: OPEN_ORDER_DETAILS,
    payload: payload,
  };
};

export const openOrderDetails =
  (order: number | null, callback: () => void): any =>
  (dispatch: Dispatch) => {
    dispatch(submitOrderAction(order));
    dispatch(openOrderDetailsAction(order ? true : false));
    callback();
  };

export const submitOrder =
  (topItem: TBurgerItem, midItems: Array<TBurgerItem>, token: string): any =>
  (dispatch: Dispatch) => {
    const ingredients = [topItem._id].concat(
      midItems
        .map((i) => {
          return i._id;
        })
        .concat(topItem._id)
    );
    dispatch(showLoaderAction(true));
    dispatch(openOrderDetailsAction(true));
    api
      .submitOrder(ingredients, token)
      .then((response) => {
        dispatch(showLoaderAction(false));
        dispatch(submitOrderAction(response.order.number));
        dispatch(resetOrderConstructorAction());
      })
      .catch((error) => {
        dispatch(showLoaderAction(false));
        dispatch(addErrorAction(error));
      });
  };
