import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={`${styles.header} m-4`}>
      <nav className={styles.nav__left}>
        <a href="#" className={`${styles.link__active} m-2 p-5`}>
          <BurgerIcon type="primary" />
          <span className="ml-2 text text_type_main-default">Конструктор</span>
        </a>
        <a href="#" className={`${styles.link} m-2 p-5`}>
          <ListIcon type="secondary" />
          <span className="ml-2 text text_type_main-default">
            Лента Заказов
          </span>
        </a>
      </nav>
      <Logo />
      <div className="nav nav__right">
        <a href="#" className={`${styles.link} m-2 p-5`}>
          <ProfileIcon type="secondary" />
          <span className="ml-2 text text_type_main-default">
            Личный кабинет
          </span>
        </a>
      </div>
    </header>
  );
}

export default AppHeader;
