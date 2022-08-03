import { reducer } from "./reducer";
import {
  SET_USER_NAME,
  SET_USER_EMAIL,
  SET_USER_ACCESS_TOKEN,
} from "./actions";

describe("user reducer", () => {
  let initialState = {
    name: "",
    email: "",
    accessToken: null,
  };

  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("dispatches SET_USER_NAME", () => {
    expect(
      reducer(initialState, {
        type: SET_USER_NAME,
        payload: "name1",
      })
    ).toEqual({
      name: "name1",
      email: "",
      accessToken: null,
    });
  });

  it("dispatches SET_USER_EMAIL", () => {
    expect(
      reducer(initialState, {
        type: SET_USER_EMAIL,
        payload: "exp@yandex.ru",
      })
    ).toEqual({
      name: "",
      email: "exp@yandex.ru",
      accessToken: null,
    });
  });

  it("dispatches SET_USER_ACCESS_TOKEN", () => {
    expect(
      reducer(initialState, {
        type: SET_USER_ACCESS_TOKEN,
        payload: "token1",
      })
    ).toEqual({
      name: "",
      email: "",
      accessToken: "token1",
    });
  });
});
