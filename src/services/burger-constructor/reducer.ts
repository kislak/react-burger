import {
  SET_TOP_ITEM,
  ADD_MIDDLE_ITEM,
  DELETE_MIDDLE_ITEM,
  INSERT_BEFORE,
  INSERT_AFTER,
  RESET_CONSTRUCTOR,
  TBurgerConstructorActions,
} from "./actions";

import { TBurgerItem } from "../../types/burger-item";

export type TBurgerConstructorStore = {
  topItem: TBurgerItem | null;
  midItems: Array<TBurgerItem>;
};

const initialState = {
  topItem: null,
  midItems: [],
};

// import { createReducer } from "@reduxjs/toolkit"
// export const reducer = createReducer(initialState, (builder) => {
//   build.addCase(SET_TOP_ITEM, (state, action) => {
//     state.topItem: action.payload
//   })
// }

export const reducer = (
  state: TBurgerConstructorStore = initialState,
  action: TBurgerConstructorActions
) => {
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
      const index = midItems.findIndex(
        (item: TBurgerItem) => item.uuid === action.payload.uuid
      );
      const indexToInsertBefore = midItems.findIndex(
        (item: TBurgerItem) => item.uuid === action.payload.insertBeforeUuid
      );

      const itemToInsertBefore = midItems.splice(index, 1)[0];
      midItems.splice(indexToInsertBefore, 0, itemToInsertBefore);

      return {
        ...state,
        midItems: midItems,
      };
    case INSERT_AFTER:
      const currentIndex = midItems.findIndex(
        (item: TBurgerItem) => item.uuid === action.payload.uuid
      );
      const indexToInsertAfter = midItems.findIndex(
        (item: TBurgerItem) => item.uuid === action.payload.insertAfterUuid
      );
      const itemToInsertAfter = midItems.splice(currentIndex, 1)[0];
      midItems.splice(indexToInsertAfter, 0, itemToInsertAfter);

      return {
        ...state,
        midItems: midItems,
      };
    case RESET_CONSTRUCTOR:
      return initialState;
    default:
      return state;
  }
};
