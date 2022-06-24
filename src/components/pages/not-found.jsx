import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./pages.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function NotFound() {
  const history = useHistory();

  return (
    <section className={styles.section}>
      <section className={styles.center}>
        <p className="text_type_main-large">404</p>
        <p className="text_type_main-medium mb-30">Страница не найдена</p>
        <Button
          type="primary"
          size="large"
          onClick={() => {
            history.push("/");
          }}
        >
          На главную
        </Button>
      </section>
    </section>
  );
}

export default NotFound;
