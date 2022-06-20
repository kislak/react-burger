import React from "react";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  return (
    <section className="not-found">
      <p className="not-found__code">404</p>
      <p className="not-found__details">Страница не найдена</p>
      <a className="not-found__back" onClick={history.goBack}>
        Назад
      </a>
    </section>
  );
}

export default NotFound;
