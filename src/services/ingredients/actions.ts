import api from "../../utils/api";
import { addErrorAction } from "../_middleware/error-handler";
import { Dispatch } from "redux";
import { TBurgerItem } from "../../types/burger-item";
export const INGREDIENTS_GET_SUCCESS = "INGREDIENTS_GET_SUCCESS";

export type TIngredientsGetSuccessAction = {
  type: typeof INGREDIENTS_GET_SUCCESS;
  payload: Array<TBurgerItem>;
};

export const ingredientsGetSuccessAction = (
  payload: Array<TBurgerItem>
): TIngredientsGetSuccessAction => {
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
