import { reducer } from './reducer'
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "./actions";


describe('all-orders reducer', () => {
  let initialState = {
    "connectionError": "",
    "orders": [],
    "status": "OFFLINE",
    "total": 0,
    "totalToday": 0
  }

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState)
  })

  it('dispatches wsConnecting', () => {
    expect(reducer(initialState, wsConnecting)).toEqual(
      {
        "connectionError": "",
        "orders": [],
        "status": "CONNECTING...",
        "total": 0,
        "totalToday": 0
      })
  })

  it('dispatches wsOpen', () => {
    expect(reducer(initialState, wsOpen)).toEqual(
      {
        "connectionError": "",
        "orders": [],
        "status": "ONLINE",
        "total": 0,
        "totalToday": 0
      })
  })

  it('dispatches wsOpen', () => {
    expect(reducer(initialState, wsOpen)).toEqual(
      {
        "connectionError": "",
        "orders": [],
        "status": "ONLINE",
        "total": 0,
        "totalToday": 0
      })
  })


  
  it('dispatches wsClose', () => {
    expect(reducer(initialState, wsClose)).toEqual(
      {
        "connectionError": "",
        "orders": [],
        "status": "OFFLINE",
        "total": 0,
        "totalToday": 0
      })
  })

  it('dispatches wsError', () => {
    expect(reducer(initialState, wsError("oops"))).toEqual({
      connectionError: "oops",
      orders: [],
      status: "OFFLINE",
      total: 0,
      totalToday: 0,
    });
  })

  it('dispatches wsMessage', () => {
    let playload = {
      orders: [{test: true}],
      total: 100,
      totalToday: 1
    };

    expect(reducer(initialState, wsMessage(playload))).toEqual({
      connectionError: "",
      orders: [{test: true}],
      status: "OFFLINE",
      total: 100,
      totalToday: 1,
    });
  })
})
