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

import { Job } from "../types/Job.ts";
import { useJob } from "../context/JobContext.tsx";

const JobTable: React.FC = () => {
  const { jobs, setSelectedJob } = useJob();
  return (
    <TableContainer component={Paper} className="job-table">
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
          {jobs.map((row: Job, index: number) => (
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
  );
};

export default JobTable;

// TODO: Implement tests for component after completing proof of concept.
