import {SET_TOP_ITEM, ADD_MIDDLE_ITEM} from "./actions";

const initialState = {
  topItem: {
    name: "",
    price: 0,
    image_mobile: "",
  },
  midItems: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_ITEM:
      return {
        ...state,
        topItem: action.payload
      };
    case ADD_MIDDLE_ITEM:
      return {
        ...state,
        midItems: [...state.midItems, action.payload]
      };
    default:
      return state
  }
}