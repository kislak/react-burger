import React, { useEffect, useState } from "react";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";
import {useSelector, useDispatch} from "react-redux";
import {allItemsSelector, midItemsSelector, topItemSelector} from "../../services/burger-constructor/selectors";
import {submitOrder} from "../../services/order/actions";

function BurgerConstructor() {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch()
  const topItem = useSelector(topItemSelector)
  const midItems = useSelector(midItemsSelector)
  const allItems = useSelector(allItemsSelector)

  const clickHandler = () => { dispatch(submitOrder(topItem, midItems)) }

  useEffect(() => {
    // const initialValue = topItem ? topItem.price * 2 : 0;
    // const newTotal = midItems.reduce((acc, cur) => {return acc + cur.price;}, initialValue);
    const newTotal =  allItems.reduce((acc, cur) => {return acc + cur.price;}, 0);
    setTotal(newTotal);
  }, [topItem, midItems]);

  return (
    <section className={`${styles.constructor} mt-15`}>
      <div className={`${styles.constructor} ml-6`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${topItem.name}(верх)`}
          price={topItem.price}
          thumbnail={topItem.image_mobile}
        />
      </div>

      <ul className={`${styles.middle} custom-scroll`}>
        {midItems.map((midItem) => {
          return (
            <li className={styles.item} key={`mid-item-${Math.random()}`}>
              <DragIcon />
              <ConstructorElement
                text={midItem.name}
                price={midItem.price}
                thumbnail={midItem.image_mobile}
              />
            </li>
          );
        })}
      </ul>
      <div className={`${styles.item} ml-6`}>
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
          <CurrencyIcon />
        </div>
        <Button type="primary" size="medium" onClick={clickHandler}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
