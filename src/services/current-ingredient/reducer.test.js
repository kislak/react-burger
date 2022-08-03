import { reducer } from "./reducer";
import { SET_CURRENT } from "./actions";

describe("current-ingredient reducer", () => {
  let initialState = {
    currentIngredient: null,
  };

  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("dispatches SET_CURRENT", () => {
    expect(
      reducer(initialState, {
        type: SET_CURRENT,
        payload: { uuid: "1" },
      })
    ).toEqual({
      currentIngredient: { uuid: "1" },
    });
  });
});
