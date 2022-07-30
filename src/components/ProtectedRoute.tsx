import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../services/user/selectors";

const DEFAULT_ROUTE = "/login";

interface IProtectedRoute {
  children: React.ReactNode;
  modal?: boolean;
  path: string;
  exact?: boolean;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({
  children,
  modal,
  ...restOfProps
}) => {
  const location = useLocation();
  const isAuthenticated = useSelector(isLoggedIn);

  console.log('pr', 'au', isAuthenticated, 'md', modal )

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
              modal: modal ? true : false
            },
          }}
        />
      )}
    </Route>
  );
};

export default ProtectedRoute;
