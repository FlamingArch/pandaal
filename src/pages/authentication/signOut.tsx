import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../contexts/firebase";

export default function signOut() {
  const { user, signOut } = React.useContext<any>(FirebaseContext);
  const navigate = useNavigate();
  user ? signOut() : navigate("/");
  return <Navigate to="/" />;
}
