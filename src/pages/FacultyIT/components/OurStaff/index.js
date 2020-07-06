import React from 'react';
import { Grid } from '@material-ui/core';

import {
  Heading2,
  Heading3,
} from 'components/Headings';
import avatarImage from 'assets/img/our-staff/avatar.png';
import {
  Divider,
  StyledGridHeader,
} from './styles';
import { StaffCard } from './components';

function OurStaff() {
  return (
    <>
      <StyledGridHeader>
        <Heading2 margin="0px 0px 15px 0px">Our Staff</Heading2>
        <Divider />
      </StyledGridHeader>

      <Heading3
        margin="24px 0px"
        transform="capitalize"
      >
        Management Board
      </Heading3>
      <Grid container>
        <Grid item lg={6}>
          <StaffCard
            image={avatarImage}
            title="Dean"
            name="Dean Name"
            office="Room 210 Building C"
            phone="123-456-789"
          />
          <StaffCard
            image={avatarImage}
            title="Vice Dean"
            name="Vice Dean Name"
            office="Room 210 Building C"
            phone="123-456-789"
          />
        </Grid>
      </Grid>

      <Heading3
        margin="24px 0px"
        transform="capitalize"
      >
        Administrative board
      </Heading3>
      <Grid container>
        <Grid item lg={6}>
          <StaffCard
            image={avatarImage}
            title="Administrative Assistant"
            name="Administrative Assistant Name"
            office="Room 210 Building C"
            phone="123-456-789"
          />
          <StaffCard
            image={avatarImage}
            title="Study Assistant"
            name="Study Assistant Name"
            office="Room 210 Building C"
            phone="123-456-789"
          />
          <StaffCard
            image={avatarImage}
            title="Computer and Internet Basics Study Assistant"
            name="Assistant Name"
            office="Room 210 Building C"
            phone="123-456-789"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default OurStaff;
