import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../contexts/firebase";
import { IconPreloader } from "./icons";

export default function RequireSignIn({ children }) {
  const { user, loggingIn } = useContext(FirebaseContext);
  const location = useLocation();

  if (loggingIn) {
    return (
      <div className="w-screen h-screen bg-gray-50 flex flex-col items-center justify-center">
        <IconPreloader className="w-8 h-8 stroke-gray-500" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" state={{ path: location.pathname }} />;
  } else {
    return children;
  }
}
