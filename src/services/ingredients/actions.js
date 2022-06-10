import api from "../../utils/api";
import { addErrorAction } from "../_middleware/errorHandler";
export const INGREDIENTS_GET_SUCCESS = "INGREDIENTS_GET_SUCCESS";

export const ingredientsGetSuccessAction = (payload) => {
  return {
    type: INGREDIENTS_GET_SUCCESS,
    payload: payload,
  };
};

export const getIngredients = () => (dispatch) => {
  api
    .getIngredients()
    .then((response) => {
      dispatch(ingredientsGetSuccessAction(response.data));
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
};
