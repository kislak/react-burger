import React from 'react';
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import {BurgerIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import './app-header.css';

function AppHeader() {
    const [current, setCurrent] = React.useState('one')

    return (
        <header className="app-header">
            <Logo />
            <BurgerIcon type="primary" />
            иконки,
            типографику,
            систему отступов.
        </header>
    )
}

export default AppHeader;
