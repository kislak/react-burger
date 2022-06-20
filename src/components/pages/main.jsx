import React, { useEffect, useState } from "react";
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
import { openOrderDetailsAction } from "../../services/order/actions";
import { orderDetailsOpenSelector } from "../../services/order/selectors";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector(ingredientsSelector);
  const currentIngredient = useSelector(currentIngredientSelector);
  const isOrderDetailsOpen = useSelector(orderDetailsOpenSelector);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
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
          dispatch(openOrderDetailsAction(false));
        }}
      >
        <OrderDetails />
      </Modal>
    </>
  );
}

export default Main;
