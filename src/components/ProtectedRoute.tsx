import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const isAuthenticated = useSelector(isLoggedIn);
  console.log("auth", isAuthenticated);

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
              modal: location.state === "modal",
            },
          }}
        />
      )}
    </Route>
  );
};

export default ProtectedRoute;
