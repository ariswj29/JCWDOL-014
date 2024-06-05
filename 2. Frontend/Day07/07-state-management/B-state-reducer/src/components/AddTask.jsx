import { useState } from "react";

function AddTask() {
  const [task, setTask] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Add task here"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          setTask("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
