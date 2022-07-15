import api from "../../utils/api";
import { addErrorAction } from "../_middleware/errorHandler";
import { resetOrderConstructorAction } from "../burger-constructor/actions";
import { TBurgerItem } from "../../prop-types/burger-item";
import { Dispatch } from "redux";
export const SUBMIT_ORDER = "SUBMIT_ORDER_SUCCESS";
export const OPEN_ORDER_DETAILS = "OPEN_ORDER_DETAILS";
export const SHOW_LOADER = "SHOW_LOADER";

const submitOrderAction = (payload: any) => {
  return {
    type: SUBMIT_ORDER,
    payload: payload,
  };
};

const showLoaderAction = (payload: any) => {
  return {
    type: SHOW_LOADER,
    payload: payload,
  };
};

export const openOrderDetailsAction = (payload: any) => {
  return {
    type: OPEN_ORDER_DETAILS,
    payload: payload,
  };
};

export const submitOrder = (
  topItem: TBurgerItem,
  midItems: Array<TBurgerItem>,
  dispatch: Dispatch
) => {
  const ingredients = [topItem._id, topItem._id].concat(
    midItems.map((i) => {
      return i._id;
    })
  );
  dispatch(showLoaderAction(true));
  api
    .submitOrder(ingredients)
    .then((response) => {
      dispatch(showLoaderAction(false));
      dispatch(submitOrderAction(response.order.number));
      dispatch(openOrderDetailsAction(true));
      dispatch(resetOrderConstructorAction());
    })
    .catch((error) => {
      dispatch(showLoaderAction(false));
      dispatch(addErrorAction(error));
    });
};
