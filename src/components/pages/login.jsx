import { Link } from "react-router-dom";

function Login() {
  return (
    <section>
      login
      <Link to="/register">Зарегистрироваться </Link>
      <Link to="/forgot-password">Восстановить пароль </Link>
    </section>
  );
}

export default Login;
