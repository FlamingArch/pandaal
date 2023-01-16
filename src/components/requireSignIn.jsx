import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FirebaseContext } from "../contexts/firebase";
import { IconPreloader } from "./icons";

export default function RequireSignIn({ children }) {
  const { user, loggingIn } = useContext(FirebaseContext);
  const location = useLocation();

  console.log(loggingIn);

  if (loggingIn) {
    <div className="w-screen h-screen bg-gray-50 flex flex-col items-center justify-center">
      <IconPreloader className="w-8 h-8 stroke-gray-500" />
    </div>;
  }

  if (!user) {
    setTimeout(() => {
      return <Navigate to="/signin" state={{ path: location.pathname }} />;
    }, 1000);
  } else {
    return children;
  }
}
