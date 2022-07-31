import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { Link, NavLink, useRouteMatch } from "react-router-dom";

const AppHeader: React.FC = () => {
  const matchHome = useRouteMatch({
    path: "/",
    strict: true,
    exact: true,
  });

  const matchProfile = useRouteMatch({
    path: "/profile",
    strict: false,
    exact: false,
  });

  const matchFeed = useRouteMatch({
    path: "/feed",
    strict: true,
    exact: true,
  });

  return (
    <header className={`${styles.header} m-4`}>
      <nav className={styles.nav__left}>
        <NavLink
          to="/"
          className={`${styles.link} m-2 p-5`}
          activeClassName={`${styles.link__active} m-2 p-5`}
          exact
        >
          <BurgerIcon type={matchHome ? "primary" : "secondary"} />
          <span className="ml-2 text text_type_main-default">Конструктор</span>
        </NavLink>

        <NavLink
          to="/feed"
          className={`${styles.link} m-2 p-5`}
          activeClassName={`${styles.link__active} m-2 p-5`}
        >
          <ListIcon type={matchFeed ? "primary" : "secondary"} />
          <span className="ml-2 text text_type_main-default">
            Лента Заказов
          </span>
        </NavLink>
      </nav>
      <Link to="/">
        <Logo />
      </Link>
      <div className="nav nav__right">
        <NavLink
          to="/profile"
          className={`${styles.link} m-2 p-5`}
          activeClassName={`${styles.link__active} m-2 p-5`}
        >
          <ProfileIcon type={matchProfile ? "primary" : "secondary"} />
          <span className="ml-2 text text_type_main-default">
            Личный кабинет
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default AppHeader;
