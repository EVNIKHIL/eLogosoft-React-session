import { Suspense, lazy } from "react";
import Navbar from "./Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Profile";
import About from "./About";
import Contact from "./Contact";
import Faqs from "./Faqs";

// const Profile = lazy(() => import("./Profile"));
// const About = lazy(() => import("./About"));
// const Contact = lazy(() => import("./Contact"));
// const Faqs = lazy(() => import("./Faqs"));

const Loading = () => {
  <h1>Loading...</h1>;
};

const Privateroute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="profile"
          element={
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="faqs"
          element={
            <Suspense fallback={<Loading />}>
              <Faqs />
            </Suspense>
          }
        />

        <Route path="/*" element={<Navigate to="/profile" replace />} />
      </Routes>
    </>
  );
};

export default Privateroute;
