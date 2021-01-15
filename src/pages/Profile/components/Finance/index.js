import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import theme from 'theme';
import { calculateFee } from 'helpers';
import {
  StyledChip,
  StyledHeading2,
} from './styles';
import { Field } from '../components';

function Finance({ user }) {
  return (
    <>
      <StyledHeading2>
        Current Semester
        <StyledChip
          icon={<FontAwesomeIcon icon={faCheck} />}
          label="Paid"
          variant="outlined"
          color={theme.palette.successColor}
        />
      </StyledHeading2>
      {user?.currentSemesterGrade?.map((semester) => (
        <Field
          currency
          label={semester.subject}
          value={semester.fee}
        />
      ))}
      <Field
        currency
        label="Total"
        value={calculateFee(user?.currentSemesterGrade)}
      />
    </>
  );
}

export default Finance;
