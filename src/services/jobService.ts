import { Job } from "../types/Job";

const API_URL = "http://localhost:3001/jobs";

export const fetchJobsFromServer = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return response.json();
};

export const saveJobToServer = async (job: Job) => {
  const options = {
    method: job.id ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  };

  const response = await fetch(`${API_URL}/${job.id || ""}`, options);
  if (!response.ok) {
    throw new Error("Failed to save job");
  }
  return response.json();
};
