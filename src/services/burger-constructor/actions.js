export const SET_TOP_ITEM = "SET_TOP_ITEM"
export const ADD_MIDDLE_ITEM = "ADD_MIDDLE_ITEM"

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
