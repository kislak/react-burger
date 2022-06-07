import api from "../../utils/api"
import {API_ERROR} from "../_middleware/errorHandler";
export const SUBMIT_ORDER = "SUBMIT_ORDER_SUCCESS"
export const OPEN_ORDER_DETAILS = "OPEN_ORDER_DETAILS"

export const submitOrder = (topItem, midItems) => (dispatch) => {
  const ingredients = [topItem._id, topItem._id].concat(midItems.map((i) => { return i._id;}));
  api
    .submitOrder(ingredients)
    .then((response) => {
      dispatch({
        type: SUBMIT_ORDER,
        payload: response.order.number
      })
      dispatch({
        type: OPEN_ORDER_DETAILS,
        payload: true
      })
    })
    .catch((error) => {
      dispatch({
        type: API_ERROR,
        payload: error
      })
    });
}

export const openOrderDetails = (isOpen = true) => (dispatch) => {
  dispatch({
    type: OPEN_ORDER_DETAILS,
    payload: isOpen
  })
}
