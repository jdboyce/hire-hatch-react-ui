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

import { jobData } from "../data/JobData.ts";
import { Job } from "../types/Job.ts";

interface JobTableProps {
  onSelectJob: (job: Job) => void;
}

const JobTable: React.FC<JobTableProps> = ({ onSelectJob }) => {
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
          {jobData.map((row: Job, index: number) => (
            <TableRow key={index} onClick={() => onSelectJob(row)}>
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
