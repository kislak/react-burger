import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientSection from "./ingredient-section/ingredient-section";
import './burger-ingredients.css';

import data from "../../utils/data"

function BurgerIngredients() {
    const [current, setCurrent] = React.useState('bun')

    React.useEffect(() => {
        document.querySelector(`#${current}Ref`).scrollIntoView({
            behavior: 'smooth'
        });
    },[current])

    return (
        <section className="burger-ingredients">
            <h1 className="mt-10 text text_type_main-large">Соберите бургер</h1>
            <nav className="burger-ingredients__nav">
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>Булки</Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>Начинки</Tab>
            </nav>

            <div className="burger-ingredient__sections custom-scroll">
                <a id="bunRef"></a>
                <IngredientSection title="Булки" items={data.filter(i => i.type === "bun")} />
                <a id="sauceRef"></a>
                <IngredientSection title="Соусы" items={data.filter(i => i.type === "sauce")} />
                <a id="mainRef"></a>
                <IngredientSection title="Начинки" items={data.filter(i => i.type === "main")} />
            </div>
        </section>
    )
}

export default BurgerIngredients;