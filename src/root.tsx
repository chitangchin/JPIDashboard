import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FirstTimeUserProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <FirstTimeUserProvider>
    <App />
    </FirstTimeUserProvider>
  </React.StrictMode>
);
