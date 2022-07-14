import React, { useEffect } from "react";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import IngredientDetails from "../components/modal/ingredient-details/ingredient-details";
import OrderDetails from "../components/modal/order-details/order-details";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../components/modal/modal/modal";
import { getIngredients } from "../services/ingredients/actions";
import { ingredientsSelector } from "../services/ingredients/selectors";
import { currentIngredientSelector } from "../services/current-ingredient/selectors";
import { setCurrentIngredient } from "../services/current-ingredient/actions";
import { openOrderDetailsAction } from "../services/order/actions";
import { orderDetailsOpenSelector } from "../services/order/selectors";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useHistory, useParams } from "react-router-dom";
import { TBurgerItem } from "../prop-types/burger-item";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector(ingredientsSelector);
  const currentIngredient = useSelector(currentIngredientSelector);
  const isOrderDetailsOpen = useSelector(orderDetailsOpenSelector);
  const history = useHistory();
  const items = useSelector(ingredientsSelector);
  const { id } = useParams() as {
    id: string;
  };

  const closeIngredient = () => {
    setCurrentIngredient(null, dispatch, () => {
      history.push("/");
    });
  };

  useEffect(() => {
    getIngredients(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      const item = items.find((x: TBurgerItem) => x._id === id);
      setCurrentIngredient(item, dispatch, () => {});
    }
  }, [items]);

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
          closeIngredient();
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
