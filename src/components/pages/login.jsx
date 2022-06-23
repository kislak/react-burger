import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('вход', email, password)
  }

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1 className="text text_type_main-medium mt-6">Вход</h1>
        <div className={styles.input}>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
          />
        </div>
        <div className={styles.input}>
          <Input
            type={passwordVisible ? "text" : "password"}
            placeholder="Пароль"
            icon={passwordVisible ? "HideIcon" : "ShowIcon"}
            onIconClick={() => {
              setPasswordVisible(!passwordVisible);
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
          />
        </div>
        <div className="mt-6">
          <Button
            type="primary"
            size="small"
          >
            Войти
          </Button>
        </div>
        <div className="mt-20 text text_type_main-default">
          <span className="m-2 text_color_inactive">Вы — новый пользователь?</span>
          <Link
            to="/register"
            className={styles.link}
          >
            Зарегистрироваться
          </Link>
        </div>
        <div className="mt-4 text text_type_main-default">
          <span className="m-2 text_color_inactive">Забыли пароль? </span>
          <Link
            to="/forgot-password"
            className={styles.link}
          >
            Восстановить пароль
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
