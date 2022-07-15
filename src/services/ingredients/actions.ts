import api from "../../utils/api";
import { addErrorAction } from "../_middleware/errorHandler";
import { Dispatch } from "redux";
import { TBurgerItem } from "../../prop-types/burger-item";
export const INGREDIENTS_GET_SUCCESS = "INGREDIENTS_GET_SUCCESS";

export const ingredientsGetSuccessAction = (payload: Array<TBurgerItem>) => {
  return {
    type: INGREDIENTS_GET_SUCCESS,
    payload: payload,
  };
};

export const getIngredients = (): any => (dispatch: Dispatch) => {
  api
    .getIngredients()
    .then((response) => {
      dispatch(ingredientsGetSuccessAction(response.data));
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
};
