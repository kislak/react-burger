import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import BurgerItemType from "../../../../prop-types/burger-item-type";
import styles from "./ingredient-item.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentIngredient} from "../../../../services/current-ingredient/actions";
import {allItemsSelector} from "../../../../services/burger-constructor/selectors";

function IngredientItem({ item }) {
  const dispatch = useDispatch()
  const allItems = useSelector(allItemsSelector)
  const count = allItems.filter(x => x._id === item._id ).length

  return (
    <section className={styles.item} onClick={() => dispatch(setCurrentIngredient(item))}>
      { (count > 0) && <Counter count={count} size="default" />}
      <img src={item.image} />
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
