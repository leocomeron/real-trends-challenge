/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { createStyles } from "././styles/emotion-styles";

import { Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import { tasksStore } from "./components/TasksStore";

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

const styles = createStyles({
  app: {
    textAlign: "center",
    backgroundColor: "#A9B4C2",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    margin: 0,
  },
  paper: {
    minWidth: "500px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)",
    padding: "16px",
  },
});

export default App;
