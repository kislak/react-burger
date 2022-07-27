import { combineReducers } from "redux";
import { reducer as ingredientsReducer } from "./ingredients/reducer";
import { reducer as currentIngredientReducer } from "./current-ingredient/reducer";
import { reducer as burgerConstructorReducer } from "./burger-constructor/reducer";
import { reducer as orderReducer } from "./order/reducer";
import { reducer as userReducer } from "./user/reducer";

const rootReducer = combineReducers({
  ingredientsStore: ingredientsReducer,
  currentIngredientStore: currentIngredientReducer,
  burgerConstructorStore: burgerConstructorReducer,
  orderStore: orderReducer,
  userStore: userReducer,
});

export default rootReducer;
