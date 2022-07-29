/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

import React, { useState } from "react";
import styles from "./styles";
import { TasksStoreImplementation } from "../../store/TasksStore";
import { observer } from "mobx-react";
import { Button, Grid, TextField } from "@mui/material";
import TasksList from "../TasksList";

interface AddTaskFormProps {
  tasksStore: TasksStoreImplementation;
}

const AddTaskForm: React.FC<AddTaskFormProps> = observer(({ tasksStore }) => {
  const [newTask, setNewTask] = useState<string>("");
  const [showCompletedTasks, setShowCompletedTasks] = useState<boolean>(true);
  const newTaskIsValid = newTask.length > 0;
  const taskListIsEmpty = tasksStore.tasks.length === 0;

  const handleAddTask = () => newTaskIsValid && tasksStore.addTask(newTask);

  const handleShowCompletedTasks = () => setShowCompletedTasks(!showCompletedTasks);

  return (
    <Grid>
      <Button
        css={styles.showCompletedButton}
        variant="outlined"
        onClick={handleShowCompletedTasks}
      >
        {!showCompletedTasks ? "Mostrar completadas" : "Ocultar completadas"}
      </Button>
      <Grid>
        <Grid css={styles.inputContainer}>
          <TextField
            css={styles.input}
            size="small"
            placeholder="Nueva tarea"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button variant="contained" disabled={!newTaskIsValid} onClick={handleAddTask}>
            Agregar
          </Button>
        </Grid>
      </Grid>
      <Grid>
        {!taskListIsEmpty && (
          <TasksList tasksStore={tasksStore} showCompleted={showCompletedTasks} />
        )}
      </Grid>
    </Grid>
  );
});

export default AddTaskForm;
