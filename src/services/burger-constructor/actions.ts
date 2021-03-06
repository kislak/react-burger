import { v4 as uuidv4 } from "uuid";
import { TBurgerItem } from "../../prop-types/burger-item";
import { Dispatch } from "redux";

export const SET_TOP_ITEM = "SET_TOP_ITEM";
export const ADD_MIDDLE_ITEM = "ADD_MIDDLE_ITEM";
export const DELETE_MIDDLE_ITEM = "DELETE_MIDDLE_ITEM";
export const INSERT_BEFORE = "INSERT_BEFORE";
export const INSERT_AFTER = "INSERT_AFTER";
export const RESET_CONSTRUCTOR = "RESET_CONSTRUCTOR";

const setTopItemAction = (payload: TBurgerItem) => {
  return {
    type: SET_TOP_ITEM,
    payload: payload,
  };
};

const addMiddleItemAction = (playload: TBurgerItem) => {
  const midItem = Object.assign({}, playload);
  midItem.uuid = uuidv4();

  return {
    type: ADD_MIDDLE_ITEM,
    payload: midItem,
  };
};

const deleteMiddleItemAction = (payload: number) => {
  return {
    type: DELETE_MIDDLE_ITEM,
    payload: payload,
  };
};

const insertBeforeAction = (payload: {
  uuid: string;
  insertBeforeUuid: string;
}) => {
  return {
    type: INSERT_BEFORE,
    payload: payload,
  };
};

const insertAfterAction = (payload: {
  uuid: string;
  insertAfterUuid: string;
}) => {
  return {
    type: INSERT_AFTER,
    payload: payload,
  };
};

export const resetOrderConstructorAction = () => {
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
