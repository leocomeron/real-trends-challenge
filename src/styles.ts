import { createStyles } from "./emotion-styles";

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

export default styles;
