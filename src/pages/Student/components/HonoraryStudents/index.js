import React from 'react';
import { Grid } from '@material-ui/core';

import { ContentHeader } from 'components';
import avatarImage from 'assets/img/our-staff/avatar.png';
import { StudentCard } from './components';
import { honoraryStudentList } from './const';

function HonoraryStudents() {
  return (
    <>
      <ContentHeader title="Honorary Students" />

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
