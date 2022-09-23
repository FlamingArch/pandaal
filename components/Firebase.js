import { createContext } from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuthh, signOut } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

const Context = createContext();

const Provider = ({ children }) => {
  const config = {
    apiKey: "AIzaSyAzkEwuLhZwpL57SkaAY1ee2ym91fQLIGk",
    authDomain: "pandaal-a71fd.firebaseapp.com",
    projectId: "pandaal-a71fd",
    storageBucket: "pandaal-a71fd.appspot.com",
    messagingSenderId: "918662713292",
    appId: "1:918662713292:web:feebd8bddb182f59809769",
    measurementId: "G-RN1KKBLZ7S",
  };

  const app = initializeApp(config);

  const analytics = getAnalytics(app);

  const auth = getAuth(app);
  const [user, signInLoading, signInError] = useAuthState(auth);

  return (
    <Context.Provider
      value={{
        analytics: analytics,
        app: app,
        auth: auth,
        config: config,
        signInLoading: signInLoading,
        signInError: signInError,
        user: user,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const FirebaseIntegration = { Context: Context, Provider: Provider };

export default FirebaseIntegration;
