import React, { useEffect, useState, MouseEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./pages.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { accessTokenSelector, userSelector } from "../services/user/selectors";
import { getUser, logout, updateUser } from "../services/user/actions";

const Profile: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameEditable, setNameEditable] = useState(false);
  const [emailEditable, setEmailEditable] = useState(false);
  const [passwordEditable, setPasswordEditable] = useState(false);
  const user = useSelector(userSelector);
  const token = useSelector(accessTokenSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    token && dispatch(getUser(token));
  }, [token, dispatch]);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatchUpdateUser();
  };

  const dispatchUpdateUser = () => {
    dispatch(updateUser(token, email, name));
  };

  const logoutHandler = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(
      logout(token, () => {
        history.push("/login");
      })
    );
  };

  return (
    <section className={styles.section}>
      <nav className={styles.profile__nav}>
        <Link
          to="/profile"
          className={`${styles.profile__link_active} text text_type_main-medium`}
        >
          Профиль
        </Link>
        <Link
          to="profile/orders"
          className={`${styles.profile__link} text text_type_main-medium text_color_inactive`}
        >
          История заказов
        </Link>
        <a
          className={`${styles.profile__link} text text_type_main-medium text_color_inactive`}
          onClick={logoutHandler}
          href="/#"
        >
          Выход
        </a>
        <p className={`${styles.profile__text} text text_color_inactive mt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <section>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.input}>
            <Input
              type="text"
              placeholder="Имя"
              value={name}
              icon={nameEditable ? "CheckMarkIcon" : "EditIcon"}
              onIconClick={() => {
                setNameEditable(!nameEditable);
                dispatchUpdateUser();
              }}
              disabled={!nameEditable}
              onChange={(e) => setName(e.target.value)}
              size="small"
            />
          </div>

          <div className={styles.input}>
            <Input
              type="text"
              placeholder="Логин"
              value={email}
              icon={emailEditable ? "CheckMarkIcon" : "EditIcon"}
              onIconClick={() => {
                setEmailEditable(!emailEditable);
                dispatchUpdateUser();
              }}
              disabled={!emailEditable}
              onChange={(e) => setEmail(e.target.value)}
              size="small"
            />
          </div>

          <div className={styles.input}>
            <Input
              type={passwordEditable ? "text" : "password"}
              placeholder="Пароль"
              icon={passwordEditable ? "CheckMarkIcon" : "CheckMarkIcon"}
              onIconClick={() => {
                setPasswordEditable(false);
                // dispatchUpdateUser();
              }}
              value={password}
              disabled={!passwordEditable}
              onChange={(e) => setPassword(e.target.value)}
              size="small"
            />
          </div>
        </form>
      </section>
    </section>
  );
};

export default Profile;
