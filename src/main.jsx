import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Firebase from "./contexts/Firebase";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Firebase.Provider>
      <App />
    </Firebase.Provider>
  </React.StrictMode>
);
