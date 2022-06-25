import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import Main from "../../pages/main";
import Register from "../../pages/register";
import Login from "../../pages/login";
import ProtectedRouteNotAuthOnly from "../ProtectedRouteNotAuthOnly";
import ProtectedRoute from "../ProtectedRoute";
import Profile from "../../pages/profile";
import PasswordForgot from "../../pages/password-forgot";
import PasswordReset from "../../pages/password-reset";
import NotFound from "../../pages/not-found";
import Ingredient from "../../pages/ingredinent";
import { Route, Switch, withRouter } from "react-router-dom";
import OrderHistory from "../../pages/order-history";
import { refreshToken } from "../../services/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { isLoggedIn } from "../../services/user/selectors";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isLoggedIn);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(refreshToken());
    }
  }, []);
  const location = useLocation();

  return (
    <div className={styles.app}>
      <AppHeader />
      <Switch>
        <ProtectedRouteNotAuthOnly path="/register" exact>
          <Register />
        </ProtectedRouteNotAuthOnly>
        <ProtectedRouteNotAuthOnly path="/login" exact>
          <Login />
        </ProtectedRouteNotAuthOnly>
        <ProtectedRouteNotAuthOnly path="/forgot-password" exact>
          <PasswordForgot />
        </ProtectedRouteNotAuthOnly>
        <ProtectedRouteNotAuthOnly
          path="/reset-password"
          prevPath="/forgot-password"
          exact
        >
          <PasswordReset />
        </ProtectedRouteNotAuthOnly>

        <Route path="/" exact>
          <Main />
        </Route>

        <Route path="/ingredients/:id" exact>
          {location.state === "modal" ? <Main /> : <Ingredient />}
        </Route>

        <ProtectedRoute path="/profile" exact>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders">
          <OrderHistory />
        </ProtectedRoute>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
