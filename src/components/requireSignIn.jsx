import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FirebaseContext } from "../contexts/firebase";

export default function RequireSignIn({ children }) {
  const { user } = useContext(FirebaseContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/signin" state={{ path: location.pathname }} />;
  }

  return children;
}
