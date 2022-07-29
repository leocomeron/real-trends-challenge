/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

import React, { useState } from "react";
import styles from "./styles";
import { TasksStoreImplementation } from "../../store/TasksStore";
import { observer } from "mobx-react";
import { Button, Card, Checkbox, Grid, TextField, Typography } from "@mui/material";

interface TasksListProps {
  tasksStore: TasksStoreImplementation;
  showCompleted?: boolean;
}

const TasksList: React.FC<TasksListProps> = observer(({ tasksStore, showCompleted }) => {
  const [editedTask, setEditedTask] = useState<string>("");

  return (
    <Card css={styles.cardContainer}>
      {tasksStore.tasks.map((task, index) => (
        <div key={index}>
          {(showCompleted && task.completed) || !task.completed ? (
            <Grid
              container
              css={task.completed ? styles.taskItemCompleted : styles.taskItemNotCompleted}
            >
              <Grid item xs={1} css={styles.listContainer}>
                <Checkbox
                  onClick={() => {
                    tasksStore.toggleTask(task.id);
                  }}
                  checked={task.completed}
                />
              </Grid>
              <Grid item css={styles.textContainer}>
                <Typography
                  css={styles.taskTitle}
                  onClick={() => tasksStore.toggleEditTask(task.id)}
                >
                  {task.title}
                </Typography>
              </Grid>
            </Grid>
          ) : null}
          {task.isEditing && (
            <Grid container>
              <TextField
                css={styles.input}
                size="small"
                placeholder="Editar tarea"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
              <Button
                variant="contained"
                disabled={editedTask.length === 0}
                onClick={() => {
                  tasksStore.editTask(task.id, editedTask);
                  setEditedTask("");
                }}
              >
                Guardar
              </Button>
            </Grid>
          )}
        </div>
      ))}
    </Card>
  );
});

export default TasksList;
