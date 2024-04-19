import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Albums from "./components/Albums.jsx";
import CreateAlbum from "./components/CreateAlbum.jsx";
import "./index.css";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Albums />,
  },
  {
    path: "/add-album",
    element: <CreateAlbum />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="main">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
