/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your Applied Jobs or internships </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className=''>status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
  {[1, 2, 3, 4].map((item, index) => (
    <TableRow key={index}>
      <TableCell> 17-07-2024 </TableCell>
      <TableCell> Developer </TableCell>
      <TableCell>Google</TableCell>
      <TableCell className="text">
        <Badge className="px-2 py-1 bg-gray-700 text-white rounded-full">
          Selected
        </Badge>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

      </Table>
    </div>
  );
};

export default AppliedJobTable;
