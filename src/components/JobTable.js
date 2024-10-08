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

function JobTable() {
  return (
    <TableContainer component={Paper} className="Table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Job Title</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Source</TableCell>
            <TableCell>Posting URL</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobData.map((row, index) => (
            <TableRow key={index}>
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
              <TableCell>{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default JobTable;
