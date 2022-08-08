import { v4 as uuidv4 } from "uuid";
import { TBurgerItem } from "../../types/burger-item";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { createAction } from "@reduxjs/toolkit";

type TInsertBeforePayload = {
  uuid: string;
  insertBeforeUuid: string;
};

type TInsertAfterPayload = {
  uuid: string;
  insertAfterUuid: string;
};

export const setTopItemAction = createAction<any, "SET_TOP_ITEM">(
  "SET_TOP_ITEM"
);
export const addMiddleItemAction = createAction<TBurgerItem, "ADD_MIDDLE_ITEM">(
  "ADD_MIDDLE_ITEM"
);
export const deleteMiddleItemAction = createAction<
  number,
  "DELETE_MIDDLE_ITEM"
>("DELETE_MIDDLE_ITEM");
export const insertBeforeAction = createAction<
  TInsertBeforePayload,
  "INSERT_BEFORE"
>("INSERT_BEFORE");
export const insertAfterAction = createAction<
  TInsertAfterPayload,
  "INSERT_AFTER"
>("INSERT_AFTER");
export const resetOrderConstructorAction = createAction("RESET_CONSTRUCTOR");

export const setTopItem =
  (item: TBurgerItem): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
    dispatch(setTopItemAction(item));
  };

export const addMiddleItem =
  (item: TBurgerItem): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
    const i = Object.assign({}, item);
    i.uuid = uuidv4();
    dispatch(addMiddleItemAction(i));
  };

export const deleteMiddleItem =
  (index: number): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
    dispatch(deleteMiddleItemAction(index));
  };

export const insertBefore =
  (
    uuid: string,
    insertBeforeUuid: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
    dispatch(
      insertBeforeAction({ uuid: uuid, insertBeforeUuid: insertBeforeUuid })
    );
  };
export const insertAfter =
  (
    uuid: string,
    insertAfterUuid: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
    dispatch(
      insertAfterAction({ uuid: uuid, insertAfterUuid: insertAfterUuid })
    );
  };
