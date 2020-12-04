import React from 'react';
import { Grid } from '@material-ui/core';

import avatarImage from 'assets/img/our-staff/avatar.png';
import {
  Divider,
  StyledGridHeader,
  StyledHeading2,
  StyledHeading3,
} from './styles';
import { StaffCard } from './components';

function OurStaff() {
  return (
    <>
      <StyledGridHeader>
        <StyledHeading2>Our Staff</StyledHeading2>
        <Divider />
      </StyledGridHeader>

      <StyledHeading3 transform="capitalize">
        Management board
      </StyledHeading3>
      <Grid container>
        <Grid
          item
          lg={6}
        >
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

      <StyledHeading3 transform="capitalize">
        Administrative board
      </StyledHeading3>
      <Grid container>
        <Grid
          item
          lg={6}
        >
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
