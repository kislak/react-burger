import {
  setTopItemAction,
  addMiddleItemAction,
  deleteMiddleItemAction,
  insertBeforeAction,
  insertAfterAction,
  resetOrderConstructorAction,
} from "./actions";

import { TBurgerItem } from "../../types/burger-item";
import { createReducer } from "@reduxjs/toolkit";

export type TBurgerConstructorStore = {
  topItem: TBurgerItem | null;
  midItems: Array<TBurgerItem>;
};

const initialState: TBurgerConstructorStore = {
  topItem: null,
  midItems: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setTopItemAction, (state, action) => {
      state.topItem = action.payload;
    })
    .addCase(addMiddleItemAction, (state, action) => {
      state.midItems = [...state.midItems, action.payload];
    })
    .addCase(deleteMiddleItemAction, (state, action) => {
      state.midItems.splice(action.payload, 1);
    })
    .addCase(insertBeforeAction, (state, action) => {
      const index = state.midItems.findIndex(
        (item: TBurgerItem) => item.uuid === action.payload.uuid
      );
      const indexToInsertBefore = state.midItems.findIndex(
        (item: TBurgerItem) => item.uuid === action.payload.insertBeforeUuid
      );
      const itemToInsertBefore = state.midItems.splice(index, 1)[0];
      state.midItems.splice(indexToInsertBefore, 0, itemToInsertBefore);
    })
    .addCase(insertAfterAction, (state, action) => {
      const currentIndex = state.midItems.findIndex(
        (item: TBurgerItem) => item.uuid === action.payload.uuid
      );
      const indexToInsertAfter = state.midItems.findIndex(
        (item: TBurgerItem) => item.uuid === action.payload.insertAfterUuid
      );
      const itemToInsertAfter = state.midItems.splice(currentIndex, 1)[0];
      state.midItems.splice(indexToInsertAfter, 0, itemToInsertAfter);
    })
    .addCase(resetOrderConstructorAction, (state) => {
      state.topItem = null;
      state.midItems = [];
    });
});
