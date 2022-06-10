import React, { useEffect, useState } from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  allItemsSelector,
  midItemsSelector,
  topItemSelector,
} from "../../services/burger-constructor/selectors";
import { submitOrder } from "../../services/order/actions";
import { useDrop } from "react-dnd";
import {
  setTopItem,
  addMiddleItem,
} from "../../services/burger-constructor/actions";
import BurgerConstructorItem from "./burger-constructor-item/burger-constructor-item";

function BurgerConstructor() {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const topItem = useSelector(topItemSelector);
  const midItems = useSelector(midItemsSelector);
  const allItems = useSelector(allItemsSelector);

  useEffect(() => {
    const newTotal = allItems.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
    setTotal(newTotal);
  }, [allItems]);

  const [, dropRef] = useDrop({
    accept: "addIngredient",
    drop(item) {
      if (item.type === "bun") {
        dispatch(setTopItem(item));
      } else {
        dispatch(addMiddleItem(item));
      }
    },
  });

  console.log(topItem);

  return (
    <section className={`${styles.constructor} mt-15`} ref={dropRef}>
      <div className={`${styles.constructor} ml-6`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${topItem.name}(верх)`}
          price={topItem.price}
          thumbnail={topItem.image_mobile}
        />
      </div>
      {!topItem.name && (
        <div
          className={`${styles.constructor} m-15 text text_type_main-medium`}
        >
          Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа
        </div>
      )}

      <ul className={`${styles.middle} custom-scroll`}>
        {midItems.map((midItem, index) => {
          return (
            <BurgerConstructorItem
              midItem={midItem}
              index={index}
              key={midItem.uuid}
            />
          );
        })}
      </ul>
      <div className={`${styles.constructor} ml-6`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${topItem.name}(низ)`}
          price={topItem.price}
          thumbnail={topItem.image_mobile}
        />
      </div>

      <div className={styles.total}>
        <div className="m-10">
          <span className="text text_type_digits-medium m-2">{total}</span>
          <CurrencyIcon type="primary" />
        </div>
        {topItem.name && (
          <Button
            type="primary"
            size="medium"
            onClick={() => {
              dispatch(submitOrder(topItem, midItems));
            }}
          >
            Оформить заказ
          </Button>
        )}
      </div>
    </section>
  );
}

export default BurgerConstructor;
