import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageHome, PageEvent } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />}>
        <Route path=":eventId" element={<PageEvent />} />
      </Route>
    </Routes>
  );
}
