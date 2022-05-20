import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientSection from "./ingredient-section/ingredient-section";
import PropTypes from "prop-types";
import BurgerItemType from "../../prop-types/burger-item-type";
import styles from './burger-ingredients.module.css';

function BurgerIngredients({items}) {
    const [current, setCurrent] = React.useState('bun')
    const bunRef = React.useRef(null);
    const sauceRef = React.useRef(null);
    const mainRef = React.useRef(null);

    const clickHandler = (value) => {
      setCurrent(value)
      value === 'bun' && bunRef.current.scrollIntoView({behavior: 'smooth'})
      value === 'sauce' && sauceRef.current.scrollIntoView({behavior: 'smooth'})
      value === 'main' && mainRef.current.scrollIntoView({behavior: 'smooth'})
    }

    const bun = items.filter(i => i.type === "bun")
    const sauce = items.filter(i => i.type === "sauce")
    const main = items.filter(i => i.type === "main")

    return (
        <section className={styles.ingredients}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <nav className={styles.nav}>
                <Tab value="bun" active={current === 'bun'} onClick={clickHandler}>Булки</Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={clickHandler}>Соусы</Tab>
                <Tab value="main" active={current === 'main'} onClick={clickHandler}>Начинки</Tab>
            </nav>

            <div className={`${styles.sections} custom-scroll`}>
                <span ref={bunRef} />
                <IngredientSection title="Булки" items={bun} sectionName="bun" />
                <span ref={sauceRef} />
                <IngredientSection title="Соусы" items={sauce} sectionName="sauce"  />
                <span ref={mainRef} />
                <IngredientSection title="Начинки" items={main} sectionName="main" />
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(BurgerItemType)).isRequired,
};

export default BurgerIngredients;
