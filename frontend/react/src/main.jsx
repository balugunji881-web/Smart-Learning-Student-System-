import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";

import "./index.css";

/* Global Styles */
import "./styles/global.css";
import "./styles/dashboard.css";
import "./styles/sidebar.css";
import "./styles/admin.css";
import "./styles/profile.css";
import "./styles/login.css";
import "./styles/register.css";
import "./styles/navbar.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);