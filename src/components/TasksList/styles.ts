import { createStyles } from "../../emotion-styles";

const styles = createStyles({
  taskItemNotCompleted: {
    textDecoration: "none",
  },
  taskItemCompleted: {
    textDecoration: "line-through",
  },
  cardContainer: {
    minWidth: "500px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)",
    padding: "16px",
  },
  listContainer: {
    justifyContent: "center",
    display: "flex",
  },
  textContainer: {
    display: "flex",
  },
  taskTitle: {
    margin: "auto",
    cursor: "pointer",
  },
  input: {
    margin: "0px 8px 0px 10px",
  },
});

export default styles;
