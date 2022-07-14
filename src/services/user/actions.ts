import api from "../../utils/api";
import { addErrorAction } from "../_middleware/errorHandler";
import {AnyAction, Dispatch} from "redux";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_ACCESS_TOKEN = "SET_USER_ACCESS_TOKEN";

const setUserEmailAction = (payload: any) => {
  return {
    type: SET_USER_EMAIL,
    payload: payload,
  };
};

const setUserNameAction = (payload: any) => {
  return {
    type: SET_USER_NAME,
    payload: payload,
  };
};

const setUserAccessTokenAction = (payload: any) => {
  return {
    type: SET_USER_ACCESS_TOKEN,
    payload: payload,
  };
};

export const createUser = (email: string, password: string, name: string, dispatch: Dispatch, callback: () => void) => {
    api
        .register(email, password, name)
        .then((response) => {
            dispatch(setUserEmailAction(response.user.email));
            dispatch(setUserNameAction(response.user.name));
            dispatch(setUserAccessTokenAction(response.accessToken));
            localStorage.setItem("refreshToken", response.refreshToken);
            callback();
        })
        .catch((error) => {
            dispatch(addErrorAction(error));
        });
}

export const loginUser = (email: string, password: string, dispatch: Dispatch, callback: () => void) => {
    api
        .login(email, password)
        .then((response) => {
            dispatch(setUserEmailAction(response.user.email));
            dispatch(setUserNameAction(response.user.name));
            dispatch(setUserAccessTokenAction(response.accessToken));
            localStorage.setItem("refreshToken", response.refreshToken);
            callback();
        })
        .catch((error) => {
            dispatch(addErrorAction(error));
        });
}

export const refreshToken = (dispatch: Dispatch) => {
  api
    .refreshToken()
    .then((response) => {
      dispatch(setUserAccessTokenAction(response.accessToken));
      localStorage.setItem("refreshToken", response.refreshToken);
    })
    .catch((error) => {
      localStorage.removeItem("refreshToken");
      dispatch(addErrorAction(error));
    });
};

export const logout = (token: string, dispatch: Dispatch, callback:  () => void) => {
  api
    .logout(token)
    .then((response) => {
      dispatch(setUserEmailAction(""));
      dispatch(setUserNameAction(""));
      dispatch(setUserAccessTokenAction(null));
      localStorage.removeItem("refreshToken");
      callback();
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
};

export const getUser = (token: string, dispatch: Dispatch) => {
  api
    .getUser(token)
    .then((response) => {
      dispatch(setUserEmailAction(response.user.email));
      dispatch(setUserNameAction(response.user.name));
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
};

export const updateUser = (token: string, email: string, name: string, dispatch: Dispatch) => {
  api
    .updateUser(token, email, name)
    .then((response) => {
      dispatch(setUserEmailAction(response.user.email));
      dispatch(setUserNameAction(response.user.name));
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
};
