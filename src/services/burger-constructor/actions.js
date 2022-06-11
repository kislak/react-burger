import {v4 as uuidv4} from "uuid";

export const SET_TOP_ITEM = "SET_TOP_ITEM";
export const ADD_MIDDLE_ITEM = "ADD_MIDDLE_ITEM";
export const DELETE_MIDDLE_ITEM = "DELETE_MIDDLE_ITEM";
export const INSERT_BEFORE = "INSERT_BEFORE";
export const INSERT_AFTER = "INSERT_AFTER";
export const RESET_CONSTRUCTOR = "RESET_CONSTRUCTOR";

const setTopItemAction = (payload) => {
  return {
    type: SET_TOP_ITEM,
    payload: payload,
  };
};

const addMiddleItemAction = (playload) => {
  const midItem = Object.assign({}, playload);
  midItem.uuid = uuidv4();

  return {
    type: ADD_MIDDLE_ITEM,
    payload: midItem,
  };
};

const deleteMiddleItemAction = (payload) => {
  return {
    type: DELETE_MIDDLE_ITEM,
    payload: payload,
  };
};

const insertBeforeAction = (payload) => {
  return {
    type: INSERT_BEFORE,
    payload: payload,
  };
};

const insertAfterAction = (payload) => {
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

export const setTopItem = (item) => (dispatch) => {
  dispatch(setTopItemAction(item));
};

export const addMiddleItem = (item) => (dispatch) => {
  dispatch(addMiddleItemAction(item));
};

export const deleteMiddleItem = (index) => (dispatch) => {
  dispatch(deleteMiddleItemAction(index));
};

export const insertBefore = (uuid, insertBeforeUuid) => (dispatch) => {
  dispatch(
    insertBeforeAction({ uuid: uuid, insertBeforeUuid: insertBeforeUuid })
  );
};
export const insertAfter = (uuid, insertAfterUuid) => (dispatch) => {
  dispatch(insertAfterAction({ uuid: uuid, insertAfterUuid: insertAfterUuid }));
};
