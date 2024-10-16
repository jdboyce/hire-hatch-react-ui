import React, { createContext, useContext, useState, useEffect } from "react";
import { Job } from "../types/Job";
import {
  fetchJobsFromServer,
  saveJobToServer,
} from "../services/jobService.ts";

const JobContext = createContext<{
  jobs: Job[];
  selectedJob: Job | null;
  setSelectedJob: React.Dispatch<React.SetStateAction<Job | null>>;
  fetchJobs: () => Promise<void>;
  saveJob: (job: Job) => Promise<void>;
}>({
  jobs: [],
  selectedJob: null,
  setSelectedJob: () => {},
  fetchJobs: async () => {},
  saveJob: async (job: Job) => {},
});

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const fetchJobs = async () => {
    try {
      const data = await fetchJobsFromServer();
      setJobs(data);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    }
  };

  const saveJob = async (job: Job) => {
    try {
      const savedJob = await saveJobToServer(job);
      setJobs((prevJobs) => {
        const jobIndex = prevJobs.findIndex((j) => j.id === job.id);
        if (jobIndex > -1) {
          const updatedJobs = [...prevJobs];
          updatedJobs[jobIndex] = savedJob;
          return updatedJobs;
        }
        return prevJobs;
      });
      setSelectedJob(savedJob);
    } catch (error) {
      console.error("Failed to save job:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobContext.Provider
      value={{ jobs, selectedJob, setSelectedJob, fetchJobs, saveJob }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error("useJob must be used within a JobProvider");
  }
  return context;
};
