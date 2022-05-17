import React from 'react';
import './ingredient-section.css';
import IngredientItem from "./ingredient-item/ingredient-item";

function IngredientSection({title, items}) {
    return (
        <section className="ingredient-section mt-10">
            <h2 className="text text_type_main-medium">{title}</h2>
            <div className="ingredient-section__items">
                {items.map(item => {
                    return <IngredientItem key={item._id} item={item} />
                }) }
            </div>
        </section>
    )
}

export default IngredientSection;
