import api from "../../utils/api";
import { addErrorAction } from "../_middleware/errorHandler";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_ACCESS_TOKEN = "SET_USER_ACCESS_TOKEN";

const setUserEmailAction = (payload) => {
  return {
    type: SET_USER_EMAIL,
    payload: payload,
  };
};

const setUserNameAction = (payload) => {
  return {
    type: SET_USER_NAME,
    payload: payload,
  };
};

const setUserAccessTokenAction = (payload) => {
  return {
    type: SET_USER_ACCESS_TOKEN,
    payload: payload,
  };
};

export const createUser = (email, password, name) => (dispatch) => {
  api
    .register(email, password, name)
    .then((response) => {
      console.log(response);
      dispatch(setUserEmailAction(response.user.email));
      dispatch(setUserNameAction(response.user.name));
      dispatch(setUserAccessTokenAction(response.accessToken));
      localStorage.setItem('refreshToken', response.refreshToken);
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
};

export const loginUser = (email, password, successHandler) => (dispatch) => {
  api
    .login(email, password)
    .then((response) => {
      console.log(response);
      dispatch(setUserEmailAction(response.user.email));
      dispatch(setUserNameAction(response.user.name));
      dispatch(setUserAccessTokenAction(response.accessToken));
      localStorage.setItem('refreshToken', response.refreshToken);
      successHandler()
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
};

export const refreshToken = () => (dispatch) => {
  api
    .refreshToken()
    .then((response) => {
      dispatch(setUserAccessTokenAction(response.accessToken));
      localStorage.setItem('refreshToken', response.refreshToken);
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
}

export const logout = () => (dispatch) => {
  api
    .logout()
    .then((response) => {
      console.log(response);
      dispatch(setUserEmailAction(''));
      dispatch(setUserNameAction(''));
      dispatch(setUserAccessTokenAction(null));
      localStorage.removeItem('refreshToken');
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
}

export const getUser = (token) => (dispatch) => {
  api
    .getUser(token)
    .then((response) => {
      dispatch(setUserEmailAction(response.user.email));
      dispatch(setUserNameAction(response.user.name));
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
}
