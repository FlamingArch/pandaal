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
  PageConfirmation,
} from "./pages";
import PageTicket from "./pages/event/ticket";

export default function App() {
  const location = useLocation();

  return (
    <FirebaseProvider>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageHome />} />
          <Route path=":eventId" element={<PageEvent />}>
            <Route path="*" element={<PageEvent />} />
          </Route>
          <Route
            path=":eventId/ticket"
            element={
              <RequireSignIn>
                <PageTicket />
              </RequireSignIn>
            }
          />
          <Route path=":eventId/instructions" element={<PageInstructions />} />
          <Route
            path=":eventId/register"
            element={
              <RequireSignIn>
                <PageRegister />
              </RequireSignIn>
            }
          />
          <Route
            path=":eventId/confirmation"
            element={
              <RequireSignIn>
                <PageConfirmation />
              </RequireSignIn>
            }
          />
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
          <Route path="*" element={<PageHome />} />
        </Routes>
      </AnimatePresence>
    </FirebaseProvider>
  );
}
