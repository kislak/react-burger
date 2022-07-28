import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-item.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentIngredient } from "../../../../services/current-ingredient/actions";
import { allItemsSelector } from "../../../../services/burger-constructor/selectors";
import { useDrag } from "react-dnd";
import { useHistory } from "react-router-dom";
import { TBurgerItem } from "../../../../types/burger-item";

interface IIngredientItem {
  item: TBurgerItem;
}

const IngredientItem: React.FC<IIngredientItem> = ({ item }) => {
  const [, dragRef] = useDrag({
    type: "addIngredient",
    item: item,
  });

  const dispatch = useDispatch();
  const allItems = useSelector(allItemsSelector);
  const history = useHistory();

  const count = allItems.filter((x: TBurgerItem) => x._id === item._id).length;

  return (
    <section
      className={styles.item}
      onClick={() =>
        dispatch(
          setCurrentIngredient(item, () => {
            history.push({
              pathname: `/ingredients/${item._id}`,
              state: "modal",
            });
          })
        )
      }
    >
      <span className="mb-8">
        {count > 0 && <Counter count={count} size="default" />}
      </span>
      <img src={item.image} ref={dragRef} alt="drag-icon" />
      <div className={styles.price}>
        <span className="text text_type_digits-default m-1">{item.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles.name} text text_type_main-default`}>
        {item.name}
      </div>
    </section>
  );
};

export default IngredientItem;
