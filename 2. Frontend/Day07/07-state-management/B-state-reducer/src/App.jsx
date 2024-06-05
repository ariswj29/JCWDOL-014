import { useReducer } from "react";

import AddTask from "./components/AddTask";
import TaksList from "./components/TaskList";
import tasksReducer from "./reducers/task-reducer.js";

const initialTasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
];
let nextTaskId = 4;

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(taskTitle) {
    dispatch({
      type: "added",
      id: nextTaskId++,
      title: taskTitle,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>ToDo List</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaksList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
