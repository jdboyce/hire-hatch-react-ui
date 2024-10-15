import React, { useState, useEffect } from "react";
import JobTable from "../components/JobTable.tsx";
import JobDetail from "../components/JobDetail.tsx";
import { Job } from "../types/Job.ts";
import { getJobs } from "../services/jobService.ts";

function JobManager() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="job-manager">
      <JobTable jobs={jobs} onSelectJob={setSelectedJob} />
      <JobDetail job={selectedJob} />
    </div>
  );
}

export default JobManager;

// TODO: Implement tests for component after completing proof of concept.
