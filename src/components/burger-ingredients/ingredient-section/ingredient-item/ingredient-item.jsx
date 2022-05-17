import React from 'react';
import './ingredient-item.css';
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientItem({item}) {
    return (
        <section className="ingredient-item">
            <Counter count={1} size="default" />
            <img src={item.image} />
            <div className="ingredient-item__price-section">
                <span className="text text_type_digits-default m-1">
                    {item.price}
                </span>
                <CurrencyIcon />
            </div>
            <div className="ingredient-item__name text text_type_main-default">
                {item.name}
            </div>
        </section>
    )
}

export default IngredientItem;