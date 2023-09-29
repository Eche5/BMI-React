import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BMIProvider } from "./context/BMIContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BMIProvider>
    <App />
  </BMIProvider>
);
