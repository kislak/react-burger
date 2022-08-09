import api from "../../utils/api";
import { addErrorAction } from "../_middleware/error-handler";
import { AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_ACCESS_TOKEN = "SET_USER_ACCESS_TOKEN";

type TSetUserEmailAction = {
  type: typeof SET_USER_EMAIL;
  payload: string;
};

type TSetUserNameAction = {
  type: typeof SET_USER_NAME;
  payload: string;
};

type TSetUserAccessTokenAction = {
  type: typeof SET_USER_ACCESS_TOKEN;
  payload: string | null;
};

export type TUserActions =
  | TSetUserEmailAction
  | TSetUserNameAction
  | TSetUserAccessTokenAction;

const setUserEmailAction = (payload: string) => {
  return {
    type: SET_USER_EMAIL,
    payload: payload,
  };
};

const setUserNameAction = (payload: string) => {
  return {
    type: SET_USER_NAME,
    payload: payload,
  };
};

const setUserAccessTokenAction = (payload: string | null) => {
  return {
    type: SET_USER_ACCESS_TOKEN,
    payload: payload,
  };
};

export const createUser =
  (
    email: string,
    password: string,
    name: string,
    callback: () => void
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
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
  };

export const loginUser =
  (
    email: string,
    password: string,
    callback: () => void
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
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
  };

export const refreshToken =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
    if (!localStorage.hasOwnProperty("refreshToken")) {
      return;
    }
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

export const logout =
  (
    token: string,
    callback: () => void
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
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

export const getUser =
  (token: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
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

export const updateUser =
  (
    token: string,
    email: string,
    name: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
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
