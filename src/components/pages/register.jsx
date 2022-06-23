import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("регистрация", name, email, password);
  };

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1 className="text text_type_main-medium mt-6">Регистрация</h1>
        <div className={styles.input}>
          <Input
            type="name"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="small"
          />
        </div>

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
          <Button type="primary" size="small">
            Зарегистрироваться
          </Button>
        </div>
        <div className="mt-20 text text_type_main-default">
          <span className="m-2 text_color_inactive">Уже зарегистрированы?</span>
          <Link to="/login" className={styles.link}>
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
