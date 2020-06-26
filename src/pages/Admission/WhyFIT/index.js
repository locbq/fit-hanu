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
import { contentList } from './const';
import {
  StyledGridContent,
  Divider,
  StyledGridHeader,
} from './styles';

function WhyFIT() {
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
                <Heading2 margin="0px 0px 15px 0px">Why FIT</Heading2>
                <Divider />
              </StyledGridHeader>
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

export default WhyFIT;