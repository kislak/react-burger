import api from "../../utils/api";
import { addErrorAction } from "../_middleware/errorHandler";

export const sendPasswordResetEmail = (email, successHandler) => (dispatch) => {
  api
    .passwordReset(email)
    .then((response) => {
      console.log(response);
      successHandler();
    })
    .catch((error) => {
      dispatch(addErrorAction(error));
    });
};

export const passwordResetSubmit =
  (email, token, successHandler) => (dispatch) => {
    api
      .passwordResetSubmit(email, token)
      .then((response) => {
        console.log(response);
        successHandler();
      })
      .catch((error) => {
        dispatch(addErrorAction(error));
      });
  };
