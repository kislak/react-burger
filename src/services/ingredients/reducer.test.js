import { reducer } from "./reducer";
import { INGREDIENTS_GET_SUCCESS } from "./actions";

describe("ingredient reducer", () => {
  let initialState = {
    ingredients: [],
  };

  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("dispatches INGREDIENTS_GET_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: INGREDIENTS_GET_SUCCESS,
        payload: [{ uuid: "1" }, { uuid: "2" }],
      })
    ).toEqual({
      ingredients: [{ uuid: "1" }, { uuid: "2" }],
    });
  });
});
