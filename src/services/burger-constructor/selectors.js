export const midItemsSelector = store => store.burgerConstructorStore.midItems
export const topItemSelector = store => store.burgerConstructorStore.topItem
export const allItemsSelector = store => {
  const top = store.burgerConstructorStore.topItem
  const mid = store.burgerConstructorStore.midItems
  return [ top, top, ...mid ]
  // const initialValue = topItem ? topItem.price * 2 : 0;
  // const newTotal = midItems.reduce((acc, cur) => {return acc + cur.price;}, initialValue);
  // store.burgerConstructorStore.topItem
}
