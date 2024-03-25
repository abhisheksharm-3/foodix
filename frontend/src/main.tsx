import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Router>
        <AppRoutes />
      </Router>
    </NextUIProvider>
  </React.StrictMode>
);
