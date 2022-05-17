import React from 'react';
import './ingredient-section.css';
import IngredientItem from "./ingredient-item/ingredient-item";
import PropTypes from "prop-types";
import BurgerItemType from "../../../prop-types/burger-item-type";

function IngredientSection({title, items, sectionName}) {
    return (
        <section id={sectionName} className="ingredient-section mt-10">
            <h2 className="text text_type_main-medium">{title}</h2>
            <div className="ingredient-section__items">
                {items.map(item => {
                    return <IngredientItem key={item._id} item={item} />
                }) }
            </div>
        </section>
    )
}

IngredientSection.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(BurgerItemType)),
    sectionName: PropTypes.string
};

export default IngredientSection;
