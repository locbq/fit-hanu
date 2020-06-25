import React from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';

import {
  Section,
  BreadCrumb,
} from 'components';
import { Heading1 } from 'components/Headings';

function AboutUs() {
  return (
    <Section>
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
            <Heading1>About Us</Heading1>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
          />
        </Grid>
      </Container>
    </Section>
  );
}

export default AboutUs;
