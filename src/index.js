import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RandUsers from "./components/RandUsers/RandUsers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RandUsers />
    </BrowserRouter>
  </React.StrictMode>
);
