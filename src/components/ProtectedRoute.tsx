import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { isLoggedIn } from "../services/user/selectors";

const DEFAULT_ROUTE = "/login";

interface IProtectedRoute {
  children: React.ReactNode;
  path: string;
  exact?: boolean;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({
  children,
  ...restOfProps
}) => {
  const location = useLocation();
  const isAuthenticated = useAppSelector(isLoggedIn);

  return (
    <Route {...restOfProps}>
      {isAuthenticated ? (
        <>{children}</>
      ) : (
        <Redirect
          to={{
            pathname: DEFAULT_ROUTE,
            state: {
              afterLogin: location.pathname,
            },
          }}
        />
      )}
    </Route>
  );
};

export default ProtectedRoute;
