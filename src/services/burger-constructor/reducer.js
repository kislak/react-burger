import {
  SET_TOP_ITEM,
  ADD_MIDDLE_ITEM,
  DELETE_MIDDLE_ITEM,
  INSERT_BEFORE,
  INSERT_AFTER,
} from "./actions";

import { v4 as uuidv4 } from 'uuid';

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
      const item = Object.assign({}, action.payload)
      item.uuid = uuidv4()
      return {
        ...state,
        midItems: [item, ...state.midItems],
      };
    case DELETE_MIDDLE_ITEM:
      midItems.splice(action.payload, 1);
      return {
        ...state,
        midItems: midItems,
      };
    case INSERT_BEFORE:
      const index = midItems.findIndex(item => item.uuid === action.payload.uuid)
      const indexToInsertBefore = midItems.findIndex(item => item.uuid === action.payload.insertBeforeUuid)

      const itemToInsertBefore = midItems.splice(index, 1)[0]
      midItems.splice(indexToInsertBefore, 0, itemToInsertBefore);

      return {
        ...state,
        midItems: midItems,
      };
    case INSERT_AFTER:
      const currentIndex = midItems.findIndex(item => item.uuid === action.payload.uuid)
      const indexToInsertAfter = midItems.findIndex(item => item.uuid === action.payload.insertAfterUuid)
      const itemToInsertAfter = midItems.splice(currentIndex, 1)[0]
      midItems.splice(indexToInsertAfter, 0, itemToInsertAfter);

      return {
        ...state,
        midItems: midItems,
      };
    default:
      return state;
  }
};
