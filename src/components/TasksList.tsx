/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { createStyles } from "../styles/emotion-styles";

import React, { useState } from "react";
import { TasksStoreImplementation } from "./TasksStore";
import { observer } from "mobx-react";

interface TasksListProps {
  tasksStore: TasksStoreImplementation;
  showCompleted?: boolean;
}

const TasksList: React.FC<TasksListProps> = observer(({ tasksStore, showCompleted }) => {
  const [editedTask, setEditedTask] = useState<string>("");

  return (
    <div>
      {tasksStore.tasks.map((task, index) => (
        <div key={index}>
          {(showCompleted && task.completed) || !task.completed ? (
            <div css={task.completed ? styles.taskItemCompleted : styles.taskItemNotCompleted}>
              <input
                type="checkbox"
                onClick={() => {
                  tasksStore.toggleTask(task.id);
                }}
                checked={task.completed}
                readOnly
              />
              <span onClick={() => tasksStore.toggleEditTask(task.id)}>{task.title}</span>
            </div>
          ) : null}
          {task.isEditing && (
            <div>
              <input
                type="text"
                placeholder="Editar tarea"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
              <button
                onClick={() => {
                  tasksStore.editTask(task.id, editedTask);
                  setEditedTask("");
                }}
              >
                Guardar
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

const styles = createStyles({
  taskItemNotCompleted: {
    textDecoration: "none",
  },
  taskItemCompleted: {
    textDecoration: "line-through",
  },
});

export default TasksList;
