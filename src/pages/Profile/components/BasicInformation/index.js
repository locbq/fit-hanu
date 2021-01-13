import React from 'react';
import {
  Grid,
  Table,
  TableRow,
} from '@material-ui/core';

import avatarImage from 'assets/img/our-staff/avatar.png';
import { Heading3 } from 'components/Headings';
import {
  StyledImageAvatar,
  StyledGridInfo,
  StyledTableCell,
} from './styles';

export default function BasicInformation({
  fullName = '',
  studentId = '',
  dateOfBirth = '',
  classRoom = '',
}) {
  return (
    <Grid container>
      <Grid
        item
        lg={3}
        md={3}
        sm={12}
        xs={12}
      >
        <StyledImageAvatar src={avatarImage} alt="avatar" />
      </Grid>
      <StyledGridInfo
        item
        lg={9}
        md={9}
        sm={12}
        xs={12}
      >
        <Table>
          <TableRow>
            <StyledTableCell>
              <Heading3>
                Fullname
              </Heading3>
            </StyledTableCell>
            <StyledTableCell>
              <Heading3>
                {fullName}
              </Heading3>
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              <Heading3>
                Student ID
              </Heading3>
            </StyledTableCell>
            <StyledTableCell>
              <Heading3>
                {studentId}
              </Heading3>
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              <Heading3>
                Date of Birth
              </Heading3>
            </StyledTableCell>
            <StyledTableCell>
              <Heading3>
                {dateOfBirth}
              </Heading3>
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              <Heading3>
                Class
              </Heading3>
            </StyledTableCell>
            <StyledTableCell>
              <Heading3>
                {classRoom}
              </Heading3>
            </StyledTableCell>
          </TableRow>
        </Table>
      </StyledGridInfo>
    </Grid>
  );
}
