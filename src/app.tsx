import React from "react";
import { Routes, Route } from "react-router-dom";
import RequireSignIn from "./components/requireSignIn";
import { FirebaseProvider } from "./contexts/firebase";
import {
  PageHome,
  PageEvent,
  PageRegister,
  PageInstructions,
  PageSignIn,
} from "./pages";

export default function App() {
  return (
    <FirebaseProvider>
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
              <PageSignIn />
            </RequireSignIn>
          }
        />
        <Route path="*" element={<PageHome />} />
      </Routes>
    </FirebaseProvider>
  );
}
