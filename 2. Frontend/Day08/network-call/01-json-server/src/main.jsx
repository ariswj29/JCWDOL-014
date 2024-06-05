import React from "react";
import ReactDOM from "react-dom/client";
// import {RouterProvider, createBrowserRoot} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// const router = createBrowserRoot([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//     path: "/post",
//     element: <h1>post</h1>
//   }
// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
