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
import ProfileFeed from "../../pages/feed-profile";
import { refreshToken } from "../../services/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import { isLoggedIn } from "../../services/user/selectors";
import OrderDetails from "../modal/order-details/order-details";
import Feed from "../../pages/feed";
import FeedDetails from "../../pages/feed-details";
import { getIngredients } from "../../services/ingredients/actions";

declare module "react" {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isLoggedIn);
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(refreshToken());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

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

        <ProtectedRoute path="/profile" exact>
          <Profile />
        </ProtectedRoute>

        <ProtectedRoute path="/profile/orders" exact>
          <ProfileFeed />
        </ProtectedRoute>

        <ProtectedRoute path="/profile/orders/:id" exact>
          <OrderDetails />
        </ProtectedRoute>

        <Route path="/" exact>
          <Main />
        </Route>

        <Route path="/feed" exact>
          <Feed />
        </Route>

        <Route path="/feed/:id" exact>
          <OrderDetails />
        </Route>

        <Route path="/ingredients/:id" exact>
          {location.state === "modal" ? <Main /> : <Ingredient />}
        </Route>

        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(App);
