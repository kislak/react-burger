import api from "../../utils/api";
import { addErrorAction } from "../_middleware/error-handler";
import { AnyAction, Dispatch } from "redux";
import { TBurgerItem } from "../../types/burger-item";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
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

export const getIngredients =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
    api
      .getIngredients()
      .then((response) => {
        dispatch(ingredientsGetSuccessAction(response.data));
      })
      .catch((error) => {
        dispatch(addErrorAction(error));
      });
  };
