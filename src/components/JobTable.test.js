import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobTable from "./JobTable";
import { jobData } from "../data/JobData";

describe("JobTable Component", () => {
  test("renders without crashing", () => {
    render(<JobTable />);
  });

  test("renders table headers correctly", () => {
    render(<JobTable />);
    expect(screen.getByText("Job Title")).toBeInTheDocument();
    expect(screen.getByText("Company Name")).toBeInTheDocument();
    expect(screen.getByText("Priority")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Source")).toBeInTheDocument();
    expect(screen.getByText("Posting URL")).toBeInTheDocument();
    expect(screen.getByText("Notes")).toBeInTheDocument();
  });

  test("renders job data correctly", () => {
    render(<JobTable />);
    jobData.forEach((job) => {
      const jobTitleElements = screen.getAllByText(job.jobTitle);
      const companyNameElements = screen.getAllByText(job.companyName);
      const priorityElements = screen.getAllByText(job.priority);
      const statusElements = screen.getAllByText(job.status);
      const sourceElements = screen.getAllByText(job.source);
      const notesElements = screen.getAllByText(job.notes);

      expect(jobTitleElements.length).toBeGreaterThan(0);
      expect(companyNameElements.length).toBeGreaterThan(0);
      expect(priorityElements.length).toBeGreaterThan(0);
      expect(statusElements.length).toBeGreaterThan(0);
      expect(sourceElements.length).toBeGreaterThan(0);
      expect(notesElements.length).toBeGreaterThan(0);
    });
  });
});
