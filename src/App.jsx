import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Privateroute from "./Privateroute";
import Publicroute from "./Publicroute";
import { useState } from "react";

// const isAuthenticated = false;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/*" element={<Privateroute />} />
        ) : (
          <Route
            path="/*"
            element={<Publicroute setAuthenticated={setIsAuthenticated} />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
