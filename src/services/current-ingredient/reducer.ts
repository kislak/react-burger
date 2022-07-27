import { SET_CURRENT, TSetCurrentAction } from "./actions";
import { TBurgerItem } from "../../prop-types/burger-item";

export type TCurrentIngredientStore = {
  currentIngredient: null | TBurgerItem;
};
const initialState = {
  currentIngredient: null,
};

export const reducer = (
  state: TCurrentIngredientStore = initialState,
  action: TSetCurrentAction
) => {
  switch (action.type) {
    case SET_CURRENT:
      return {
        ...state,
        currentIngredient: action.payload,
      };
    default:
      return state;
  }
};
