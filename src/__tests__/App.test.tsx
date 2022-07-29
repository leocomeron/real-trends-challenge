import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders the title", () => {
  render(<App />);
  const title = screen.getByText(/Lista de tareas/i);
  expect(title).toBeInTheDocument();
});
