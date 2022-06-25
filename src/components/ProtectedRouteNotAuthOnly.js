import React from "react";
import {Redirect, Route, useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../services/user/selectors";

const DEFAULT_ROUTE = "/";

function ProtectedRouteNotAuthOnly({ children, prevPath, ...restOfProps }) {
  const history = useHistory();
  const location = useLocation()
  const isAuthenticated = useSelector(isLoggedIn);

  if (prevPath && prevPath !== history.location?.state?.fromPath) {
      return <Redirect to={prevPath} />;
  }

  return (
    <Route {...restOfProps}>
      {!isAuthenticated ? <>{children}</> : <Redirect to={(location?.state?.afterLogin) || DEFAULT_ROUTE} />}
    </Route>
  );
}

export default ProtectedRouteNotAuthOnly;
