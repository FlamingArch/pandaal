import React from "react";
import ReactDOM from "react-dom/client";
import FirebaseIntegration from "./components/Firebase";
import App from "./fragments/App";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseIntegration.Provider>
      <App />
    </FirebaseIntegration.Provider>
  </React.StrictMode>
);
