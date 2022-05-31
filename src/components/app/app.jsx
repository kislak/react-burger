import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import OrderDetails from "../modal/order-details/order-details";
import api from "../../utils/api";
import Modal from "../modal/modal/modal";
import BurgerConstructorContext from "../../services/burger-constructor-context";

function App() {
  const [data, setData] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const [isOrderDetailsOpen, setOrderDetailsOpen] = useState(false);
  const [topItem, setTopItem] = useState({
    name: "",
    price: 0,
    image_mobile: "",
  });
  const [midItems, setMidItems] = useState([]);
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    api
      .getIngredients()
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    data.length && initRandomOrder();
  }, [data]);

  const initRandomOrder = () => {
    const bulki = data.filter((i) => i.type === "bun");
    const bulka = bulki[Math.floor(Math.random() * bulki.length)];
    const midItems = data.filter(
      (i) => i.type !== "bun" && Math.random() > 0.8
    );

    setTopItem(bulka);
    setMidItems(midItems);
  };

  const submitOrder = () => {
    const ingredients = [topItem._id, topItem._id].concat(
      midItems.map((i) => {
        return i._id;
      })
    );
    api
      .submitOrder(ingredients)
      .then((response) => {
        setOrderNumber(response.order.number);
        setOrderDetailsOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BurgerConstructorContext.Provider
      value={{
        topItem: topItem,
        setTopItem: setTopItem,
        midItems: midItems,
        setMidItems: setMidItems,
        orderNumber: orderNumber,
        submitOrder: submitOrder,
      }}
    >
      <div className={styles.app}>
        <AppHeader />
        {data && (
          <>
            <BurgerIngredients
              items={data}
              setCurrentIngredient={setCurrentIngredient}
            />
            <BurgerConstructor />
          </>
        )}

        <Modal
          id="modal"
          isOpen={currentIngredient ? true : false}
          setClose={() => {
            console.log(1)
            setCurrentIngredient(null)
          }}
          title="Детали ингредиента"
        >
          <IngredientDetails currentIngredient={currentIngredient} />
        </Modal>

        <Modal
          id="modal"
          isOpen={isOrderDetailsOpen}
          setClose={() => {
            console.log(2)
            setOrderDetailsOpen(false);
          }}
        >
          <OrderDetails />
        </Modal>
      </div>
    </BurgerConstructorContext.Provider>
  );
}

export default App;
