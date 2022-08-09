import { reducer } from "./reducer";
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "./actions";

describe("profile-orders reducer", () => {
  const initialState = {
    status: "OFFLINE",
    connectionError: "",
    orders: [],
  };

  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("dispatches wsConnecting", () => {
    expect(reducer(initialState, wsConnecting)).toEqual({
      ...initialState,
      status: "CONNECTING...",
    });
  });

  it("dispatches wsOpen", () => {
    expect(reducer(initialState, wsOpen)).toEqual({
      ...initialState,
      status: "ONLINE",
    });
  });

  it("dispatches wsClose", () => {
    expect(reducer(initialState, wsClose)).toEqual({
      ...initialState,
      status: "OFFLINE",
    });
  });

  it("dispatches wsError", () => {
    expect(reducer(initialState, wsError("oops"))).toEqual({
      ...initialState,
      connectionError: "oops",
    });
  });

  it("dispatches wsMessage", () => {
    const payload = {
      orders: [{ test: true }],
    };

    expect(reducer(initialState, wsMessage(payload))).toEqual({
      ...initialState,
      orders: [{ test: true }],
    });
  });
});
