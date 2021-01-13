import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { Heading3 } from 'components/Headings';
import {
  StyledTableCellHead,
  StyledGrid,
} from './styles';
import { weekDays } from './const';

function Timetable() {
  return (
    <StyledGrid>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCellHead>
              <Heading3>Time/Day</Heading3>
            </StyledTableCellHead>
            {weekDays.map((day) => (
              <StyledTableCellHead><Heading3>{day}</Heading3></StyledTableCellHead>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>7:30 - 9:00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>9:30 - 11:00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1:30 - 3:00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3:30 - 5:00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </StyledGrid>
  );
}

export default Timetable;
