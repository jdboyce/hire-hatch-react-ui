import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobDetail from "./JobDetail";
import { Job } from "../types/Job";

const mockJob: Job = {
  jobTitle: "Frontend Developer",
  companyName: "Tech Corp",
  priority: "High",
  status: "Open",
  source: "LinkedIn",
  postingUrl: "https://example.com/job-posting",
  notes: "Great company culture.",
};

describe("JobDetail component", () => {
  test("renders 'Select a job to see details' when no job is selected", () => {
    render(<JobDetail job={null} />);

    expect(screen.getByText("Select a job to see details")).toBeInTheDocument();
  });

  test("renders job details correctly when a job is passed as a prop", () => {
    render(<JobDetail job={mockJob} />);

    expect(screen.getByLabelText("Job Title:")).toHaveValue(mockJob.jobTitle);
    expect(screen.getByLabelText("Company Name:")).toHaveValue(
      mockJob.companyName
    );
    expect(screen.getByLabelText("Priority:")).toHaveValue(mockJob.priority);
    expect(screen.getByLabelText("Status:")).toHaveValue(mockJob.status);
    expect(screen.getByLabelText("Source:")).toHaveValue(mockJob.source);
    expect(screen.getByLabelText("Posting URL:")).toHaveValue(
      mockJob.postingUrl
    );
    expect(screen.getByLabelText("Notes:")).toHaveValue(mockJob.notes);
  });

  test("renders empty fields when job fields are empty strings", () => {
    const emptyJob: Job = {
      jobTitle: "",
      companyName: "",
      priority: "",
      status: "",
      source: "",
      postingUrl: "",
      notes: "",
    };

    render(<JobDetail job={emptyJob} />);

    expect(screen.getByLabelText("Job Title:")).toHaveValue("");
    expect(screen.getByLabelText("Company Name:")).toHaveValue("");
    expect(screen.getByLabelText("Priority:")).toHaveValue("");
    expect(screen.getByLabelText("Status:")).toHaveValue("");
    expect(screen.getByLabelText("Source:")).toHaveValue("");
    expect(screen.getByLabelText("Posting URL:")).toHaveValue("");
    expect(screen.getByLabelText("Notes:")).toHaveValue("");
  });
});
