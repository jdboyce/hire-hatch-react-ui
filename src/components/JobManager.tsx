import React from "react";
import JobTable from "./JobTable.tsx";
import JobDetail from "./JobDetail.tsx";

const JobManager: React.FC = () => {
  return (
    <div className="job-manager">
      <JobTable />
      <JobDetail />
    </div>
  );
};

export default JobManager;
