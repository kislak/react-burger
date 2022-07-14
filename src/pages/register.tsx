import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { createUser } from "../services/user/actions";
import { useDispatch } from "react-redux";

// костыль чтобы Button принимал children
declare module "react" {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    createUser(email, password, name, dispatch, () => {
      history.push("/");
    });
  };

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1 className="text text_type_main-medium mt-6">Регистрация</h1>
        <div className={styles.input}>
          <Input
            type="text"
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
};

export default Register;
