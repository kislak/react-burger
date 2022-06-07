import {INGREDIENTS_GET_SUCCESS} from "./actions";

const initialState = {
  ingredients: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS_GET_SUCCESS:
      return {
        ...state,
        ingredients: action.payload
      };
    default:
      return state
  }
}