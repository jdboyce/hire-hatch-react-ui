import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobManager from "./JobManager";
import { Job } from "../types/Job";

const mockJobData: Job[] = [
  {
    jobTitle: "Frontend Developer",
    companyName: "Tech Corp",
    priority: "High",
    status: "Open",
    source: "LinkedIn",
    postingUrl: "https://example.com/job-posting",
    notes: "Great company culture.",
  },
];

jest.mock(
  "../components/JobTable.tsx",
  () =>
    ({ onSelectJob }: { onSelectJob: (job: Job) => void }) =>
      (
        <div>
          <button onClick={() => onSelectJob(mockJobData[0])}>
            Select Frontend Developer
          </button>
        </div>
      )
);

jest.mock(
  "../components/JobDetail.tsx",
  () =>
    ({ job }: { job: Job | null }) =>
      <div>{job ? `Job: ${job.jobTitle}` : "Select a job to see details"}</div>
);

describe("JobManager component", () => {
  test("renders JobTable and JobDetail correctly", () => {
    render(<JobManager />);

    expect(screen.getByText("Select a job to see details")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Select Frontend Developer"));

    expect(screen.getByText("Job: Frontend Developer")).toBeInTheDocument();
  });
});
