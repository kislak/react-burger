export const accessTokenSelector = (store) => store.userStore.accessToken;
export const isLoggedIn = (store) => store.userStore.accessToken !== null;

export const userSelector = (store) => {
  return {
    name: store.userStore.name,
    email: store.userStore.email,
  };
};
