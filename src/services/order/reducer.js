import { SUBMIT_ORDER, OPEN_ORDER_DETAILS, SHOW_LOADER } from "./actions";

const initialState = {
  orderNumber: null,
  orderDetailsOpen: false,
  showLoader: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ORDER:
      return {
        ...state,
        orderNumber: action.payload,
      };
    case OPEN_ORDER_DETAILS:
      return {
        ...state,
        orderDetailsOpen: action.payload,
      };
    case SHOW_LOADER:
      return {
        ...state,
        showLoader: action.payload,
      };
    default:
      return state;
  }
};
