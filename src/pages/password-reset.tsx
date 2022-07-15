import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { passwordResetSubmit } from "../services/password/actions";
import { useDispatch } from "react-redux";

const PasswordReset: React.FC = () => {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [token, setToken] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    passwordResetSubmit(password, token, dispatch, () => {
      history.push("/login");
    });
  };

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1 className="text text_type_main-medium mt-6">
          Восстановление пароля
        </h1>
        <div className={styles.input}>
          <Input
            type={passwordVisible ? "text" : "password"}
            placeholder="Введите новый пароль"
            icon={passwordVisible ? "HideIcon" : "ShowIcon"}
            onIconClick={() => {
              setPasswordVisible(!passwordVisible);
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
          />
        </div>

        <div className={styles.input}>
          <Input
            type="text"
            placeholder="Введите код из письма"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            size="small"
          />
        </div>
        <div className="mt-6">
          <Button type="primary" size="small">
            Сохранить
          </Button>
        </div>

        <div className="mt-20 text text_type_main-default">
          <span className="m-2 text_color_inactive">Вспомнили пароль?</span>
          <Link to="/login" className={styles.link}>
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
};

export default PasswordReset;
