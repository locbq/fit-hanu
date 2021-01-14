import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Grid,
} from '@material-ui/core';

import { Heading3 } from 'components/Headings';
import theme from 'theme';
import {
  StyledTableCellHead,
  StyledGrid,
  StyledGridLabelContainer,
  StyledLabelCell,
} from './styles';
import { weekDays } from './const';
import { Label } from './components';

function Timetable({ user }) {
  const renderTableCell = (array) => array?.map((data) => (
    data.type !== '' ? (
      <StyledLabelCell background={
        data.type === 'lecture' ? theme.palette.mainColor : theme.palette.blue
        }
      >
        <Heading3>{data.code}</Heading3>
      </StyledLabelCell>
    ) : (
      <StyledLabelCell>
        <Heading3>{data.code}</Heading3>
      </StyledLabelCell>
    )
  ));

  return (
    <>
      <StyledGridLabelContainer
        container
        justify="flex-end"
      >
        <Grid
          item
          container
          lg={3}
          md={3}
          sm={5}
          xs={5}
        >
          <Label
            background={theme.palette.mainColor}
            title="Lecture"

          />
          <Label
            background={theme.palette.blue}
            title="Tutorial"
          />
        </Grid>
      </StyledGridLabelContainer>
      <StyledGrid>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCellHead>
                <Heading3>Time/Day</Heading3>
              </StyledTableCellHead>
              {weekDays.map((day) => (
                <StyledTableCellHead>
                  <Heading3>{day}</Heading3>
                </StyledTableCellHead>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCellHead>
                <Heading3>7:30 - 9:00</Heading3>
              </StyledTableCellHead>
              {renderTableCell(user?.timetable?.firstShift)}
            </TableRow>
            <TableRow>
              <StyledTableCellHead>
                <Heading3>9:30 - 11:00</Heading3>
              </StyledTableCellHead>
              {renderTableCell(user?.timetable?.secondShift)}
            </TableRow>
            <TableRow>
              <StyledTableCellHead>
                <Heading3>1:30 - 3:00</Heading3>
              </StyledTableCellHead>
              {renderTableCell(user?.timetable?.thirdShift)}
            </TableRow>
            <TableRow>
              <StyledTableCellHead>
                <Heading3>3:30 - 5:00</Heading3>
              </StyledTableCellHead>
              {renderTableCell(user?.timetable?.fourthShift)}
            </TableRow>
          </TableBody>
        </Table>
      </StyledGrid>
    </>
  );
}

export default Timetable;
