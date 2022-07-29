import { TAllOrdersStore } from "./reducer";

type TStore = {
  allOrdersStore: TAllOrdersStore;
};

export const totalSelector = (store: TStore) => store.allOrdersStore.total;
export const totalTodaySelector = (store: TStore) =>
  store.allOrdersStore.totalToday;
export const ordersSelector = (store: TStore) => store.allOrdersStore.orders;