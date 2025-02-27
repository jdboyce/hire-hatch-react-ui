import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useJob } from "../context/JobContext.tsx";

const JobDetail: React.FC = () => {
  const { selectedJob, saveJob } = useJob();
  const { register, setValue, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (selectedJob) {
      Object.keys(selectedJob).forEach((key) => {
        setValue(key, selectedJob[key]);
      });
    }
  }, [selectedJob, setValue]);

  const onSubmit = (data) => {
    saveJob(data);
  };

  const onCancel = () => {
    if (selectedJob) {
      reset(selectedJob);
    }
  };

  if (!selectedJob) {
    return <div className="no-job-selected">Select a job to see details.</div>;
  }

  return (
    <div className="job-detail">
      <form className="job-detail-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid-container">
          <div>
            <label htmlFor="jobTitle">Job Title:</label>
            <input id="jobTitle" type="text" {...register("jobTitle")} />
          </div>
          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input id="companyName" type="text" {...register("companyName")} />
          </div>
          <div>
            <label htmlFor="priority">Priority:</label>
            <input id="priority" type="text" {...register("priority")} />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <input id="status" type="text" {...register("status")} />
          </div>
          <div>
            <label htmlFor="source">Source:</label>
            <input id="source" type="text" {...register("source")} />
          </div>
          <div>
            <label htmlFor="postingUrl">Posting URL:</label>
            <input id="postingUrl" type="text" {...register("postingUrl")} />
          </div>
          <div className="notes">
            <label htmlFor="notes">Notes:</label>
            <textarea id="notes" {...register("notes")} />
          </div>
          <div className="buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobDetail;

// TODO: Implement tests for component after completing proof of concept.
