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
  Paragraph,
} from 'components/Headings';
import { contentList } from './const';
import {
  StyledGridContent,
  Divider,
  StyledGridHeader,
} from './styles';

function GraduationPlan() {
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
            sm={12}
            xs={12}
          >
            <StyledGridContent>
              <StyledGridHeader>
                <Heading2 margin="0px 0px 15px 0px">Graduation Plan</Heading2>
                <Divider />
              </StyledGridHeader>

              <Heading3>Graduation Plan for class 2015 - 2016</Heading3>

              <Paragraph
                margin="12px 0px"
                align="justify"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum tempus maximus. Suspendisse facilisis interdum enim eget hendrerit. Fusce rhoncus feugiat dui, eu pharetra nulla pulvinar non. Morbi sagittis blandit lorem. Integer vitae ullamcorper felis. Vivamus vel elit euismod, bibendum massa et, finibus ante. Fusce eget magna scelerisque tortor congue vehicula. Aliquam diam tortor, luctus a auctor et, bibendum et nisi
              </Paragraph>

            </StyledGridContent>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
          >
            <TableOfContents links={contentList} />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default GraduationPlan;
