export const SET_CURRENT = "SET_CURRENT";

const setCurrentAction = (payload) => {
  return {
    type: SET_CURRENT,
    payload: payload,
  };
};

export const setCurrentIngredient = (item) => (dispatch) => {
  dispatch(setCurrentAction(item));
};
