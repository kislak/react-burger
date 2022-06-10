import api from "../../utils/api";
import { addErrorAction } from "../_middleware/errorHandler";
import { resetOrderConstructorAction } from "../burger-constructor/actions";
export const SUBMIT_ORDER = "SUBMIT_ORDER_SUCCESS";
export const OPEN_ORDER_DETAILS = "OPEN_ORDER_DETAILS";

const submitOrderAction = (payload) => {
  return {
    type: SUBMIT_ORDER,
    payload: payload,
  };
};

export const openOrderDetailsAction = (payload) => {
  return {
    type: OPEN_ORDER_DETAILS,
    payload: payload,
  };
};

export const submitOrder = (topItem, midItems) => (dispatch) => {
  const ingredients = [topItem._id, topItem._id].concat(
    midItems.map((i) => {
      return i._id;
    })
  );
  api
    .submitOrder(ingredients)
    .then((response) => {
      dispatch(submitOrderAction(response.order.number));
      dispatch(openOrderDetailsAction(true));
      dispatch(resetOrderConstructorAction());
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
};
