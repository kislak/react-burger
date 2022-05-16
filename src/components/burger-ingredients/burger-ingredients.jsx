import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import './burger-ingredients.css';
import IngredientSection from "./ingredient-section/ingredient-section";
import data from "../../utils/data"

function BurgerIngredients() {
    const [current, setCurrent] = React.useState('one')

    return (
        <section className="burger-ingredients">
            <h1 className="mt-10 text text_type_main-large">Соберите бургер</h1>
            <nav className="burger-ingredients__nav">
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </nav>

            <IngredientSection title="Булки" items={data.filter(i => i.type === "bun")}/>
            <IngredientSection title="Соусы" items={data.filter(i => i.type === "sauce")} />
            <IngredientSection title="Начинки" items={data.filter(i => i.type === "main")} />
        </section>
    )
}

export default BurgerIngredients;
