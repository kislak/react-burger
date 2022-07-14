import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../services/user/selectors";

const DEFAULT_ROUTE = "/login";

interface IProtectedRoute {
  children: React.FC;
  any: any;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({
  children,
  ...restOfProps
}) => {
  const location = useLocation();
  const isAuthenticated = useSelector(isLoggedIn);

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
};

export default ProtectedRoute;
