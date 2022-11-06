import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Firebase from "./contexts/Firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { PageHome } from "./pages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Firebase.Provider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PageHome />} />
          <Route exact path="/:id" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Firebase.Provider>
  </React.StrictMode>
);
