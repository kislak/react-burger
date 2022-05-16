import React from 'react';
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import './app-header.css';

function AppHeader() {
    return (
        <header className="app-header m-10 text text_type_main-default">
            <nav className="nav">
                <a href="#" className="link link__active nav-item m-2 p-5">
                    <BurgerIcon type="primary"/>
                    <span className='ml-2'>
                        Конструктор
                    </span>
                </a>
                <a href="#" className="link nav-item m-2 p-5">
                    <ListIcon type="secondary" />
                    <span className='ml-2'>
                        Лента Заказов
                    </span>
                </a>
            </nav>
            <Logo />
            <div className="nav">
                <a href="#" className="link nav-item m-2 p-5">
                    <ProfileIcon type="secondary" />
                    <span className='ml-2'>
                        Личный кабинет
                    </span>
                </a>
            </div>
        </header>
    )
}

export default AppHeader;
