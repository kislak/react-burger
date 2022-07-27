import { TOrderStore } from "./reducer";

type TStore = {
  orderStore: TOrderStore;
};

export const orderNumberSelector = (store: TStore) =>
  store.orderStore.orderNumber;
export const orderDetailsOpenSelector = (store: TStore) =>
  store.orderStore.orderDetailsOpen;
export const showLoader = (store: TStore) => store.orderStore.showLoader;
