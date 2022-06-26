import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import BurgerItemType from "../../../../prop-types/burger-item-type";
import styles from "./ingredient-item.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentIngredient } from "../../../../services/current-ingredient/actions";
import { allItemsSelector } from "../../../../services/burger-constructor/selectors";
import { useDrag } from "react-dnd";
import { useHistory } from "react-router-dom";

function IngredientItem({ item }) {
  const [, dragRef] = useDrag({
    type: "addIngredient",
    item: item,
  });

  const dispatch = useDispatch();
  const allItems = useSelector(allItemsSelector);
  const history = useHistory();

  const count = allItems.filter((x) => x._id === item._id).length;

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
      <img src={item.image} ref={dragRef} />
      <div className={styles.price}>
        <span className="text text_type_digits-default m-1">{item.price}</span>
        <CurrencyIcon />
      </div>
      <div className={`${styles.name} text text_type_main-default`}>
        {item.name}
      </div>
    </section>
  );
}

IngredientItem.propTypes = {
  item: PropTypes.shape(BurgerItemType),
};

export default IngredientItem;
