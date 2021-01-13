import React from 'react';
import { Grid } from '@material-ui/core';

import { calculateGrade } from 'helpers/user/calculateGrade';
import { calculateGpa } from 'helpers/user/calculateGpa';
import { Field } from './components';
import { StyledHeading2 } from './styles';

function Grades({ user }) {
  return (
    <Grid container>
      {user?.currentSemesterGrade?.length > 0 && (
      <Grid
        item
        lg={6}
        md={6}
        sm={12}
        xs={12}
      >
        <StyledHeading2>Current semester</StyledHeading2>
        {user?.currentSemesterGrade?.map((grade) => {
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
          value={calculateGpa(user?.currentSemesterGrade)}
        />
      </Grid>
      )}

      <Grid
        item
        lg={6}
        md={6}
        sm={12}
        xs={12}
      >
        <StyledHeading2>Previous semester</StyledHeading2>
        {user?.previousSemesterGrade?.map((grade) => {
          const calculatedGrade = calculateGrade(grade.grade);
          return (
            <Field
              label={grade.subject}
              value={calculatedGrade.letter}
            />
          );
        })}
        <Field
          label="Current GPA"
          value={calculateGpa(user?.currentSemesterGrade?.concat(user?.previousSemesterGrade))}
        />
      </Grid>
    </Grid>
  );
}

export default Grades;
