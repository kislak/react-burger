import styles from "../../pages/pages.module.css";
import { NavLink, Route, useHistory } from "react-router-dom";
import React, { MouseEvent } from "react";
import { logout } from "../../services/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { accessTokenSelector } from "../../services/user/selectors";

const ProfileNav: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(accessTokenSelector);

  const logoutHandler = (e: MouseEvent) => {
    e.preventDefault();
    token &&
      dispatch(
        logout(token, () => {
          history.push("/login");
        })
      );
  };

  return (
    <nav className={styles.profile__nav}>
      <NavLink
        to="/profile"
        className={`${styles.profile__link} text text_type_main-medium text_color_inactive`}
        activeClassName={`${styles.profile__link_active} text text_type_main-medium`}
        exact
      >
        Профиль
      </NavLink>
      <NavLink
        to="/profile/orders"
        className={`${styles.profile__link} text text_type_main-medium text_color_inactive`}
        activeClassName={`${styles.profile__link_active} text text_type_main-medium`}
        exact
      >
        История заказов
      </NavLink>
      <a
        className={`${styles.profile__link} text text_type_main-medium text_color_inactive`}
        onClick={logoutHandler}
        href="/#"
      >
        Выход
      </a>
      <p className={`${styles.profile__text} text text_color_inactive mt-20`}>
        <Route path="/profile" exact>
          В этом разделе вы можете изменить свои персональные данные
        </Route>
        <Route path="/profile/orders" exact>
          В этом разделе вы можете посмотреть свою историю заказов
        </Route>
      </p>
    </nav>
  );
};

export default ProfileNav;
