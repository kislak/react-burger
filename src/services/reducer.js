import {combineReducers} from "redux";
import { reducer as ingredientsReducer } from "./ingredients/reducer"
import { reducer as currentIngredientReducer } from "./current-ingredient/reducer"

const rootReducer = combineReducers({
  ingredientsStore: ingredientsReducer,
  currentIngredientStore: currentIngredientReducer
})

export default rootReducer;