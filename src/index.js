import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import { User } from "./pages/User/User.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path={`${process.env.REACT_APP_API_URL}/`}
        element={<App />}
      ></Route>
      <Route
        path={`${process.env.REACT_APP_API_URL}/user/:username`}
        element={<User />}
      ></Route>
      <Route
        path={`${process.env.REACT_APP_API_URL}/*`}
        element={<div>404</div>}
      ></Route>
    </Routes>
  </BrowserRouter>
);
