import { reducer } from "./reducer";
import {
  setTopItemAction,
  addMiddleItemAction,
  deleteMiddleItemAction,
  insertBeforeAction,
  insertAfterAction,
  resetOrderConstructorAction,
} from "./actions";

describe("burger-constructor reducer", () => {
  const initialState = {
    topItem: null,
    midItems: [],
  };

  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("dispatches setTopItemAction", () => {
    expect(
      reducer(initialState, {
        type: setTopItemAction,
        payload: { test: "top" },
      })
    ).toEqual({
      ...initialState,
      topItem: { test: "top" },
    });
  });

  it("dispatches addMiddleItemAction", () => {
    expect(
      reducer(initialState, {
        type: addMiddleItemAction,
        payload: { test: "mid" },
      })
    ).toEqual({
      ...initialState,
      midItems: [{ test: "mid" }],
    });
  });

  it("dispatches deleteMiddleItemAction", () => {
    const initialState = {
      topItem: null,
      midItems: [{ test: "mid" }],
    };

    expect(
      reducer(initialState, {
        type: deleteMiddleItemAction,
        payload: { test: "mid" },
      })
    ).toEqual({
      ...initialState,
      midItems: [],
    });
  });

  it("dispatches insertBeforeAction", () => {
    const initialState = {
      topItem: null,
      midItems: [{ uuid: "1" }, { uuid: "2" }, { uuid: "3" }],
    };

    expect(
      reducer(initialState, {
        type: insertBeforeAction,
        payload: { uuid: "3", insertBeforeUuid: "1" },
      })
    ).toEqual({
      ...initialState,
      midItems: [{ uuid: "3" }, { uuid: "1" }, { uuid: "2" }],
    });
  });

  it("dispatches insertAfterAction", () => {
    const initialState = {
      topItem: null,
      midItems: [{ uuid: "1" }, { uuid: "2" }, { uuid: "3" }],
    };

    expect(
      reducer(initialState, {
        type: insertAfterAction,
        payload: { uuid: "1", insertAfterUuid: "3" },
      })
    ).toEqual({
      ...initialState,
      midItems: [{ uuid: "2" }, { uuid: "3" }, { uuid: "1" }],
    });
  });

  it("dispatches resetOrderConstructorAction", () => {
    const initialState = {
      topItem: { uuid: "10" },
      midItems: [{ uuid: "1" }, { uuid: "2" }, { uuid: "3" }],
    };

    expect(
      reducer(initialState, {
        type: resetOrderConstructorAction,
      })
    ).toEqual({
      topItem: null,
      midItems: [],
    });
  });
});
