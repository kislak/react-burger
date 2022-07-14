import { Dispatch } from "redux";
import { TBurgerItem } from "../../prop-types/burger-item";

export const SET_CURRENT = "SET_CURRENT";

const setCurrentAction = (payload: any) => {
  return {
    type: SET_CURRENT,
    payload: payload,
  };
};

export const setCurrentIngredient = (
  item: TBurgerItem | null,
  dispatch: Dispatch,
  callback: () => void
) => {
  dispatch(setCurrentAction(item));
  callback();
};
