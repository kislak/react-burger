import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import OrderDetails from "../modal/order-details/order-details";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../modal/modal/modal";
import { getIngredients } from "../../services/ingredients/actions";
import { ingredientsSelector } from "../../services/ingredients/selectors";
import { currentIngredientSelector } from "../../services/current-ingredient/selectors";
import { setCurrentIngredient } from "../../services/current-ingredient/actions";
import {
  setTopItem,
  addMiddleItem,
} from "../../services/burger-constructor/actions";
import { openOrderDetails } from "../../services/order/actions";
import { orderDetailsOpenSelector } from "../../services/order/selectors";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(ingredientsSelector);
  const currentIngredient = useSelector(currentIngredientSelector);
  const isOrderDetailsOpen = useSelector(orderDetailsOpenSelector);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  useEffect(() => {
    data.length && initRandomBun();
  }, [data]);

  const initRandomBun = () => {
    const buns = data.filter((i) => i.type === "bun");
    const bun = buns[Math.floor(Math.random() * buns.length)];

    dispatch(setTopItem(bun));

    data
      .filter((i) => i.type !== "bun" && Math.random() > 0.8)
      .map((i) => {
        dispatch(addMiddleItem(i));
      });
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      {data && (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      )}

      <Modal
        id="modal"
        isOpen={currentIngredient ? true : false}
        setClose={() => {
          dispatch(setCurrentIngredient(null));
        }}
        title="Детали ингредиента"
      >
        <IngredientDetails />
      </Modal>

      <Modal
        id="modal"
        isOpen={isOrderDetailsOpen}
        setClose={() => {
          dispatch(openOrderDetails(false));
        }}
      >
        <OrderDetails />
      </Modal>
    </div>
  );
}

export default App;
