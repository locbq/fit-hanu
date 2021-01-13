import React from 'react';
import { Grid } from '@material-ui/core';

import { calculateGrade } from 'helpers/user/calculateGrade';
import { calculateGpa } from 'helpers/user/calculateGpa';
import { Field } from './components';
import {
  currentSemesterGrade,
  previousSemesterGrade,
} from './const';
import { StyledHeading2 } from './styles';

function Grades() {
  return (
    <>
      <StyledHeading2>Current semester</StyledHeading2>
      <Grid container>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
        >
          {currentSemesterGrade.map((grade) => {
            const calculatedGrade = calculateGrade(grade.grade);
            return (
              <Field
                label={grade.subject}
                value={calculatedGrade.letter}
              />
            );
          })}
          <Field
            label="Semester average"
            value={calculateGpa(currentSemesterGrade)}
          />
        </Grid>
      </Grid>

      <StyledHeading2>Previous semester</StyledHeading2>
      <Grid container>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
        >
          {previousSemesterGrade.map((grade) => {
            const calculatedGrade = calculateGrade(grade.grade);
            return (
              <Field
                label={grade.subject}
                value={calculatedGrade.letter}
              />
            );
          })}
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
        >
          <Field
            label="Current GPA"
            value={calculateGpa(currentSemesterGrade.concat(previousSemesterGrade))}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Grades;