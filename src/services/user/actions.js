import api from "../../utils/api";
import { addErrorAction } from "../_middleware/errorHandler";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_PASSWORD = "SET_USER_PASSWORD";
export const SET_USER_NAME = "SET_USER_NAME";

const setUserEmailAction = (payload) => {
  return {
    type: SET_USER_EMAIL,
    payload: payload,
  };
};

export const setUserPassword = (payload) => {
  return {
    type: SET_USER_PASSWORD,
    payload: payload,
  };
};

const setUserNameAction = (payload) => {
  return {
    type: SET_USER_NAME,
    payload: payload,
  };
};

export const createUser = (email, password, name) => (dispatch) => {
  api
    .register(email, password, name)
    .then((response) => {
      console.log(response);
      dispatch(setUserEmailAction(email));
      dispatch(setUserPassword(password));
      dispatch(setUserNameAction(name));
    })
    .catch((error) => {
      // dispatch(showLoaderAction(false));
      dispatch(addErrorAction(error));
    });
};
