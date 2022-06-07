import {combineReducers} from "redux";
import { reducer as ingredientsReducer } from "./ingredients/reducer"
import { reducer as currentIngredientReducer } from "./current-ingredient/reducer"
import { reducer as burgerConstructorReducer } from "./burger-constructor/reducer"
import { reducer as orderReducer } from "./order/reducer"

const rootReducer = combineReducers({
  ingredientsStore: ingredientsReducer,
  currentIngredientStore: currentIngredientReducer,
  burgerConstructorStore: burgerConstructorReducer,
  orderStore: orderReducer
})

export default rootReducer;