import React from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';
import {
  Switch,
  Route,
} from 'react-router-dom';

import {
  Section,
  BreadCrumb,
  TableOfContents,
} from 'components';
import { StyledGridContent } from './styles';
import { contentList } from './const';
import {
  AboutUs,
  OurObjectives,
  OurStaff,
  OurVisions,
} from './components';

function FacultyIT() {
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
              <Switch>
                <Route
                  exact
                  path="/faculty-of-IT"
                  component={AboutUs}
                />
                <Route
                  path="/faculty-of-IT/about-us"
                  component={AboutUs}
                />
                <Route
                  path="/faculty-of-IT/our-objectives"
                  component={OurObjectives}
                />
                <Route
                  path="/faculty-of-IT/our-staff"
                  component={OurStaff}
                />
                <Route
                  path="/faculty-of-IT/our-visions"
                  component={OurVisions}
                />
              </Switch>
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

export default FacultyIT;
