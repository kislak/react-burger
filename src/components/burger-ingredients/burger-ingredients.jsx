import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientSection from "./ingredient-section/ingredient-section";
import './burger-ingredients.css';
import PropTypes from "prop-types";
import BurgerItemType from "../../prop-types/burger-item-type";

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('bun')
    React.useEffect(() => {
        document.getElementById(current).scrollIntoView({
            behavior: 'smooth'
        });
    },[current])

    let bun = props.items.filter(i => i.type === "main")
    let sauce = props.items.filter(i => i.type === "main")
    let main = props.items.filter(i => i.type === "main")

    return (
        <section className="burger-ingredients">
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <nav className="burger-ingredients__nav">
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>Булки</Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>Начинки</Tab>
            </nav>

            <div className="burger-ingredient__sections custom-scroll">
                <IngredientSection title="Булки" items={bun} sectionName="bun" />
                <IngredientSection title="Соусы" items={sauce} sectionName="sauce" />
                <IngredientSection title="Начинки" items={main} sectionName="main" />
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(BurgerItemType)),
};

export default BurgerIngredients;
