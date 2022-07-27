import {
  SUBMIT_ORDER,
  OPEN_ORDER_DETAILS,
  SHOW_LOADER,
  TOrderActions,
} from "./actions";

export type TOrderStore = {
  orderNumber: string | null;
  orderDetailsOpen: boolean;
  showLoader: boolean;
};

const initialState = {
  orderNumber: null,
  orderDetailsOpen: false,
  showLoader: false,
};

export const reducer = (
  state: TOrderStore = initialState,
  action: TOrderActions
) => {
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
