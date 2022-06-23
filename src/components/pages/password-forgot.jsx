import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function PasswordForgot() {
  const [email, setEmail] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("PasswordForgot", email);
  };

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1 className="text text_type_main-medium mt-6">
          Восстановление пароля
        </h1>
        <div className={styles.input}>
          <Input
            type="email"
            placeholder="Укажите e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
          />
        </div>

        <div className="mt-6">
          <Button type="primary" size="small">
            Восстановить
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
}

export default PasswordForgot;
