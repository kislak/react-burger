import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

const DEFAULT_ROUTE = "/";

function ProtectedRouteNotAuthOnly({ children, prevPath, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("refreshToken") !== null;
  const history = useHistory();

  if (prevPath) {
    if (
      !history.location.state ||
      history.location.state.fromPath !== prevPath
    ) {
      return <Redirect to={prevPath} />;
    }
  }

  return (
    <Route {...restOfProps}>
      {!isAuthenticated ? <>{children}</> : <Redirect to={DEFAULT_ROUTE} />}
    </Route>
  );
}

export default ProtectedRouteNotAuthOnly;
