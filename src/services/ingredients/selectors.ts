import { TIngredientsStore } from "./reducer";

type TStore = {
  ingredientsStore: TIngredientsStore;
};

export const ingredientsSelector = (store: TStore) =>
  store.ingredientsStore.ingredients;
export const ingredientsBun = (store: TStore) =>
  store.ingredientsStore.ingredients.filter((i) => i.type === "bun");
export const ingredientsWithoutBun = (store: TStore) =>
  store.ingredientsStore.ingredients.filter((i) => i.type !== "bun");
export const ingredientsSauce = (store: TStore) =>
  store.ingredientsStore.ingredients.filter((i) => i.type === "sauce");
export const ingredientsMain = (store: TStore) =>
  store.ingredientsStore.ingredients.filter((i) => i.type === "main");
