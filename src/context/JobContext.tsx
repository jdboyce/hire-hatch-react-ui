import React, { createContext, useContext, useState, useEffect } from "react";
import { Job } from "../types/Job";
import {
  fetchJobsFromServer,
  saveJobToServer,
  deleteJobFromServer,
} from "../services/jobService.ts";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedJob } from "../store/actions/selectedJobActions.js";

const JobContext = createContext<{
  jobs: Job[];
  selectedJob: Job | null;
  setSelectedJob: (job: Job | null) => void;
  fetchJobs: () => Promise<void>;
  saveJob: (job: Job) => Promise<void>;
  addJob: (job: Job) => void;
  deleteJob: (id: string) => Promise<void>;
}>({
  jobs: [],
  selectedJob: null,
  setSelectedJob: () => {},
  fetchJobs: async () => {},
  saveJob: async (job: Job) => {},
  addJob: (job: Job) => {},
  deleteJob: async (id: string) => {},
});

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const selectedJob = useSelector(
    (state: { selectedJob: Job | null }) => state.selectedJob
  );
  const dispatch = useDispatch();

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
        const filteredJobs = prevJobs.filter(
          (j) => j.id !== "" && j.id !== job.id
        );
        const jobIndex = filteredJobs.findIndex((j) => j.id === job.id);
        if (jobIndex > -1) {
          const updatedJobs = [...filteredJobs];
          updatedJobs[jobIndex] = savedJob;
          return updatedJobs;
        } else {
          return [...filteredJobs, savedJob];
        }
      });
      dispatch(setSelectedJob(savedJob));
    } catch (error) {
      console.error("Failed to save job:", error);
    }
  };

  const addJob = (job: Job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
    dispatch(setSelectedJob(job));
  };

  const deleteJob = async (id: string) => {
    try {
      await deleteJobFromServer(id);
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      dispatch(setSelectedJob(null));
    } catch (error) {
      console.error("Failed to delete job:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobContext.Provider
      value={{
        jobs,
        selectedJob,
        setSelectedJob: (job) => dispatch(setSelectedJob(job)),
        fetchJobs,
        saveJob,
        addJob,
        deleteJob,
      }}
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
