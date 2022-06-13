import { SET_CURRENT } from "./actions";

const initialState = {
  currentIngredient: null,
};

export const reducer = (state = initialState, action) => {
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
