import { reducer } from "./reducer";
import {
  SET_TOP_ITEM,
  ADD_MIDDLE_ITEM,
  DELETE_MIDDLE_ITEM,
  INSERT_BEFORE,
  INSERT_AFTER,
  RESET_CONSTRUCTOR,
} from "./actions";

describe("burger-constructor reducer", () => {
  const initialState = {
    topItem: null,
    midItems: [],
  };

  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("dispatches SET_TOP_ITEM", () => {
    expect(
      reducer(initialState, {
        type: SET_TOP_ITEM,
        payload: { test: "top" },
      })
    ).toEqual({
      ...initialState,
      topItem: { test: "top" },
    });
  });

  it("dispatches ADD_MIDDLE_ITEM", () => {
    expect(
      reducer(initialState, {
        type: ADD_MIDDLE_ITEM,
        payload: { test: "mid" },
      })
    ).toEqual({
      ...initialState,
      midItems: [{ test: "mid" }],
    });
  });

  it("dispatches DELETE_MIDDLE_ITEM", () => {
    const initialState = {
      topItem: null,
      midItems: [{ test: "mid" }],
    };

    expect(
      reducer(initialState, {
        type: DELETE_MIDDLE_ITEM,
        payload: { test: "mid" },
      })
    ).toEqual({
      ...initialState,
      midItems: [],
    });
  });

  it("dispatches INSERT_BEFORE", () => {
    const initialState = {
      topItem: null,
      midItems: [{ uuid: "1" }, { uuid: "2" }, { uuid: "3" }],
    };

    expect(
      reducer(initialState, {
        type: INSERT_BEFORE,
        payload: { uuid: "3", insertBeforeUuid: "1" },
      })
    ).toEqual({
      ...initialState,
      midItems: [{ uuid: "3" }, { uuid: "1" }, { uuid: "2" }],
    });
  });

  it("dispatches INSERT_AFTER", () => {
    const initialState = {
      topItem: null,
      midItems: [{ uuid: "1" }, { uuid: "2" }, { uuid: "3" }],
    };

    expect(
      reducer(initialState, {
        type: INSERT_AFTER,
        payload: { uuid: "1", insertAfterUuid: "3" },
      })
    ).toEqual({
      ...initialState,
      midItems: [{ uuid: "2" }, { uuid: "3" }, { uuid: "1" }],
    });
  });

  it("dispatches RESET_CONSTRUCTOR", () => {
    const initialState = {
      topItem: { uuid: "10" },
      midItems: [{ uuid: "1" }, { uuid: "2" }, { uuid: "3" }],
    };

    expect(
      reducer(initialState, {
        type: RESET_CONSTRUCTOR,
      })
    ).toEqual({
      topItem: null,
      midItems: [],
    });
  });
});
