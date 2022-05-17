import React from 'react';
import './App.css';
import AppHeader from "../../burger/src/components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";

import data from "./utils/data"

function App() {
  return (
      <div className="app">
          <AppHeader />
          <BurgerIngredients items={data} />
          <BurgerConstructor topItem={data[0]} midItems={data.slice(1, -1)} bottomItem={data[data.length - 1]} />
      </div>
  );
}

export default App;
