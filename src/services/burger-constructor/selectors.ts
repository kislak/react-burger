import { TBurgerItem } from "../../types/burger-item";
import { TBurgerConstructorStore } from "./reducer";

type TStore = {
  burgerConstructorStore: TBurgerConstructorStore;
};

export const midItemsSelector = (store: TStore): Array<TBurgerItem> =>
  store.burgerConstructorStore.midItems;
export const topItemSelector = (store: TStore) =>
  store.burgerConstructorStore.topItem;
export const allItemsSelector = (store: TStore) => {
  const top = store.burgerConstructorStore.topItem;
  const mid = store.burgerConstructorStore.midItems;
  if (!top) {
    return mid;
  }
  return [top, ...mid, top];
};
