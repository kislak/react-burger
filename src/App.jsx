import React from 'react';
import './App.css';
import AppHeader from "../../burger/src/components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";

function App() {
  return (
      <div className="app">
          <AppHeader />
          <BurgerIngredients/>
          <BurgerConstructor/>
      </div>
  );
}

export default App;
