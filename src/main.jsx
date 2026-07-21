import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";

import "./index.css";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
