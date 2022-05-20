import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientSection from "./ingredient-section/ingredient-section";
import PropTypes from "prop-types";
import BurgerItemType from "../../prop-types/burger-item-type";
import styles from './burger-ingredients.module.css';

function BurgerIngredients({items}) {
    const [current, setCurrent] = React.useState('bun')
    React.useEffect(() => {
        document.getElementById(current).scrollIntoView({
            behavior: 'smooth'
        });
    },[current])

    const bun = items.filter(i => i.type === "bun")
    const sauce = items.filter(i => i.type === "sauce")
    const main = items.filter(i => i.type === "main")

    return (
        <section className={styles.ingredients}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <nav className={styles.nav}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>Булки</Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>Начинки</Tab>
            </nav>

            <div className={`${styles.sections} custom-scroll`}>
                <IngredientSection title="Булки" items={bun} sectionName="bun" />
                <IngredientSection title="Соусы" items={sauce} sectionName="sauce" />
                <IngredientSection title="Начинки" items={main} sectionName="main" />
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(BurgerItemType)).isRequired,
};

export default BurgerIngredients;
