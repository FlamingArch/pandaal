import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import "./styles/transitions.scss";
import routes from "./router/routes";
import { RouterProvider, ScrollRestoration } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>
);
