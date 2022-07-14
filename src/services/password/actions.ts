import api from "../../utils/api";
import { addErrorAction } from "../_middleware/errorHandler";
import { Dispatch } from "redux";

export const sendPasswordResetEmail = (
  email: string,
  dispatch: Dispatch,
  callback: () => void
) => {
  api
    .passwordReset(email)
    .then((response) => {
      callback();
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
};

export const passwordResetSubmit = (
  email: string,
  token: string,
  dispatch: Dispatch,
  callback: () => void
) => {
  api
    .passwordResetSubmit(email, token)
    .then((response) => {
      callback();
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
};
