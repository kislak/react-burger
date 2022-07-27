import { Dispatch } from "redux";
import { TBurgerItem } from "../../prop-types/burger-item";

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
  (item: TBurgerItem | null, callback: () => void): any =>
  (dispatch: Dispatch) => {
    dispatch(setCurrentAction(item));
    callback();
  };
