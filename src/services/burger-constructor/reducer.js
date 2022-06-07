import {SET_TOP_ITEM, ADD_MIDDLE_ITEM, DELETE_MIDDLE_ITEM} from "./actions";

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
    case DELETE_MIDDLE_ITEM:
      const midItems = state.midItems
      midItems.splice(action.payload, 1)

      return {
        ...state,
        midItems: midItems
      };
    default:
      return state
  }
}