import React from 'react';
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import BurgerItemType from "../../../../prop-types/burger-item-type";
import styles from './ingredient-item.module.css';

function IngredientItem({item, setCurrentIngredient}) {
    return (
        <section className={styles.item} onClick={() => setCurrentIngredient(item)}>
            <Counter count={1} size="default" />
            <img src={item.image} />
            <div className={styles.price}>
                <span className="text text_type_digits-default m-1">
                    {item.price}
                </span>
                <CurrencyIcon />
            </div>
            <div className={`${styles.name} text text_type_main-default`}>
                {item.name}
            </div>
        </section>
    )
}


IngredientItem.propTypes = {
    item: PropTypes.shape(BurgerItemType),
    setCurrentIngredient: PropTypes.func.isRequired
};

export default IngredientItem;
