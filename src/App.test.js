import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
  test("renders Hire Hatch heading", () => {
    render(<App />);
    const headingElement = screen.getByText(/Hire Hatch/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders JobTable component", () => {
    render(<App />);
    const jobTableElement = screen.getByRole("table");
    expect(jobTableElement).toBeInTheDocument();
  });
});
