export const accessTokenSelector = (store) => store.userStore.accessToken;

export const userSelector = (store) => {
  return {
    name: store.userStore.name,
    email: store.userStore.email,
  };
};
