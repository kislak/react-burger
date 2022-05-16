import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor() {
    const [current, setCurrent] = React.useState('one')

    return (
        <header>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                One
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                Two
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                Three
            </Tab>
        </header>
    )
}

export default BurgerConstructor;
