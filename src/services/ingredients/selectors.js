export const ingredientsSelector = (store) =>
  store.ingredientsStore.ingredients;
export const ingredientsBun = (store) =>
  store.ingredientsStore.ingredients.filter((i) => i.type === "bun");
export const ingredientsWithoutBun = (store) =>
  store.ingredientsStore.ingredients.filter((i) => i.type !== "bun");
export const ingredientsSauce = (store) =>
  store.ingredientsStore.ingredients.filter((i) => i.type === "sauce");
export const ingredientsMain = (store) =>
  store.ingredientsStore.ingredients.filter((i) => i.type === "main");
