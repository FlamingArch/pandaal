import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageHome, PageEvent, PageRegister, PageInstructions } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />}>
        <Route path=":eventId" element={<PageEvent />}>
          <Route path="instructions" element={<PageInstructions />} />
          <Route path="register" element={<PageRegister />} />
          <Route path="*" element={<PageEvent />} />
        </Route>
      </Route>
      <Route path="*" element={<PageHome />} />
    </Routes>
  );
}
