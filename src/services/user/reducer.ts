import {
  SET_USER_NAME,
  SET_USER_EMAIL,
  SET_USER_ACCESS_TOKEN,
  TUserActions,
} from "./actions";

export type TUserStore = {
  name: string;
  email: string;
  accessToken: string | null;
};

const initialState = {
  name: "",
  email: "",
  accessToken: null,
};

export const reducer = (
  state: TUserStore = initialState,
  action: TUserActions
) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_USER_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    default:
      return state;
  }
};
