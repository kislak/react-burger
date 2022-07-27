import { TUserStore } from "./reducer";

type TStore = {
  userStore: TUserStore;
};

export const accessTokenSelector = (store: TStore) =>
  store.userStore.accessToken;
export const isLoggedIn = (store: TStore) =>
  store.userStore.accessToken !== null;

export const userSelector = (store: TStore) => {
  return {
    name: store.userStore.name,
    email: store.userStore.email,
  };
};
