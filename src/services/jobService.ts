import { Job } from "../types/Job.ts";
import { v4 as uuidv4 } from "uuid";

const API_URL = "http://localhost:3001/jobs";

export const fetchJobsFromServer = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch jobs: ${errorText}`);
  }
  return response.json();
};

export const saveJobToServer = async (job: Job) => {
  const isNewJob = !job.id;
  if (isNewJob) {
    job.id = uuidv4();
  }
  const options = {
    method: isNewJob ? "POST" : "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  };

  const response = await fetch(
    `${API_URL}${isNewJob ? "" : `/${job.id}`}`,
    options
  );
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to save job: ${errorText}`);
  }

  return response.json();
};

export const deleteJobFromServer = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to delete job: ${errorText}`);
  }
};
