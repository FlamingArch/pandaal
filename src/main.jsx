import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Firebase from "./contexts/Firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Firebase.Provider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Firebase.Provider>
  </React.StrictMode>
);

function Home() {
  return (
    <div className="w-screen h-screen grid place-content-center text-center">
      <p className="font-extrabold text-6xl text-primary-400">pandaal</p>
      <p className="text-primary-400 text-xl">
        An event ecosystem
      </p>
    </div>
  );
}
