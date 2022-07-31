import {
  INGREDIENTS_GET_SUCCESS,
  TIngredientsGetSuccessAction,
} from "./actions";
import { TBurgerItem } from "../../types/burger-item";

export type TIngredientsStore = {
  ingredients: Array<TBurgerItem>;
};

const initialState = {
  ingredients: [],
};

export const reducer = (
  state: TIngredientsStore = initialState,
  action: TIngredientsGetSuccessAction
) => {
  switch (action.type) {
    case INGREDIENTS_GET_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
      };
    default:
      return state;
  }
};
