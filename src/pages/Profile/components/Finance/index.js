import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import theme from 'theme';
import {
  StyledChip,
  StyledHeading2,
} from './styles';
import { Field } from '../components';

function Finance({ user }) {
  console.log(user);
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
          label={semester.subject}
          value={semester.fee}
        />
      ))}
    </>
  );
}

export default Finance;
