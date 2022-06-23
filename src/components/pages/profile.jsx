import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./pages.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameEditable, setNameEditable] = useState(false);
  const [emailEditable, setEmailEditable] = useState(false);
  const [passwordEditable, setPasswordEditable] = useState(false);

  const submitHandler = (e) => {
    console.log("регистрация", name, email, password);
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
          to="#"
          className={`${styles.profile__link} text text_type_main-medium text_color_inactive`}
        >
          История заказов
        </Link>
        <Link
          to="/logout"
          className={`${styles.profile__link} text text_type_main-medium text_color_inactive`}
        >
          Выход
        </Link>
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
                submitHandler();
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
                submitHandler();
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
              icon={passwordEditable ? "CheckMarkIcon" : "EditIcon"}
              onIconClick={() => {
                setPasswordEditable(!passwordEditable);
                submitHandler();
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
}

export default Profile;
