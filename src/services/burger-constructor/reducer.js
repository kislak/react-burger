import {
  SET_TOP_ITEM,
  ADD_MIDDLE_ITEM,
  DELETE_MIDDLE_ITEM,
  INSERT_BEFORE,
  INSERT_AFTER,
} from "./actions";

const initialState = {
  topItem: {
    name: "",
    price: 0,
    image_mobile: "",
  },
  midItems: [],
};

export const reducer = (state = initialState, action) => {
  const midItems = state.midItems;

  switch (action.type) {
    case SET_TOP_ITEM:
      return {
        ...state,
        topItem: action.payload,
      };
    case ADD_MIDDLE_ITEM:
      return {
        ...state,
        midItems: [action.payload, ...state.midItems],
      };
    case DELETE_MIDDLE_ITEM:
      midItems.splice(action.payload, 1);
      return {
        ...state,
        midItems: midItems,
      };
    case INSERT_BEFORE:
      const index = action.payload.index;
      const before = action.payload.beforeIndex;
      if (index + 1 > before) {
        midItems.splice(index, 1);
        midItems.splice(before, 0, action.payload.item);
        return {
          ...state,
          midItems: midItems,
        };
      }
      return state;
    case INSERT_AFTER:
      const currentIndex = action.payload.index;
      const after = action.payload.afterIndex;
      if (currentIndex - 1 < after) {
        midItems.splice(after + 1, 0, action.payload.item);
        midItems.splice(currentIndex, 1);
        return {
          ...state,
          midItems: midItems,
        };
      }
      return state;
    default:
      return state;
  }
};
