import React from "react";
import { Redirect, Route } from "react-router-dom";

const DEFAULT_ROUTE = "/login";

function ProtectedRoute({ children, ...restOfProps }) {
  const isAuthenticated = (localStorage.getItem("refreshToken") !== null);

  return (
    <Route {...restOfProps}>
      {isAuthenticated ? <>{children}</> : <Redirect to={DEFAULT_ROUTE} />}
    </Route>
  );
}

export default ProtectedRoute;
