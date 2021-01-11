import React from 'react';
import { Grid } from '@material-ui/core';

import avatarImage from 'assets/img/our-staff/avatar.png';
import { Field } from './components';
import {
  StyledImageAvatar,
  StyledGridInfo,
} from './styles';

export default function BasicInformation({
  fullName = '',
  studentId = '',
  dateOfBirth = '',
  classRoom = '',
  gpa = '',
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
        <Field
          label="Fullname"
          value={fullName}
        />
        <Field
          label="Student ID"
          value={studentId}
        />
        <Field
          label="Date of Birth"
          value={dateOfBirth}
        />
        <Field
          label="Class"
          value={classRoom}
        />
        <Field
          label="GPA"
          value={gpa}
        />
      </StyledGridInfo>
    </Grid>
  );
}
