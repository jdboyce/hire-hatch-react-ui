import React from "react";
import JobTable from "./JobTable.tsx";
import JobDetail from "./JobDetail.tsx";

function JobManager() {
  return (
    <div className="job-manager">
      <JobTable />
      <JobDetail />
    </div>
  );
}

export default JobManager;
