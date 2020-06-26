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
} from 'components/Headings';

function WhyFIT() {
  return (
    <Section backgroundcolor="#fafafa">
      <BreadCrumb />
      <Container fixed>
        <Grid container>
          <Grid
            item
            lg={8}
            md={8}
          >
            <Heading2 margin="0px 0px 15px 0px">Why FIT</Heading2>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
          >
            <TableOfContents />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default WhyFIT;
