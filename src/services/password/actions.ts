import api from "../../utils/api";
import { addErrorAction } from "../_middleware/error-handler";
import { AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export const sendPasswordResetEmail =
  (
    email: string,
    callback: () => void
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
    api
      .passwordReset(email)
      .then((response) => {
        callback();
      })
      .catch((error) => {
        dispatch(addErrorAction(error));
      });
  };

export const passwordResetSubmit =
  (
    email: string,
    token: string,
    callback: () => void
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: Dispatch) => {
    api
      .passwordResetSubmit(email, token)
      .then((response) => {
        callback();
      })
      .catch((error) => {
        dispatch(addErrorAction(error));
      });
  };
