import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendPasswordResetEmail } from "../services/password/actions";

// костыль чтобы Button принимал children
declare module "react" {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const PasswordForgot: React.FC = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    sendPasswordResetEmail(email, dispatch, () => {
      history.push({
        pathname: "/reset-password",
        state: { fromPath: "/forgot-password" },
      });
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
};

export default PasswordForgot;
