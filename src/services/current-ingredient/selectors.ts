import { TCurrentIngredientStore } from "./reducer";

type TStore = {
  currentIngredientStore: TCurrentIngredientStore;
};

export const currentIngredientSelector = (store: TStore) =>
  store.currentIngredientStore.currentIngredient;
