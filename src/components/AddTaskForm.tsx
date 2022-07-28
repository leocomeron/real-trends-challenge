/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { createStyles } from "../styles/emotion-styles";

import React, { useState } from "react";
import { TasksStoreImplementation } from "./TasksStore";
import { observer } from "mobx-react";
import TasksList from "./TasksList";
import { Button, Grid, TextField } from "@mui/material";

interface AddTaskFormProps {
  tasksStore: TasksStoreImplementation;
}

const AddTaskForm: React.FC<AddTaskFormProps> = observer(({ tasksStore }) => {
  const [newTask, setNewTask] = useState<string>("");
  const [showCompletedTasks, setShowCompletedTasks] = useState<boolean>(true);
  const newTaskIsValid = newTask.length > 0;

  const addTaskHandler = () => {
    newTaskIsValid && tasksStore.addTask(newTask);
  };

  return (
    <Grid>
      <Button
        css={styles.showCompletedButton}
        variant="outlined"
        onClick={() => {
          setShowCompletedTasks(!showCompletedTasks);
        }}
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
          <Button variant="contained" disabled={!newTaskIsValid} onClick={addTaskHandler}>
            Agregar
          </Button>
        </Grid>
      </Grid>
      <Grid>
        <TasksList tasksStore={tasksStore} showCompleted={showCompletedTasks} />
      </Grid>
    </Grid>
  );
});

const styles = createStyles({
  inputContainer: {
    margin: "16px",
  },
  input: {
    marginRight: "8px",
  },
  showCompletedButton: {
    marginTop: "16px",
  },
});

export default AddTaskForm;
