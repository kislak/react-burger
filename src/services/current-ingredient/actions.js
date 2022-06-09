export const SET_CURRENT = "SET_CURRENT";

export const setCurrentIngredient = (item) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: item,
  });
};
