import React from 'react';
import './ingredient-item.css';

function IngredientItem({item}) {
    return (
        <section className="ingredient-item">
            {item.name}
        </section>
    )
}

export default IngredientItem;
