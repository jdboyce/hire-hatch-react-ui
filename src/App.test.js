import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

jest.mock("./components/JobManager.tsx", () => () => (
  <div>Mocked JobManager</div>
));

describe("App Component", () => {
  test("renders Hire Hatch heading", () => {
    render(<App />);
    const headingElement = screen.getByText(/Hire Hatch/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders JobManager component", () => {
    render(<App />);
    const jobManagerElement = screen.getByText(/Mocked JobManager/i);
    expect(jobManagerElement).toBeInTheDocument();
  });
});
