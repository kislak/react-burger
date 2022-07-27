import { v4 as uuidv4 } from "uuid";
import { TBurgerItem } from "../../prop-types/burger-item";
import { Dispatch } from "redux";

export const SET_TOP_ITEM = "SET_TOP_ITEM";
export const ADD_MIDDLE_ITEM = "ADD_MIDDLE_ITEM";
export const DELETE_MIDDLE_ITEM = "DELETE_MIDDLE_ITEM";
export const INSERT_BEFORE = "INSERT_BEFORE";
export const INSERT_AFTER = "INSERT_AFTER";
export const RESET_CONSTRUCTOR = "RESET_CONSTRUCTOR";

type TSetTopItemAction = {
  type: typeof SET_TOP_ITEM;
  payload: TBurgerItem;
};

type TAddMiddleItemAction = {
  type: typeof ADD_MIDDLE_ITEM;
  payload: TBurgerItem;
};

type TDeleteMiddleItemAction = {
  type: typeof DELETE_MIDDLE_ITEM;
  payload: number;
};

type TInsertBeforePayload = {
  uuid: string;
  insertBeforeUuid: string;
};

type TInsertBeforeAction = {
  type: typeof INSERT_BEFORE;
  payload: TInsertBeforePayload;
};

type TInsertAfterPayload = {
  uuid: string;
  insertAfterUuid: string;
};

type TInsertAfterAction = {
  type: typeof INSERT_AFTER;
  payload: TInsertAfterPayload;
};

type TResetOrderConstructorAction = {
  type: typeof RESET_CONSTRUCTOR;
};

export type TBurgerConstructorActions =
  | TSetTopItemAction
  | TAddMiddleItemAction
  | TDeleteMiddleItemAction
  | TInsertBeforeAction
  | TInsertAfterAction
  | TResetOrderConstructorAction;

// import { createAction } from "@reduxjs/toolkit";
// const  setTopItemAction = createAction<TBurgerItem, 'SET_TOP_ITEM'>('SET_TOP_ITEM')
const setTopItemAction = (payload: TBurgerItem): TSetTopItemAction => {
  return {
    type: SET_TOP_ITEM,
    payload: payload,
  };
};

const addMiddleItemAction = (playload: TBurgerItem): TAddMiddleItemAction => {
  const midItem = Object.assign({}, playload);
  midItem.uuid = uuidv4();

  return {
    type: ADD_MIDDLE_ITEM,
    payload: midItem,
  };
};

const deleteMiddleItemAction = (payload: number): TDeleteMiddleItemAction => {
  return {
    type: DELETE_MIDDLE_ITEM,
    payload: payload,
  };
};

const insertBeforeAction = (
  payload: TInsertBeforePayload
): TInsertBeforeAction => {
  return {
    type: INSERT_BEFORE,
    payload: payload,
  };
};

const insertAfterAction = (
  payload: TInsertAfterPayload
): TInsertAfterAction => {
  return {
    type: INSERT_AFTER,
    payload: payload,
  };
};

export const resetOrderConstructorAction = (): TResetOrderConstructorAction => {
  return {
    type: RESET_CONSTRUCTOR,
  };
};

export const setTopItem =
  (item: TBurgerItem): any =>
  (dispatch: Dispatch) => {
    dispatch(setTopItemAction(item));
  };

export const addMiddleItem =
  (item: TBurgerItem): any =>
  (dispatch: Dispatch) => {
    dispatch(addMiddleItemAction(item));
  };

export const deleteMiddleItem =
  (index: number): any =>
  (dispatch: Dispatch) => {
    dispatch(deleteMiddleItemAction(index));
  };

export const insertBefore =
  (uuid: string, insertBeforeUuid: string): any =>
  (dispatch: Dispatch) => {
    dispatch(
      insertBeforeAction({ uuid: uuid, insertBeforeUuid: insertBeforeUuid })
    );
  };
export const insertAfter =
  (uuid: string, insertAfterUuid: string): any =>
  (dispatch: Dispatch) => {
    dispatch(
      insertAfterAction({ uuid: uuid, insertAfterUuid: insertAfterUuid })
    );
  };
