import { reducer } from "./reducer";
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "./actions";

describe("all-orders reducer", () => {
  const initialState = {
    connectionError: "",
    orders: [],
    status: "OFFLINE",
    total: 0,
    totalToday: 0,
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
    const playload = {
      orders: [{ test: true }],
      total: 100,
      totalToday: 1,
    };

    expect(reducer(initialState, wsMessage(playload))).toEqual({
      ...initialState,
      orders: [{ test: true }],
      total: 100,
      totalToday: 1,
    });
  });
});
