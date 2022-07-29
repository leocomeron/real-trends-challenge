/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

import { useEffect } from "react";
import styles from "./styles";
import { Grid, Paper, Typography } from "@mui/material";
import AddTaskForm from "./components/AddTaskForm";
import { tasksStore } from "./store/TasksStore";

function App() {
  useEffect(() => {
    tasksStore.loadTasks();
  }, []);

  return (
    <Grid css={styles.app}>
      <Paper css={styles.paper}>
        <Typography variant="h3">Lista de tareas</Typography>
        <AddTaskForm tasksStore={tasksStore} />
      </Paper>
    </Grid>
  );
}

export default App;
