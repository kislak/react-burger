import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import {useSelector} from "react-redux";
import {isLoggedIn} from "../services/user/selectors";

const DEFAULT_ROUTE = "/login";

function ProtectedRoute({ children, ...restOfProps }) {
  const isAuthenticated = useSelector(isLoggedIn);
  const location = useLocation();

  return (
    <Route {...restOfProps}>
      {isAuthenticated ? (
        <>{children}</>
      ) : (
        <Redirect
          to={{
            pathname: DEFAULT_ROUTE,
            state: { afterLogin: location.pathname },
          }}
        />
      )}
    </Route>
  );
}

export default ProtectedRoute;
