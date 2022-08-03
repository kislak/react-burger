import { reducer } from "./reducer";
import { SUBMIT_ORDER, OPEN_ORDER_DETAILS, SHOW_LOADER } from "./actions";

describe("order reducer", () => {
  let initialState = {
    orderNumber: null,
    orderDetailsOpen: false,
    showLoader: false,
  };

  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("dispatches SUBMIT_ORDER", () => {
    expect(
      reducer(initialState, {
        type: SUBMIT_ORDER,
        payload: 1,
      })
    ).toEqual({
      orderNumber: 1,
      orderDetailsOpen: false,
      showLoader: false,
    });
  });

  it("dispatches OPEN_ORDER_DETAILS", () => {
    expect(
      reducer(initialState, {
        type: OPEN_ORDER_DETAILS,
        payload: true,
      })
    ).toEqual({
      orderNumber: null,
      orderDetailsOpen: true,
      showLoader: false,
    });
  });

  it("dispatches SHOW_LOADER", () => {
    expect(
      reducer(initialState, {
        type: SHOW_LOADER,
        payload: true,
      })
    ).toEqual({
      orderNumber: null,
      orderDetailsOpen: false,
      showLoader: true,
    });
  });
});
