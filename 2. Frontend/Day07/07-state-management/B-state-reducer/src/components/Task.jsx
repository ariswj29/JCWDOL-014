import { useState } from "react";

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.title}
          onChange={(e) => {
            onChange({ ...task, title: e.target.value });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => onChange({ ...task, completed: e.target.checked })}
        />
        {taskContent}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </label>
    </>
  );
}

export default Task;
