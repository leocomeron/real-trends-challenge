/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { createStyles } from "././styles/emotion-styles";

import { Card, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import { tasksStore } from "./components/TasksStore";

function App() {
  useEffect(() => {
    tasksStore.loadTasks();
  }, []);

  return (
    <Grid css={styles.app}>
      <Card css={styles.cardContainer}>
        <Typography variant="h3">Lista de tareas</Typography>
        <AddTaskForm tasksStore={tasksStore} />
      </Card>
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
  },
  cardContainer: {
    minWidth: "500px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)",
    padding: "16px",
  },
});

export default App;