import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { RequireSignIn } from "./components";
import { FirebaseProvider } from "./contexts/firebase";
import {
  PageHome,
  PageEvent,
  PageRegister,
  PageInstructions,
  PageSignIn,
  PageSignOut,
  PageSignUp,
  PageAccount,
  PageRegistrationConfirmation,
  PageTestPayments,
  PageTestComponents,
} from "./pages";

export default function App() {
  const location = useLocation();

  return (
    <FirebaseProvider>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageHome />}>
            <Route path=":eventId" element={<PageEvent />}>
              <Route path="instructions" element={<PageInstructions />} />
              <Route
              path="register"
                element={
                  <RequireSignIn>
                    <PageRegister />
                  </RequireSignIn>
                }
              />
              <Route path="*" element={<PageEvent />} />
            </Route>
            <Route path=":eventId" element={<PageRegistrationConfirmation />} />
          </Route>
          <Route path="signin" element={<PageSignIn />} />
          <Route path="signout" element={<PageSignOut />} />
          <Route
            path="signup"
            element={
              <RequireSignIn>
                <PageSignUp />
              </RequireSignIn>
            }
          />
          <Route
            path="account"
            element={
              <RequireSignIn>
                <PageAccount />
              </RequireSignIn>
            }
          />
          <Route path="/test/payments" element={<PageTestPayments />} />
          <Route path="/test/components" element={<PageTestComponents />} />
          <Route path="*" element={<PageHome />} />
        </Routes>
      </AnimatePresence>
    </FirebaseProvider>
  );
}
