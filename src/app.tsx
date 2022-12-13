import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { RequireSignIn } from "./components";
import { FirebaseProvider } from "./contexts/firebase";
import {
  PageHome,
  PageEvent,
  PageRegister,
  PageInstructions,
  PageSignIn,
  PageAccount,
} from "./pages";

export default function App() {
  return (
    <FirebaseProvider>
      <AnimatePresence>
        <Routes>
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
          </Route>
          <Route path="signin" element={<PageSignIn />} />
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
