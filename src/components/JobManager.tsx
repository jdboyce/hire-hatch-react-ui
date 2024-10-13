import React, { useState } from "react";
import JobTable from "../components/JobTable.tsx";
import JobDetail from "../components/JobDetail.tsx";
import { Job } from "../types/Job.ts";

function JobManager() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="job-manager">
      <JobTable onSelectJob={setSelectedJob} />
      <JobDetail job={selectedJob} />
    </div>
  );
}

export default JobManager;
