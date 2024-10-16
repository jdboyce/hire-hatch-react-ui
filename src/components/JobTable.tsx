import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useJob } from "../context/JobContext.tsx";

const JobTable: React.FC = () => {
  const { jobs, setSelectedJob, addJob, deleteJob, selectedJob } = useJob();

  const handleAdd = () => {
    const newJob = {
      jobTitle: "",
      companyName: "",
      priority: "",
      status: "",
      source: "",
      postingUrl: "",
      notes: "",
    };
    addJob(newJob);
  };

  const handleDelete = () => {
    if (
      selectedJob &&
      window.confirm("Are you sure you want to delete this job?")
    ) {
      if (selectedJob && selectedJob.id) {
        deleteJob(selectedJob.id);
      }
    }
  };

  return (
    <div className="job-table">
      <div className="job-table-actions buttons">
        <button type="button" onClick={handleAdd}>
          Add
        </button>
        <button type="button" onClick={handleDelete} disabled={!selectedJob}>
          Delete
        </button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Job Title</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Posting URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((row, index) => (
              <TableRow key={index} onClick={() => setSelectedJob(row)}>
                <TableCell>{row.jobTitle}</TableCell>
                <TableCell>{row.companyName}</TableCell>
                <TableCell>{row.priority}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.source}</TableCell>
                <TableCell>
                  <a href={row.postingUrl} target="_blank" rel="noreferrer">
                    {row.postingUrl}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default JobTable;
