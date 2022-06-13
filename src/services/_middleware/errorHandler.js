export const API_ERROR = "API_ERROR";

export function addErrorAction(payload) {
  return {
    type: API_ERROR,
    payload: payload,
  };
}

export const errorHandler = () => (store) => (next) => (action) => {
  if (action.type === API_ERROR) {
    const error = action.payload;
    console.log("api error:", error.message);
  }
  return next(action);
};
