import { useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { createTodos } from "./utils";

const todos = createTodos();

function App() {
  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <h1>Hello react</h1>
      <>
        <button
          className={`${tab === "all" ? "selected" : ""}`}
          onClick={() => setTab("all")}
        >
          All
        </button>
        <button
          className={`${tab === "active" ? "selected" : ""}`}
          onClick={() => setTab("active")}
        >
          Active
        </button>
        <button
          className={`${tab === "completed" ? "selected" : ""}`}
          onClick={() => setTab("completed")}
        >
          Completed
        </button>
        <br />
        <label>
          <input
            type="checkbox"
            checked={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
          />
          Dark mode
        </label>
        <hr />
        <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
      </>
    </>
  );
}

export default App;
