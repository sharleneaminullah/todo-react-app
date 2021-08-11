import React from "react";
import ReactDOM from "react-dom";

import Header from "./../Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header></Header>, div);
});

test("renders Header", () => {
  render(<Header></Header>);
  expect(screen.getByText("Todo-List")).toHaveTextContent("Todo-List");
});
