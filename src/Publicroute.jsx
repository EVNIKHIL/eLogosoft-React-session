import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";

// const Login = lazy(() => import("./Login"));

const Publicroute = ({ setAuthenticated }) => {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Login setAuthenticated={setAuthenticated} />
          </Suspense>
        }
      />

      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default Publicroute;
