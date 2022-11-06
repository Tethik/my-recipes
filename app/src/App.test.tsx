import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn welcome home", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome home/i);
  expect(linkElement).toBeInTheDocument();
});
