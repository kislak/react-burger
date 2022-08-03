import { reducer } from "./reducer";
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "./actions";

describe("profile-orders reducer", () => {
  let initialState = {
    status: "OFFLINE",
    connectionError: "",
    orders: [],
  };

  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("dispatches wsConnecting", () => {
    expect(reducer(initialState, wsConnecting)).toEqual({
      connectionError: "",
      orders: [],
      status: "CONNECTING...",
    });
  });

  it("dispatches wsOpen", () => {
    expect(reducer(initialState, wsOpen)).toEqual({
      connectionError: "",
      orders: [],
      status: "ONLINE",
    });
  });

  it("dispatches wsOpen", () => {
    expect(reducer(initialState, wsOpen)).toEqual({
      connectionError: "",
      orders: [],
      status: "ONLINE",
    });
  });

  it("dispatches wsClose", () => {
    expect(reducer(initialState, wsClose)).toEqual({
      connectionError: "",
      orders: [],
      status: "OFFLINE",
    });
  });

  it("dispatches wsError", () => {
    expect(reducer(initialState, wsError("oops"))).toEqual({
      connectionError: "oops",
      orders: [],
      status: "OFFLINE",
    });
  });

  it("dispatches wsMessage", () => {
    let playload = {
      orders: [{ test: true }],
    };

    expect(reducer(initialState, wsMessage(playload))).toEqual({
      connectionError: "",
      orders: [{ test: true }],
      status: "OFFLINE",
    });
  });
});
