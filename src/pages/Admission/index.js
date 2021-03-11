import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
  Switch,
  Route,
} from 'react-router-dom';

import {
  BreadCrumb,
  TableOfContents,
} from 'components';
import {
  StyledSection,
  StyledGridContent,
} from './styles';
import { contentList } from './const';
import {
  AdmissionInformation,
  AnnualStatistics,
  WhyFIT,
} from './components';

function Admission() {
  return (
    <StyledSection>
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
                  path="/admission"
                  component={WhyFIT}
                />
                <Route
                  path="/admission/why-FIT"
                  component={WhyFIT}
                />
                <Route
                  path="/admission/admission-information"
                  component={AdmissionInformation}
                />
                <Route
                  path="/admission/annual-statistics"
                  component={AnnualStatistics}
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
    </StyledSection>
  );
}

export default Admission;
