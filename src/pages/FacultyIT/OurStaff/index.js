import React from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';

import {
  Section,
  BreadCrumb,
  TableOfContents,
} from 'components';
import {
  Heading2,
  Heading3,
  // Paragraph,
} from 'components/Headings';
import avatarImage from 'assets/img/our-staff/avatar.png';
import { contentList } from './const';
import {
  StyledGridContent,
  Divider,
  StyledGridHeader,
  // StyledList,
  // StyledListItem,
} from './styles';
import { StaffCard } from './components';

function OurStaff() {
  return (
    <Section backgroundcolor="#fafafa">
      <BreadCrumb />
      <Container fixed>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={8}
          >
            <StyledGridContent>
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

            </StyledGridContent>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
          >
            <TableOfContents links={contentList} />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default OurStaff;
