export const midItemsSelector = (store) =>
  store.burgerConstructorStore.midItems;
export const topItemSelector = (store) => store.burgerConstructorStore.topItem;
export const allItemsSelector = (store) => {
  const top = store.burgerConstructorStore.topItem;
  const mid = store.burgerConstructorStore.midItems;
  return [top, ...mid, top];
};
