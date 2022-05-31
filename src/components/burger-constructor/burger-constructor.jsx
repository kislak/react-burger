import React, { useEffect } from "react";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";
import BurgerContext from "../../services/burger-context";

function BurgerConstructor() {
  const { topItem, midItems, submitOrder } = React.useContext(BurgerContext);
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    const initialValue = topItem ? topItem.price * 2 : 0;
    const newTotal = midItems.reduce((acc, cur) => {
      return acc + cur.price;
    }, initialValue);
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
            <li className={styles.item} key={`mid-item-${midItem._id}`}>
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
        <Button type="primary" size="medium" onClick={submitOrder}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
