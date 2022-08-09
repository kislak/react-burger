import React, { useEffect } from "react";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import IngredientDetails from "../components/modal/ingredient-details/ingredient-details";
import OrderDetails from "../components/modal/order-details/order-details";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

import Modal from "../components/modal/modal/modal";
import { ingredientsSelector } from "../services/ingredients/selectors";
import { currentIngredientSelector } from "../services/current-ingredient/selectors";
import { setCurrentIngredient } from "../services/current-ingredient/actions";
import { openOrderDetails } from "../services/order/actions";
import { orderDetailsOpenSelector } from "../services/order/selectors";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useHistory, useParams } from "react-router-dom";
import { TBurgerItem } from "../types/burger-item";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(ingredientsSelector);
  const currentIngredient = useAppSelector(currentIngredientSelector);
  const isOrderDetailsOpen = useAppSelector(orderDetailsOpenSelector);
  const history = useHistory();
  const items = useAppSelector(ingredientsSelector);
  const { id } = useParams() as {
    id: string;
  };

  const closeIngredient = () => {
    dispatch(
      setCurrentIngredient(null, () => {
        history.push("/");
      })
    );
  };

  useEffect(() => {
    if (id) {
      const item = items.find((x: TBurgerItem) => x._id === id);
      if (item) {
        dispatch(setCurrentIngredient(item, () => {}));
      }
    }
  }, [items, dispatch, id]);

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
        isOpen={isOrderDetailsOpen ? true : false}
        setClose={() => {
          dispatch(openOrderDetails(null, () => {}));
        }}
      >
        <OrderDetails />
      </Modal>
    </>
  );
};

export default Main;
