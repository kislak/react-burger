import { AnyAction, Dispatch } from "redux";
import { TBurgerItem } from "../../types/burger-item";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export const SET_CURRENT = "SET_CURRENT";

export type TSetCurrentAction = {
  type: typeof SET_CURRENT;
  payload: TBurgerItem | null;
};

const setCurrentAction = (payload: TBurgerItem | null): TSetCurrentAction => {
  return {
    type: SET_CURRENT,
    payload: payload,
  };
};

export const setCurrentIngredient =
  (
    item: TBurgerItem | null,
    callback: () => void
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
    dispatch(setCurrentAction(item));
    callback();
  };
