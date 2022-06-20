import React from "react";
import { Redirect, Route } from "react-router-dom";

const DEFAULT_ROUTE = "/";

function ProtectedRouteNotAuthOnly({ children, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("loggedin") === "1";

  return (
    <Route {...restOfProps}>
      {!isAuthenticated ? <>{children}</> : <Redirect to={DEFAULT_ROUTE} />}
    </Route>
  );
}

export default ProtectedRouteNotAuthOnly;
