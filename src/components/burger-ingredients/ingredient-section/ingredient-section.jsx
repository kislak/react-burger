import React from 'react';
import IngredientItem from "./ingredient-item/ingredient-item";
import PropTypes from "prop-types";
import BurgerItemType from "../../../prop-types/burger-item-type";
import styles from './ingredient-section.module.css';

function IngredientSection({title, items, sectionName}) {
    return (
        <section id={sectionName} className={styles.section}>
            <h2 className="text text_type_main-medium">{title}</h2>
            <div className={styles.items}>
                {items.map(item => {
                    return <IngredientItem key={item._id} item={item} />
                }) }
            </div>
        </section>
    )
}

IngredientSection.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape(BurgerItemType)).isRequired,
    sectionName: PropTypes.string.isRequired
};

export default IngredientSection;
