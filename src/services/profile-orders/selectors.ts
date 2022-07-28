import {TProfileOrdersStore} from "./reducer";

type TStore = {
  profileOrdersStore: TProfileOrdersStore;
};

export const profileOrdersSelector = (store: TStore) =>
    store.profileOrdersStore.orders;
