import api from "../../utils/api";
import { API_ERROR } from "../_middleware/errorHandler";
export const INGREDIENTS_GET_SUCCESS = "INGREDIENTS_GET_SUCCESS";

export const getIngredients = () => (dispatch) => {
  api
    .getIngredients()
    .then((response) => {
      dispatch({
        type: INGREDIENTS_GET_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: API_ERROR,
        payload: error,
      });
    });
};
