import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Counter2 from "./Counter2";

function App() {
  const [showTab, setShowTab] = useState("counter1");
  return (
    <>
      <h1>Hello react</h1>

      <button
        onClick={() => {
          setShowTab((prev) => {
            if (prev === "counter1") {
              return "counter2";
            }
            return "counter1";
          });
        }}
      >
        Switch counter
      </button>
      {showTab === "counter1" ? <Counter /> : <Counter2 />}
    </>
  );
}

export default App;
