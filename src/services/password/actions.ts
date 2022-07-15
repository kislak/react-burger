import api from "../../utils/api";
import { addErrorAction } from "../_middleware/errorHandler";
import { Dispatch } from "redux";

export const sendPasswordResetEmail =
  (email: string, callback: () => void): any =>
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
  (email: string, token: string, callback: () => void): any =>
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
