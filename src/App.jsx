import { useState } from "react";
import AddTask from "./AddTask";
import "./App.css";
import TaskList from "./TaskList";

const initialTasks = [
  { id: 0, text: "Buy grocery", done: true },
  { id: 1, text: "Finish Assignment", done: false },
  { id: 2, text: "Bake Cake", done: false },
  { id: 3, text: "Write Blog", done: false },
];

let nextId = initialTasks.length;

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (string) => {
    setTasks((prev) => [...prev, { id: nextId++, text: string }]);
  };

  const handleChangeTask = (task) => {
    setTasks((prev) => {
      console.log(task, 321);
      return prev.map((t) => {
        if (t.id === task.id) {
          return task;
        }
        return t;
      });
    });
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prev) => {
      return prev.filter((t) => t.id !== taskId);
    });
  };

  return (
    <>
      <h1>Task List</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
