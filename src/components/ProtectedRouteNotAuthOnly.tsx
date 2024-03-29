import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { isLoggedIn } from "../services/user/selectors";
import { Location } from "history";

const DEFAULT_ROUTE = "/";

interface IProtectedRouteNotAuthOnly {
  children: React.ReactNode;
  prevPath?: string;
  path: string;
  exact?: boolean;
}

const ProtectedRouteNotAuthOnly: React.FC<IProtectedRouteNotAuthOnly> = ({
  children,
  prevPath,
  ...restOfProps
}) => {
  const history: any = useHistory<History>();
  const location: any = useLocation<Location>();
  const isAuthenticated = useAppSelector(isLoggedIn);

  if (prevPath && prevPath !== history.location?.state?.fromPath) {
    return <Redirect to={prevPath} />;
  }

  return (
    <Route {...restOfProps}>
      {!isAuthenticated ? (
        <>{children}</>
      ) : (
        <Redirect to={location?.state?.afterLogin || DEFAULT_ROUTE} />
      )}
    </Route>
  );
};

export default ProtectedRouteNotAuthOnly;
