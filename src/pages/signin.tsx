import React from "react";
import { useLocation } from "react-router-dom";

export default function PageSignIn() {
  const location = useLocation();
  const redirectPath = location.state?.path;

  return <div>Please Sign In to access {redirectPath}</div>;
}
