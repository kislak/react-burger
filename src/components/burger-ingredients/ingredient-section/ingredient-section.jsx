import React from 'react';
import './ingredient-section.css';
import IngredientItem from "./ingredient-item/ingredient-item";

function IngredientSection({title, items}) {
    return (
        <section className="ingredient-section">
            {title}
            {items.map(item => {
                return <IngredientItem key={item.id} item={item} />
            }) }
            <hr/>
        </section>
    )
}

export default IngredientSection;
