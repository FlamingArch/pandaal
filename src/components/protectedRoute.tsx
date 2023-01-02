import React from "react";
import { Route } from "react-router-dom";
import RequireSignIn from "./requireSignIn";

const ProtectedRoute = ({
  path,
  element,
  children,
}: {
  path?: string;
  element?: React.ReactNode;
  children?: React.ReactNode;
}) => (
  <Route path={path} element={<RequireSignIn>{element}</RequireSignIn>}>
    {children}
  </Route>
);

export default ProtectedRoute;
