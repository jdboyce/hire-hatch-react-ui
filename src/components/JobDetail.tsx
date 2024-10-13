import React from "react";
import { Job } from "../types/Job";

interface JobDetailProps {
  job: Job | null;
}

const JobDetail: React.FC<JobDetailProps> = ({ job }) => {
  if (!job) {
    return <div>Select a job to see details</div>;
  }

  return (
    <div className="job-detail">
      <form className="job-detail-form">
        <div className="grid-container">
          <div>
            <label htmlFor="jobTitle">Job Title:</label>
            <input id="jobTitle" type="text" value={job.jobTitle} readOnly />
          </div>
          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input
              id="companyName"
              type="text"
              value={job.companyName}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="priority">Priority:</label>
            <input id="priority" type="text" value={job.priority} readOnly />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <input id="status" type="text" value={job.status} readOnly />
          </div>
          <div>
            <label htmlFor="source">Source:</label>
            <input id="source" type="text" value={job.source} readOnly />
          </div>
          <div>
            <label htmlFor="postingUrl">Posting URL:</label>
            <input
              id="postingUrl"
              type="text"
              value={job.postingUrl}
              readOnly
            />
          </div>
          <div className="notes">
            <label htmlFor="notes">Notes:</label>
            <textarea id="notes" value={job.notes} readOnly />
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobDetail;
