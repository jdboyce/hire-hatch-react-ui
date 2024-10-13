import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobTable from "./JobTable";

jest.mock("../data/JobData.ts", () => ({
  jobData: [
    {
      jobTitle: "Frontend Developer",
      companyName: "Tech Corp",
      priority: "High",
      status: "Open",
      source: "LinkedIn",
      postingUrl: "https://example.com/job-posting",
      notes: "Great company culture.",
    },
    {
      jobTitle: "Backend Developer",
      companyName: "CodeWorks",
      priority: "Medium",
      status: "Closed",
      source: "Indeed",
      postingUrl: "https://example.com/backend-job",
      notes: "Agile environment.",
    },
  ],
}));

describe("JobTable component", () => {
  test("renders job table with correct headers", () => {
    render(<JobTable onSelectJob={jest.fn()} />);

    expect(screen.getByText("Job Title")).toBeInTheDocument();
    expect(screen.getByText("Company Name")).toBeInTheDocument();
    expect(screen.getByText("Priority")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Source")).toBeInTheDocument();
    expect(screen.getByText("Posting URL")).toBeInTheDocument();
  });

  test("renders job rows based on the data", () => {
    render(<JobTable onSelectJob={jest.fn()} />);

    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Tech Corp")).toBeInTheDocument();
    expect(screen.getByText("Backend Developer")).toBeInTheDocument();
    expect(screen.getByText("CodeWorks")).toBeInTheDocument();

    const frontendJobLink = screen.getByText("https://example.com/job-posting");
    const backendJobLink = screen.getByText("https://example.com/backend-job");
    expect(frontendJobLink).toBeInTheDocument();
    expect(frontendJobLink).toHaveAttribute(
      "href",
      "https://example.com/job-posting"
    );
    expect(backendJobLink).toBeInTheDocument();
    expect(backendJobLink).toHaveAttribute(
      "href",
      "https://example.com/backend-job"
    );
  });

  test("calls onSelectJob with correct job data when a row is clicked", () => {
    const mockOnSelectJob = jest.fn();
    render(<JobTable onSelectJob={mockOnSelectJob} />);

    // eslint-disable-next-line testing-library/no-node-access
    const firstRow = screen.getByText("Frontend Developer").closest("tr");
    fireEvent.click(firstRow!);

    expect(mockOnSelectJob).toHaveBeenCalledWith({
      jobTitle: "Frontend Developer",
      companyName: "Tech Corp",
      priority: "High",
      status: "Open",
      source: "LinkedIn",
      postingUrl: "https://example.com/job-posting",
      notes: "Great company culture.",
    });

    // eslint-disable-next-line testing-library/no-node-access
    const secondRow = screen.getByText("Backend Developer").closest("tr");
    fireEvent.click(secondRow!);

    expect(mockOnSelectJob).toHaveBeenCalledWith({
      jobTitle: "Backend Developer",
      companyName: "CodeWorks",
      priority: "Medium",
      status: "Closed",
      source: "Indeed",
      postingUrl: "https://example.com/backend-job",
      notes: "Agile environment.",
    });
  });
});
