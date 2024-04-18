import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Profile from "./pages/Profile.jsx";
import Profiles from "./pages/Profiles.jsx";
import "./App.css";
import Notfound from "./pages/Notfound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/profiles",
    element: <Profiles />,
  },
  {
    path: "/profiles/:id",
    element: <Profile />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="main">
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/profiles">Profile</a>
      </nav>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
