import React from 'react';
import './app.css';

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

import data from "../../utils/data"

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
