import React from 'react';
import { Grid } from '@material-ui/core';

import { Heading2 } from 'components/Headings';
import avatarImage from 'assets/img/our-staff/avatar.png';
import {
  Divider,
  StyledGridHeader,
} from './styles';
import { StudentCard } from './components';
import { honoraryStudentList } from './const';

function HonoraryStudents() {
  return (
    <>
      <StyledGridHeader>
        <Heading2 margin="0px 0px 15px 0px">Honorary Students</Heading2>
        <Divider />
      </StyledGridHeader>

      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={6}
        >
          {honoraryStudentList.map((student) => (
            <StudentCard
              image={avatarImage}
              name={student.name}
              year={student.year}
              classRoom={student.classRoom}
              company={student.company}
            />
          ))}

        </Grid>
      </Grid>
    </>
  );
}

export default HonoraryStudents;
