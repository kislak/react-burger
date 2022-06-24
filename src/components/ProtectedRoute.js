import React from "react";
import {Redirect, Route, useLocation} from "react-router-dom";

const DEFAULT_ROUTE = "/login";

function ProtectedRoute({ children, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("refreshToken") !== null;
  const location = useLocation();

  return (
    <Route {...restOfProps}>
      {isAuthenticated ? <>{children}</> : <Redirect   to={{pathname: DEFAULT_ROUTE, state: { afterLogin: location.pathname }}}/>}
    </Route>
  );
}

export default ProtectedRoute;
