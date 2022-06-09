export const SET_TOP_ITEM = "SET_TOP_ITEM"
export const ADD_MIDDLE_ITEM = "ADD_MIDDLE_ITEM"
export const DELETE_MIDDLE_ITEM = "DELETE_MIDDLE_ITEM"
export const INSERT_BEFORE = "INSERT_BEFORE"
export const INSERT_AFTER = "INSERT_AFTER"

export const setTopItem = (item) => (dispatch) => {
  dispatch({
    type: SET_TOP_ITEM,
    payload: item
  })
}

export const addMiddleItem = (item) => (dispatch) => {
  dispatch({
    type: ADD_MIDDLE_ITEM,
    payload: item
  })
}

export const deleteMiddleItem = (index) => (dispatch) => {
  dispatch({
    type: DELETE_MIDDLE_ITEM,
    payload: index
  })
}

export const insertBefore = (item, index, beforeIndex) => (dispatch) => {
  dispatch({
    type: INSERT_BEFORE,
    payload: {item: item, index: index, beforeIndex: beforeIndex}
  })
}
export const insertAfter = (item, index, afterIndex) => (dispatch) => {
  dispatch({
    type: INSERT_AFTER,
    payload: {item: item, index: index, afterIndex: afterIndex}
  })
}