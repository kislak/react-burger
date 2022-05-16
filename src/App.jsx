import React from 'react';
import './App.css';
import AppHeader from "../../burger/src/components/app-header/app-header";
import BurgerConstructor from "../../burger/src/components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../burger/src/components/burger-ingredients/burger-ingredients";


function App() {
  return (
    <div className="App">
      <AppHeader />
      <BurgerConstructor />
      <BurgerIngredients />
    </div>
  );
}

export default App;
